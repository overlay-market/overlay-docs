---
sidebar_position: 1
---

# How does Overlay differ from other perps?


## What are perpetual futures contracts or perps?

Perps are the most popular type of derivative contract in crypto markets. Perps allow a user to take a long or short position on an underlying asset without owning it, while either paying or receiving funding to carry on the position (depending on market conditions and the side a user is on). 

Perps differ from traditional futures contracts in that there is no date of expiry/settlement or delivery of the underlying asset. Perp contracts keep rolling over in perpetuity till a user decides to close their position. 

Typically, whitelisted assets are used as margin/collateral for these positions and users are allowed to take on leverage (sometimes up to a 100x). If the margin requirements fall below the minimum threshold, the collateral is liquidated.

Contracts on Overlay markets resemble perpetual future contracts in that there is no date of expiry (contracts can keep rolling over), and that there is no delivery of the underlying asset. However, there are some key features of contracts on Overlay markets that differ from traditional perps - these are discussed below.


## Oracle-based pricing

Overlay brings in data points, which act as a proxy for price by using a combination of oracle-based feeds and native mechanisms to determine the data point of a feed that users can build positions on. For more details, please check out our [detailed article on pricing](https://mirror.xyz/0x7999C7f0b9f2259434b7aD130bBe36723a49E14e/vtmmujPcVINTIVavcsztrYHmP_N1mA4RwgYHmZ8lLdw). 

Traditional crypto exchanges like Binance usually use a centralized limit order book (CLOB) system to determine price. Price is based on matching of orders in the buy side and sell side of the order book - price is determined merely by what the asset was last bought for. 

Certain on-chain perp protocols like Perp Protocol and GMX also use oracle based feeds for pricing. 


## Lack of traditional counterparties

Overlay will offer tradable markets to its users without traditional counterparties taking the other side of a position. Overlay dynamically mints/burns its native token OVL when a position is closed:

(i) if a positive delta is realized, the protocol mints OVL according to the delta difference against the users initial collateral (also denoted in OVL)

(ii) if a negative delta is realized, a percent of collateral put up by the user (in the form of OVL) is burnt

Risk of inflation is a potential risk for passive OVL holders, and should be understood by users of the system. To know more about how risks and how Overlay addresses risk, please refer to [Summary of Risks](/Security/Risks).

Traditional CLOB-based crypto exchanges rely on swap-based counterparties (including market makers) in order to provide liquidity into their markets. On-chain derivative protocols like Perp Protocol and GMX use liquidity providers to seed liquidity into liquidity pools that users then trade against.


## No Limit Orders

Overlay v1 will not support setting bids and asks via limit orders. At this time, only market orders will be executable on Overlay markets. Generally, CLOB based and LP based exchanges have limit orders.


## Funding

Funding rates refer to the periodic fees paid by a trader to hold a long or short position using perps. This can also be thought of as a ‘premium’ that is paid in traditional markets to hold certain futures/options positions. 

Funding rate mechanisms allow CLOB-based exchanges to get the futures price of an asset in line with the underlying spot price of the asset (and reduce the basis). Liquidity provider based trading platforms like GMX and Perp Protocol utilize funding payments in order to pay out yield to liquidity providers in return for providing liquidity.

For Overlay, funding rates are calculated based on the imbalance in Open Interest, rather than the imbalance between spot and future prices. Funding rates on Overlay are mainly utilized to lessen the imbalance between longs and shorts, incentivizing users to come into the lagging side to reduce the imbalance.


## PnL and Collateral

Users would be required to lock OVL as collateral to a position in an Overlay market. PnL will also be paid out in OVL. OVL is minted by the protocol and paid out to the user as PnL if a position delta positive; on the other hand, if the position is delta negative, locked OVL is burned (to the extent of the loss).