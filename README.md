# 💰 SRE Challenge 06 — MyUSD Stablecoin

A full-stack Web3 project built as part of **SpeedRunEthereum Challenge 06**.

This challenge demonstrates how an over-collateralized, crypto-backed stablecoin system works — similar to MakerDAO, Liquity, and DAI — using CDPs, interest accrual, share-based debt, and liquidations.

You will learn how decentralized stablecoins maintain a peg, manage risk, and keep systems solvent during market volatility.

---

## 🚀 Live Demo

- **Frontend (Vercel):** https://sre-challenge-06-my-usd-stablecoin.vercel.app/ 
- **MyUSD Stablecoin Contract (Sepolia):** `0x1b17A59971Dd30760715E6739FAAa2289c70F064`
- **DEX Contract (Sepolia):** `0x73B129413d41700140881B00931B71549D141C83`
- **MyUSD Engine Contract (Sepolia):** `0x732dD61fCB2159F5587EBfb4BCD75b76EF9d0E30`  
- **MyUSD Staking Contract (Sepolia):** `0x0eC6b9A8bc4bc5FdEAbEB05a8AEE074De80336D7`  
- **Block Explorer:** https://sepolia.etherscan.io/address/0x0eC6b9A8bc4bc5FdEAbEB05a8AEE074De80336D7

---

## 🧱 Tech Stack

### 🖥 Smart Contracts

- Solidity (v0.8.x)
- Hardhat
- Sepolia Testnet  
- `MyUSD.sol` — ERC20 with share-based interest
- `DEX.sol` — Simple decentralized exchange for the ETH/MyUSD pair
- `MyUSDEngine.sol` — CDP management (deposit, mint, repay, liquidate)
- `MyUSDStaking.sol` — Allows users to stake MyUSD & earns yield from borrow rates.
- `RateController.sol` — borrow/savings rate governor  
- `Oracle.sol` — mock price feed  
- Share-based accounting (exchangeRate model)  
- Liquidation engine + health factor logic  

### 🎨 Frontend (Scaffold-ETH 2)

- Next.js 13 (App Router)
- React / TypeScript / TailwindCSS
- Wagmi + Viem
- RainbowKit
- Scaffold-ETH 2 Debug Panel & Block Explorer
- Deployment on Vercel

---

## 🎯 Features

### 🔹 Collateralized Debt Positions (CDPs)

Users lock ETH and mint MyUSD. Tracks collateral, debt, collateral ratio, and health factor:
```solidity
collateralRatio = collateralValue / debtValue
```

### 🔹 Borrow MyUSD (Mint)

Minting increases **debt shares**, not raw debt:
```solidity
debtShares = amount / exchangeRate
```

### 🔹 Repay / Burn MyUSD

Reduces shares:
```solidity
sharesToBurn = amount / exchangeRate
```

### 🔹 Interest Accrual (Borrow + Savings)

Borrow interest increases total debt; savings interest increases token balances.  
Core accounting variable:
```solidity
exchangeRate = totalDebt / totalDebtShares
```
Automatically updates all users without iteration.

### 🔹 Liquidations

If health factor < 1:
```solidity
HF = collateralValue / debtValue
```
Liquidators repay part of debt and seize discounted collateral.

### 🔹 Rate Controller

Admin-controlled:
- Borrow Rate  
- Savings Rate  
Used to balance supply/demand for MyUSD.

---

## 🚨 Why Share-Based Accounting?

This system replicates the accounting model used by **MakerDAO, Aave, and Compound**, enabling:

- Scalable interest updates  
- No per-user debt recalculations  
- Gas-efficient borrowing/saving  
- Accurate global interest compounding  

---

## 🎮 Frontend dApp

The UI supports:

- Connect wallet  
- Deposit collateral (ETH)  
- Mint MyUSD  
- Repay / burn  
- View collateral, debt, health factor  
- Liquidate unsafe positions  
- Adjust rates (admin-only)  
- Debug contracts using SE-2 tools  
- Inspect transactions via built-in Block Explorer  

---

## 📊 Stablecoin Metrics Displayed

- Collateral amount  
- MyUSD balance  
- Debt shares  
- Global exchange rate  
- Borrow / savings rates  
- Health factor  
- Liquidation price  

Perfect for visualizing real stablecoin mechanics.

---

## 📐 Learning Outcomes

By completing this challenge, you learn:

- How decentralized stablecoins maintain a USD peg  
- How over-collateralization protects solvency  
- Why share-based interest accounting scales  
- How minting/repayment flows work  
- How liquidations secure the protocol  
- How to read/write on-chain with Wagmi + Viem  
- How to build a CDP frontend with Scaffold-ETH 2  

---

## 🎓 Part of SpeedRunEthereum

This project is part of:

🏃 **SpeedRunEthereum — Challenge 06: MyUSD Stablecoin**  
https://speedrunethereum.com/challenge/stablecoins

Built using **Scaffold-ETH 2**, the modern full-stack Ethereum development framework.

---