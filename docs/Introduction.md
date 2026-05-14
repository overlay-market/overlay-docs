---
slug: /
sidebar_position: 1
---

# Introduction to Overlay

## What is Overlay?

Overlay is a decentralized perpetuals exchange built for long-tail crypto assets — tokens that trade on-chain but lack the liquidity depth to be listed on major derivatives venues. Any project can launch a perps market on Overlay without needing market makers or liquidity providers.

> INFO
> For a deep dive into Overlay Protocol, please refer to our white paper [here](https://redrct.overlay.market/whitepaper).

## Who is Overlay for?

**Traders** — access leveraged exposure to tokens you couldn't trade as perps anywhere else. Long or short, stablecoin-settled, no expiry.

**Projects** — launch your own perps market in days. No market maker required. Your community trades, you earn a share of the fees — permanently.

**Communities** — pool capital to fund a perps market for your favorite token. Earn 50% of trading fees proportional to your contribution, permanently.

## How does Overlay offer markets without counterparties?

Users build positions against the protocol itself — effectively against every OVL holder simultaneously. This eliminates the need for liquidity providers or market makers, which is what makes thin-liquidity token markets possible in the first place.

## How Trading Works

Traders open positions using USDT as collateral. All PnL is settled in USDT — no exposure to OVL required to trade.

Behind the scenes, OVL handles the protocol's internal accounting and balance mechanics. When traders profit, the protocol adjusts OVL supply accordingly; when traders lose, the system absorbs the difference. This keeps the trading experience clean and stable for users while OVL token economics operate at the protocol level.

## Pricing

Prices on Overlay are derived from oracle feeds rather than an order book. The protocol fetches values from non-manipulable, non-predictable data sources and applies built-in adjustment mechanisms on top. For more detail, see [Pricing and Price Impact](/Concepts%20Explained/Pricing%20and%20Price%20Impact).

## OVL

OVL is the native token of Overlay Protocol — a BEP-20 used for protocol-level accounting and DAO governance. It acts as the liquidity backbone of the system, enabling markets to exist without traditional counterparties. For more on OVL, see [our OVL section](/Concepts%20Explained/OVL).

## Nature of Contracts

Positions on Overlay are perpetual — no expiry, no settlement date, continuously rolling. They share structural similarities with conventional perps but differ in key ways given the absence of a traditional counterparty. For a full breakdown, see [How Overlay is Different](/Concepts%20Explained/How%20is%20Overlay%20different).
