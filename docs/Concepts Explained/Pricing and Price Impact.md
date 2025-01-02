---
sidebar_position: 3
---

# Introduction to Pricing and Price Impact

## Overview

Pricing based on oracle feeds makes Overlay versatile, but also prone to certain oracle manipulation-based attack vectors. To counter these factors, Overlay employs several mechanisms that should mitigate exposure to the protocol: TWAP-based pricing, bid-ask spreads, and price impact/slippage.

---

## Introduction

Overlay Protocol aims to offer users the ability to build positions on a market or data stream without traditional counterparties taking the other side of the position. Ideally, the protocol will offer markets based on:
1. price data feeds; and
2. non-manipulable and non-predictable data feeds.

To determine price, Overlay does not utilize:
1. CLOB style[^1] order books used by most (usually centralized) exchanges; or
2. LP pools[^2] used by DEXs[^3], utilizing CPPM[^4] (xy=k) or other automated market maker (AMM) mechanisms

Pricing on Overlay markets is not dynamic in the traditional sense; it is based on values intermittently fetched from oracles[^5]. Overlay has the ability to onboard nearly any oracle, as long as the oracle feed is non-manipulable and non-predictable.

The first oracle being considered by Overlay for use on its markets is the Uniswap v3 TWAP oracle. This can be used to deploy Overlay markets based on price feed from pre-existing market pairs on Uniswap v3 as long as liquidity within a market pair is deep enough (this will be decided by the community through governance processes).

The second oracle that would likely be implemented by Overlay would be Chainlink oracle feeds: this would provide Overlay with the ability to offer any market / data stream available on Chainlink. This would also offer the protocol the ability to offer non-traditional markets based on data streams, like the Consumer Price Index (CPI), a metric for the level of inflation.

---

## Oracle Manipulation/Attacks
Pricing based on oracles is prone to certain vulnerabilities, if not properly accounted for. Some common attacks include price oracle attacks and frontrunning the oracle feed.

### Price Oracle Attack
In a price oracle attack, vulnerable implementations of a price data feed/ oracle in a defi protocol are targeted. Protocols using centralized price oracles (on-chain or off-chain), based on a singular source of information, are generally vulnerable to a price oracle attack

DEX market prices are manipulated to corrupt the sole source of price information. This is achieved in a set of complex transactions (generally completed within a single block using a flash loan[^6]) involving “borrowing, swapping, depositing, and again borrowing large numbers of tokens.”[^7] [^8]

This, in turn, creates artificial arbitrage opportunities for the attackers on protocols that rely on the incorrect price feed from the compromised oracle. Such protocols also automatically execute several actions based on the incorrect price feed; for instance, swaps executed at incorrect price, loans issued on the basis of incorrect price, and liquidations due to incorrect price. This can cause both the protocol and the users of the protocol to lose funds.

### Frontrunning of the oracle
Frontrunning is an issue in all markets — users with access to information before others can theoretically make virtually risk-free gains. On-chain, there are many types of frontrunning, including frontrunning of the oracle fetch, transaction reordering, sandwich attacks, etc. Here, we discuss the frontrunning of the oracle fetch.

There is a time delay between manipulation-resistant information available at the current time and the actual most recent value of the data stream. That is, the price feed of the oracle may not be up to date with the actual price at any given point of time. This latency can be exploited to turn a profit by frontrunning users. Frontrunning is an issue especially on the Ethereum Mainnet as the low speed and high cost of transactions deters oracles from updating price data quickly with large frequency.

---

## How bid and ask prices are determined: TWAP, Bid-Ask Spread, and Price Impact
We discuss below what TWAP, Bid-Ask Spread, and Price Impact mean. Further, we also elaborate on how Overlay uses these concepts to help price their markets deterministically in an efficient and tamper-proof manner.

### TWAP
TWAP or “Time-Weighted Average Price” is the average price of an asset over a certain time period. TWAP price is often used by market participants in traditional markets and crypto to execute large orders (in chunks) while minimizing market impact.

Several defi protocols (like Uniswap[^9] and Synthetix[^10]) use TWAP to build oracles resistant to manipulation. Overlay also aims to use TWAP oracles in order to deter frontrunning of the oracle fetch and the price oracle attacks.

