"use client";

import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { Address } from "~~/components/scaffold-eth";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="flex items-center flex-col grow pt-10">
        <div className="px-5 max-w-4xl">

          {/* HEADER */}
          <h1 className="text-center">
            <span className="block text-2xl mb-2">SpeedRunEthereum</span>
            <span className="block text-4xl font-bold">Challenge 06 — 💰 MyUSD Stablecoin</span>
            <span className="block text-lg mt-2">
              Build a decentralized, over-collateralized stablecoin backed by ETH, 
              complete with minting, burning, interest accrual, and liquidations.
            </span>
          </h1>

          {/* CONNECTED WALLET */}
          <div className="flex justify-center items-center space-x-2 flex-col mt-6">
            <p className="my-2 font-medium text-lg">Connected Wallet:</p>
            <Address address={connectedAddress} />
          </div>

          {/* HERO IMAGE */}
          <div className="flex flex-col items-center justify-center mt-10">
            <Image
              src="/hero.png"
              width="727"
              height="231"
              alt="Challenge banner"
              className="rounded-xl border-4 border-primary"
            />
          </div>

          {/* CONTENT */}
          <div className="mt-10 space-y-6 text-lg">
            <p>
              💵 In this challenge you will build <strong>MyUSD</strong> — an ETH-backed,
              over-collateralized decentralized stablecoin inspired by MakerDAO&apos;s DAI mechanics.
            </p>

            <p>The system you build will support:</p>

            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Depositing ETH as collateral</li>
              <li>Minting MyUSD against that collateral</li>
              <li>Burning MyUSD to repay debt</li>
              <li>Interest-accruing debt via a global exchange rate</li>
              <li>Over-collateralization enforcement</li>
              <li>Liquidations when positions fall below required collateral ratio</li>
            </ul>

            <p>
              The core of this challenge is the <strong>share-based debt accounting system</strong>, where:
            </p>

            <pre className="bg-base-200 p-4 rounded-xl overflow-auto text-sm">
{`debtShares   → represent a borrower's portion of the global debt pool  
exchangeRate → grows over time as interest accrues  
currentDebt  = shares * exchangeRate / 1e18`}
            </pre>

            <p>
              Instead of updating every borrower’s balance when interest accrues,
              the system updates a single <strong>global exchange rate</strong>,
              making the protocol extremely scalable.
            </p>

            <p>
              🧠 You will implement:
            </p>

            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>A vault-like collateral system</li>
              <li>Share-based debt accounting</li>
              <li>Dynamic borrow & savings rates</li>
              <li>Global interest accrual</li>
              <li>Automated liquidations</li>
            </ul>

            <p>
              💥 <strong>Your mission:</strong> Build the full stablecoin engine, deploy it to Sepolia,
              and create a UI that lets users lock collateral, mint MyUSD, repay debt, and liquidate risky positions.
            </p>
          </div>

          {/* CONTRACT ADDRESSES */}
          <div className="mt-10 space-y-6 text-lg">
            <p>The smart contracts were deployed on Sepolia:</p>

            <p className="font-semibold">
              MyUSD Token:{" "}
              <Link
                href="https://sepolia.etherscan.io/address/0x1b17A59971Dd30760715E6739FAAa2289c70F064"
                passHref
                className="link"
              >
                0x1b17A59971Dd30760715E6739FAAa2289c70F064
              </Link>
              <br />
               DEX:{" "}
              <Link
                href="https://sepolia.etherscan.io/address/0x73B129413d41700140881B00931B71549D141C83"
                passHref
                className="link"
              >
                0x73B129413d41700140881B00931B71549D141C83
              </Link>
              <br />
              MyUSD Engine:{" "}
              <Link
                href="https://sepolia.etherscan.io/address/0x732dD61fCB2159F5587EBfb4BCD75b76EF9d0E30"
                passHref
                className="link"
              >
                0x732dD61fCB2159F5587EBfb4BCD75b76EF9d0E30
              </Link>
              <br />
              MyUSD Staking{" "}
              <Link
                href="https://sepolia.etherscan.io/address/YOUR_CONTROLLER_ADDRESS"
                passHref
                className="link"
              >
                0x0eC6b9A8bc4bc5FdEAbEB05a8AEE074De80336D7
              </Link>
            </p>

            <p>
              From this UI, you will be able to:
              <br />
              🪙 Deposit ETH as collateral  
              🔨 Mint & burn MyUSD  
              📉 View your health factor  
              ⚠️ Liquidate unsafe positions  
              📈 Inspect current interest rates & global debt  
            </p>

            <p>
              This challenge teaches the economic fundamentals behind decentralized stablecoins:
              collateralization, interest accrual, liquidations, peg stability, and market incentives.
            </p>

            <p>
              Built using{" "}
              <strong>
                Scaffold-ETH 2, Next.js, Wagmi, Viem, RainbowKit, and Hardhat.
              </strong>
            </p>
          </div>

          <p className="text-center text-lg mt-16">
            <a
              href="https://speedrunethereum.com/challenge/stablecoins"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              SpeedRunEthereum.com
            </a>
          </p>
        </div>

        {/* FOOTER BLOCKS */}
        <div className="grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col md:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <BugAntIcon className="h-8 w-8 fill-secondary" />
              <p>
                Interact with contracts in {" "}
                <Link href="/debug" className="link">
                  Debug Contracts
                </Link>.
              </p>
            </div>

            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
              <p>
                Explore transaction history in {" "}
                <Link href="https://speedrunethereum.com" className="link">
                  Block Explorer
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
