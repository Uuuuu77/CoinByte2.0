# CoinByte

Welcome to CoinByte, a full-stack cryptocurrency exchange platform designed for seamless and secure trading, wallet management, social interaction, and support services.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction

CoinByte aims to provide a user-friendly platform for cryptocurrency enthusiasts, traders, investors, developers and businesses offering:
- Home dashboard
- Secure cryptocurrency trading
- Wallet management
- Social interactions
- Customer support

## Features

- **Home & Dashboard**: Overview of activities and market trends.
- **User Authentication**: Secure login and signup.
- **Cryptocurrency Trading**: Real-time trading.
- **Wallet Management**: Manage multiple wallets.
- **Social Interaction**: Connect with other users.
- **Support Services**: Access support and FAQ.

## Technologies

- **Frontend**: React, JavaScript, CSS (Bootstrap), Vite.
- **Backend**: Node.js, Express, MongoDB
- **Hosting**: Firebase or Vercel
- **Authentication**: JWT
- **APIs**: Real-time crypto data(CoinGecko)

## Installation

### Prerequisites
- Node.js (version 16.x or later)
- MongoDB
- Git
- Firebase or Vercel account

### Setup Instructions

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/CoinByte2.0.git
   cd CoinByte2.0
   ```

2. **Backend Setup:**
   ```sh
   cd backend
   npm install
   ```

3. **Frontend Setup:**
   ```sh
   cd ../frontend
   npm install
   ```

4. **Environment Variables:**
   Create a `.env` file in the `backend` directory:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   COINGECKO_API_BASE_URL=https://api.coingecko.com/api/v3
   ```

5. **Start the Backend Server:**
   ```sh
   cd backend
   npm start
   ```

6. **Start the Frontend Server:**
   ```sh
   cd frontend
   npm run dev
   ```

## Usage

- **Frontend:** Open `http://localhost:3000` in your browser.
- **Backend:** The server runs on `http://localhost:5000`.

## Project Structure

```plaintext
CoinByte/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── .env
│   └── server.js
├── frontend/
│   ├── index.html
│   ├── package.json
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── styles/
│   │   ├── utils/
│   │   ├── App.js
│   │   └── index.js
│   ├── node_modules/
│   ├── package-lock.json
│   ├── README.md
│   └── vite.config.js
└── README.md
```

## Contributing

Contributions are welcome! Please:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