TWAP oracles are manipulation resistant as they force attackers to keep up an attack over multiple blocks. Attackers generally are not able to use flash loans to attack a protocol using TWAP oracles (since flash loans can only be executed within one block — if they are not completely executed within the block, the entire transaction reverts). So, attackers need to put up real liquidity (not obtained through a flash loan) in order to manipulate TWAP oracles (with no guarantee of that attack being successful).[^11] This is very expensive to do, especially in pools with deep liquidity.

The prices received by users on Overlay are based on either a shorter TWAP (eg: 10 min TWAP on ETH-USDC) or a longer TWAP (eg: 1 hour TWAP on ETH-USDC). The shorter TWAP is offered when the price feed is relatively stable. However, if there are large jumps in spot price, then the longer TWAP is used to offer prices. Refer to the whitepaper for the complete formula.

### Bid-Ask Spread
A bid-ask spread refers to the difference or “spread” in the price between which an asset can be bought or sold at any given particular point of time. In traditional exchanges (based on the CLOB model), this can be thought of as the difference between the highest price a buyer is willing to pay and the lowest price a seller is offering. Sellers receive the bid price and buyers receive the ask price in a market order.

Overlay determines a bid and ask price for an asset at any point of time using separate formulae — that is, there is generally a bid-ask spread in Overlay Markets. A “static spread” (δ) is used to prevent the frontrunning of the shorter TWAP. This also offers protection against large jumps in spot price of an asset in a time period that is shorter than the time period used for the longer TWAP.

### Price Impact/Slippage[^12]
Price impact or market impact is the change in price of an asset due to the execution of a particular position. Price impact is calculated as the difference between the price of the asset at the beginning of the position and the price at which the position actually got executed. It is generally a function of liquidity in a market — the more liquid a market, the less the price impact would be for the same size of position. Price impact exists in both CLOB style exchanges and LP pool based DEXs/AMMs.

For instance, in traditional CLOB/order-book style exchanges, a large market buy order can lead to the price increasing as there might not be enough liquidity at the price level the buy order is placed; after exhausting limit sell orders at that price level, the order will be filled using limit sell orders at a higher level. The price impact of this position would be the difference between the price of the asset when the position was entered and the price at which the position was actually executed.

Similarly, price impact is also present while using DEXs/AMMs — however, this is owing to different factors. While a swap on a DEX is being executed the price of one asset keeps changing relative to the other. This results in the final price being somewhere in between where the relative price began and ended during the execution of the position. Price Impact on DEXs is also heavily dependent on the liquidity available at a certain price, similar to traditional exchanges.

Overlay does not rely on order-book style markets (that is, there are no traditional counterparties) or LP pools for liquidity. To enter a position, one simply locks OVL and takes a long/short position in a market. If the position is profitable, the protocol mints OVL to pay the user; if a position is at a loss, the protocol burns some of the OVL initially deposited by the user. In short, liquidity is seeded to a market by using a portion of the OVL market cap.

Thus, given how Overlay markets will be created, natural price impact does not exist. Positions can theoretically just be executed at bid/ask prices determined by the protocol up to the limit of the open interest of the market. However, this theoretical deep liquidity could also be abused by whales to execute large orders with no price impact as compared to other exchanges.

Overlay also adjusts its pricing mechanism to account for this issue of theoretical deep liquidity and its potential abuse by introducing price impact terms (in the mechanism) that cause price impact on opening a position. This market impact is determined by a combination of a per-market price impact constant (which could be changed for any market in governance) and the cumulative open interest on the ask/bid side in a rolling time window. Thus, price impact on Overlay is added to bid and ask prices based on the size of the order and a per-market impact constant.

---

## Determination of bid and ask prices
Bid and ask price are determined by predefined formulae and are functions of the same factors. 

The formula for bid price B is as below:

<p align="center">
    <img src="/img/formula-bid-price-b.png" />
</p>

