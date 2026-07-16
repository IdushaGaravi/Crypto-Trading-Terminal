# 🚀 Crypto Trading Terminal

<p align="center">
  <strong>A modern real-time cryptocurrency market dashboard built with Next.js, React, TypeScript, Lightweight Charts, WebSockets, and Webhooks.</strong>
</p>

<p align="center">
  <a href="https://crypto-trading-terminal-two.vercel.app/">
    <img src="https://img.shields.io/badge/Live%20Demo-Visit%20Now-7CFF4F?style=for-the-badge" />
  </a>
  <a href="https://github.com/IdushaGaravi/Crypto-Trading-Terminal">
    <img src="https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github" />
  </a>
</p>

---

## 🌐 Live Demo

🔗 **Vercel Deployment:**  
https://crypto-trading-terminal-two.vercel.app/

📂 **GitHub Repository:**  
https://github.com/IdushaGaravi/Crypto-Trading-Terminal

---

## 📖 Overview

Crypto Trading Terminal is a professional cryptocurrency market analytics dashboard designed to provide traders and investors with an intuitive way to monitor market movements, explore trending coins, analyze price action, and track cryptocurrency categories in real time.

The platform delivers a modern dark-themed trading experience inspired by professional financial terminals while maintaining excellent performance, responsiveness, and scalability through WebSocket and Webhook-based real-time data synchronization.

---

## ✨ Features

### 📊 Real-Time Market Dashboard

- Interactive candlestick charts
- Multiple time period selections
- Live cryptocurrency market statistics
- Category-based market analysis
- Real-time price updates

### ⚡ WebSocket Integration

- Real-time cryptocurrency price streaming
- Low latency market updates
- Automatic UI synchronization
- Seamless live data updates without page refresh

### 🔗 Webhook Integration

- Event-driven market data synchronization
- Efficient server-to-server communication
- Scalable real-time data handling
- Fast market information updates

### 🔥 Trending Coins

- View trending cryptocurrencies
- Track 24-hour price movements
- Quick access to detailed coin pages

### 🔍 Advanced Search

- Search cryptocurrencies by:
  - Coin name
  - Symbol
  - Token identifier
- Fast command-style search experience

### 🪙 Detailed Coin Analytics

- Individual cryptocurrency pages
- Market cap information
- Trading volume statistics
- Market ranking
- External website & explorer links

### 💱 Cryptocurrency Converter

- Real-time token conversion
- Currency exchange calculations
- User-friendly conversion interface

### 📈 Market Categories

- Smart Contract Platforms
- Layer 1 Networks
- Proof of Work Projects
- Proof of Stake Projects
- Stablecoins
- Exchange Tokens
- USD Stablecoins
- And many more

### 📱 Responsive Design

- Desktop optimized
- Tablet friendly
- Mobile responsive
- Modern dark UI

---

# 🖼️ Screenshots

## Dashboard Overview

![Dashboard](./screenshots/dashboard.png)

---

## All Coins Listing

![All Coins](./screenshots/all-coins.png)

---

## Search Functionality

![Search](./screenshots/search.png)

---

## Coin Details Page

![Coin Details](./screenshots/coin-details.png)

---

## 🏗️ System Architecture

```text
                     Cryptocurrency APIs
                               │
                               │
                           Webhooks
                               │
                               ▼
                      Next.js Application
                               │
                               │
                          WebSockets
                               │
                               ▼
                     Real-Time Market Data
                               │
                               ▼
                        React Components
                               │
      --------------------------------------------------
      │                    │                    │
      ▼                    ▼                    ▼

  Dashboard            Coin Details          Converter
                               │
                               ▼
                     Lightweight Charts
```

---

# 🛠️ Tech Stack

## Frontend

| Technology | Version |
|------------|----------|
| Next.js | 16.2.9 |
| React | 19.2.4 |
| React DOM | 19.2.4 |
| TypeScript | 5.x |
| Tailwind CSS | 4.x |
| Lightweight Charts | 5.2.0 |
| SWR | 2.4.2 |
| Lucide React | 1.23.0 |
| Radix UI | 1.6.0 |
| ShadCN UI | 4.12.0 |

---

## Real-Time Technologies

| Technology | Purpose |
|------------|----------|
| WebSockets | Real-time cryptocurrency price updates |
| Webhooks | Event-driven market data synchronization |
| Lightweight Charts | Financial chart rendering |
| SWR | Client-side data fetching and caching |

---

## Additional Libraries

| Library | Version |
|----------|----------|
| class-variance-authority | 0.7.1 |
| clsx | 2.1.1 |
| cmdk | 1.1.1 |
| query-string | 9.4.1 |
| react-use | 17.6.1 |
| tailwind-merge | 3.6.0 |
| tw-animate-css | 1.4.0 |

---

## Development Tools

| Tool | Version |
|--------|----------|
| TypeScript | 5.x |
| ESLint | 9.x |
| PostCSS | Tailwind CSS 4 |

---

# 📂 Project Structure

```bash
crypto-trading-terminal/
│
├── app/
│   ├── page.tsx
│   ├── coins/
│   └── search/
│
├── components/
│   ├── charts/
│   ├── ui/
│   └── shared/
│
├── lib/
│
├── public/
│
├── types/
│
├── constants/
│
└── package.json
```

---

# ⚡ Getting Started

## Clone Repository

```bash
git clone https://github.com/IdushaGaravi/Crypto-Trading-Terminal.git

cd Crypto-Trading-Terminal
```

## Install Dependencies

```bash
npm install
```

## Run Development Server

```bash
npm run dev
```

Application will be available at:

```bash
http://localhost:3000
```

---

## Production Build

```bash
npm run build
npm start
```

---

# 🎯 Key Highlights

- Modern Trading Terminal UI
- Real-Time Cryptocurrency Tracking
- WebSocket Integration
- Webhook Integration
- Interactive Candlestick Charts
- Advanced Search Experience
- Coin Converter
- Responsive Design
- Optimized Performance
- Built with Next.js 16 & React 19
- Real-Time Market Data Synchronization
- Production Ready Deployment on Vercel

---

# 🚀 Deployment

The application is deployed on **Vercel**.

### Live Application

https://crypto-trading-terminal-two.vercel.app/

---

# 📈 Future Improvements

- Portfolio tracking
- Watchlists
- Trading indicators
- Price alerts
- User authentication
- Historical portfolio analytics
- AI-powered market insights
- Multi-currency support

---

# 👨‍💻 Author

### Idusha Garavi

GitHub:
https://github.com/IdushaGaravi

Project Repository:
https://github.com/IdushaGaravi/Crypto-Trading-Terminal

Live Demo:
https://crypto-trading-terminal-two.vercel.app/

---

# ⭐ Support

If you found this project useful, consider giving it a **star** on GitHub.

```bash
⭐ Star the repository
🍴 Fork the project
🚀 Share it with others
```

---

<p align="center">
  Built with ❤️ using Next.js, React, TypeScript, Tailwind CSS, WebSockets, and Webhooks.
</p>