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

- **Frontend**: React, JavaScript, CSS (Bootstrap), Vite
- **Backend**: Node.js, Express, MongoDB
- **Hosting**: Firebase or Vercel
- **Authentication**: JWT
- **APIs**: Real-time crypto data(CoinGecko)

## Installation

### Prerequisites

- Node.js 26 (the version pinned in `.nvmrc`)
- npm
- Git
- gitleaks on `PATH` for the local quality gate and hooks
- MongoDB and the backend environment variables listed in `.env.example` to run the API

### Setup Instructions

```sh
git clone https://github.com/Uuuuu77/CoinByte2.0.git
cd CoinByte2.0
nvm install
nvm use
npm ci
(cd backend && npm ci)
(cd frontend && npm ci)
```

Installing either package configures this clone's Git hooks. The pre-push hook runs `scripts/verify-local.sh`; its checks must pass before a push. To start the API and UI, use separate terminals:

```sh
cd backend && npm start
cd frontend && npm run dev
```

Create `backend/.env` from `.env.example` and configure real values only in your local environment. Never commit `.env` or production credentials. Install gitleaks using its official installation instructions before running the gate; the gate fails closed if it is missing.

## Quality gate and CI status

Run `scripts/verify-local.sh` from the repository root before pushing. It checks the pinned Node major, performs lockfile installs, lint/typecheck/tests/build where scripts exist, runs npm audit at high severity, and scans tracked plus nonignored working-tree files with gitleaks. Gitignored local environment files are intentionally not copied into the scan. `scripts/test-verify-local.sh` verifies that a failed step makes the gate exit non-zero.

GitHub Actions is parked on `workflow_dispatch` because Actions runners are unavailable for this repository. To re-enable automatic checks after Actions access is restored, change the workflow trigger in `.github/workflows/ci.yml` to include `pull_request` and the intended push branches. Keep the local gate enabled. Vercel Preview remains the deployment signal.

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