Here, bid price (B) is a factor of:
- **e** → Euler’s number, a mathematical constant approximately equal to 2.71828  
- **δ** → “static spread” used to prevent the frontrunning of the shorter TWAP  
- **λ** → Market-specific impact constant that dictates slippage for queuing an additional OI<sub>i</sub> worth of open interest  
- **q<sub>b</sub>** → Cumulative rolling volume of open interest queued over the last **ν** period on the bid side  
- **Δ** → Longer TWAP window  
- **ν** → Shorter TWAP window such that **ν >> Δ** 
- **t** → Current time at the execution of the position

The formula for ask price A is as below:

<p align="center">
    <img src="/img/formula-bid-price-a.png" />
</p>

Here, ask price (A) is a factor of:
- **e** → Euler’s number, a mathematical constant approximately equal to 2.71828  
- **δ** → “static spread” used to prevent the frontrunning of the shorter TWAP  
- **λ** → market specific impact constant that dictates slippage¹² for queuing an additional OI<sub>i</sub> worth of open interest to either the bid or the ask side 
- **q<sub>a</sub>** → Cumulative rolling volume of open interest queued over the last **ν** period on the ask side  
- **Δ** → Longer TWAP window  
- **ν** → Shorter TWAP window such that **ν >> Δ** 
- **t** → Current time at the execution of the position

---

## Conclusion

Overlay aims to offer markets based on non-manipulable and non-predictable data feeds. Overlay has made conscious choices in oracle implementation design so as to guard against manipulation of the protocol by attackers.

Further, determination of pricing in an Overlay market depends not just on a non-manipulable and non-predictable data feed. Overlay has employed several mechanisms to arrive at a bid/ask price deterministically. This includes long and short TWAP based pricing, a static bid-ask spread, theoretical price slippage, etc.

[^1]: A central limit order book (CLOB) is a mechanism used by most exchanges worldwide (eg., Binance and FTX), based on the system of matching bids and asks (according to price), with bids and order size transparently visible to the whole market

[^2]: A Liquidity Pool is a pool where liquidity providers collectively deposit digital assets (usually two) in order to enable decentralized exchanges to offer swaps on the digital assets. Liquidity providers receive fees in exchange for providing liquidity.

[^3]: DEX stands for decentralized exchange: a protocol which enables users to swap assets on-chain. Users build positions against a collectivized ‘pool’ of assets instead of traditional counterparties. Uniswap, Balancer, and Sushiswap are all primarily DEXs.

[^4]: Constant Product Market Maker or CPPM is the automated market making algorithm used by decentralized exchanges like Uniswap. It is denoted by x*y=k.

[^5]: Oracles are generally third-party services that help protocols fetch information/data (related to price data or other data) required from outside of the protocol’s smart contract ecosystem. Any tool that helps get price data about an asset is a “price oracle.” Oracles can be off-chain or on-chain; or centralized or decentralized.

[^6]: Flash loans are unsecured loans issued to users (without putting up collateral) by ensuring the assets are borrowed and returned in the same transaction. Funds may not be borrowed unless they are returned in the same transaction.

[^7]: DeFi Attacks: Flash Loans and Centralized Price Oracles by Liesl Eichholz, Glassnode Insights.

[^8]: For more on price oracle related exploits, please refer to So you want to use a price oracle — Paradigm by samczsun, and Oracle Manipulation — Ethereum Smart Contract Best Practices.

[^9]: For more details, please refer to Oracles | Uniswap, and Building an Oracle | Uniswap.

[^10]: SIP-120: Atomic Exchange Function.

[^11]: For more on this, please read “Manipulating Uniswap v3 TWAP Oracles” by Michael Bentley, available here.

[^12]: The Overlay White Paper and this article use the terms “price impact” and “slippage” interchangeably. They are generally used interchangeably in the context of traditional CLOB style exchanges. However, in the context of a DEX, slippage and price impact are generally considered to be different things. The price impact of a trade is predetermined, is generally displayed before the execution of a trade, and depends on the liquidity of the pool. Slippage in the context of a DEX refers to the execution price of the trade changing due to the asset’s price changing while the transaction is pending (this could be organic or due to sandwich attacks etc.). For more details on this, please refer to Uniswap’s explanation here.

---
