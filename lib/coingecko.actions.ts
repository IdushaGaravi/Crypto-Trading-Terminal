'use server';

import qs from 'query-string';
import { cache } from 'react';

const BASE_URL = process.env.COINGECKO_BASE_URL;
const API_KEY = process.env.COINGECKO_API_KEY;

if (!BASE_URL) throw new Error('Could not get base url');
if (!API_KEY) throw new Error('Could not get api key');

export const fetcher = cache(async function fetcher<T>(
    endpoint: string,
    params?: QueryParams,
    revalidate = 60
): Promise<T> {
    const url = qs.stringifyUrl({
        url: `${BASE_URL}${endpoint}`,
        query: params,
    }, { skipEmptyString: true, skipNull: true });

    const response = await fetch(url, {
        headers: {
            "x-cg-api-key": API_KEY,
            "Content-Type": "application/json",
        } as Record<string, string>,
        next: { revalidate }
    });

    if (!response.ok) {
        const errorBody: CoinGeckoErrorBody = await response.json().catch(() => ({}));
        throw new Error(`API Error: ${response.status}: ${errorBody.error || response.statusText}`);
    }

    return response.json();
});

export async function getPools(
    id: string,
    network?: string | null,
    contractAddress?: string | null
): Promise<PoolData> {
    const fallback: PoolData = {
        id: "",
        address: "",
        name: "",
        network: "",
    };

    if (network && contractAddress) {
        try {
            const poolData = await fetcher<{ data: PoolData[] }>(
                `/onchain/networks/${network}/tokens/${contractAddress}/pools`
            );
            return poolData.data?.[0] ?? fallback;
        } catch (error) {
            console.error('getPools (by contract) failed:', error);
            return fallback;
        }
    }

    try {
        const poolData = await fetcher<{ data: PoolData[] }>(
            "/onchain/search/pools",
            { query: id }
        );
        return poolData.data?.[0] ?? fallback;
    } catch (error) {
        console.error('getPools (by search) failed:', error);
        return fallback;
    }
}

export async function searchCoins(query: string): Promise<SearchCoin[]> {
    if (!query.trim()) return [];

    const searchResults = await fetcher<{ coins: SearchResultCoin[] }>(
        '/search',
        { query }
    );

    const topResults = searchResults.coins?.slice(0, 10) ?? [];
    if (topResults.length === 0) return [];

    const ids = topResults.map((coin) => coin.id).join(',');

    const marketData = await fetcher<CoinMarketData[]>(
        '/coins/markets',
        {
            vs_currency: 'usd',
            ids,
            order: 'market_cap_desc',
            sparkline: 'false',
            price_change_percentage: '24h',
        }
    );

    const marketById = new Map(marketData.map((coin) => [coin.id, coin]));

    return topResults.map((coin): SearchCoin => {
        const market = marketById.get(coin.id);

        return {
            id: coin.id,
            name: coin.name,
            symbol: coin.symbol,
            market_cap_rank: coin.market_cap_rank,
            thumb: coin.thumb,
            large: coin.large,
            data: {
                price: market?.current_price,
                price_change_percentage_24h: market?.price_change_percentage_24h ?? 0,
            },
        };
    });
}