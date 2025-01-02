# Summary of risks

## I. Inflation risk

Overlay settles all PnL in its native token OVL - OVL is used as collateral to open a position, it’s minted to pay out profits, and is burned in case of a loss. Thus, the primary risk the protocol faces is risk of excessive inflation of OVL. This risk is managed through a range of mechanisms, detailed below.

### A. Funding payments

While other perpetual futures platforms charge funding to bring the contract price and spot price closer in case of a deviation, Overlay charges funding based on the imbalance of open interest between longs and shorts. Overlay does not require funding to reduce the basis (deviation between contract and spot price) as price is intermittently fetched from oracles.

For example, if there are more longs than shorts, then longs pay funding to shorts. Since the size of the open interest imbalance is potential inflation risk for the protocol, funding payments are used to incentivize users to reduce this imbalance

### B. Caps

The protocol limits PnL or addition of new positions to mitigate inflation risk when and where necessary, based on risk parameters set by governance. The risk parameters through which this is achieved are detailed below:

- Payoff caps: Overlay will have a per-position payoff cap that will limit the PnL of each position on the protocol; this cap will be determined by the community/DAO through a formal governance process for each market. This will help the protocol limit inflation risk from the trading of heavy tail assets.
- Open interest caps: OI caps will be imposed on the aggregate open interest for the long and short sides to limit the amount of position contracts an Overlay market is willing to take on at any point in time. The payoff cap does not work without an OI cap as it is trivial for a user to open several small positions to undermine the payoff cap.
- Circuit breakers: Together, payoff caps and open interest caps limit the amount the market can print on any single position. Circuit breakers take this a step further by limiting the amount the market can print over multiple positions in a given period of time. When an excess amount of OVL has been printed in the recent past, the possible notional size of new positions offered is significantly reduced for an period of time to cool down the market, and bring the rate of inflation in a particular market in line with the protocol’s expected inflation level.

### C. Liquidations

Loss making positions that have reached the liquidation threshold are liquidatable by anyone who calls the liquidate function on the market contract. The liquidator earns a reward for doing this. Some of the OVL loss incurred by the user is burnt, and some is sent to the fee repo.

A key point to note is that risk parameters associated with the above features are set by Overlay governance. So, it is up to token holders to decide the balance between inflation risk vs increased potential volumes and platform usage. On one end of the spectrum, the risk parameters can be tuned so strictly as to inhibit all trading volume for zero inflation risk. On the other end of the spectrum, they can be tuned so loose as to enable large trading volumes but with significant risk of inflation.

## II. Smart Contract Risk

The deterministic nature of smart contracts is a huge positive for transparency, but also makes them prone to vulnerabilities. Changes to the smart contract are usually not possible after deployment, unless such capabilities are incorporated during the creation of the smart contract (which creates a different nature of risk).

If there are errors/bugs in the code, this may cause the protocol to be unusable. Bugs may even open up the protocol to attacks from bad actors, potentially leading to a loss of funds. While the risk stemming from smart contracts can be mitigated through audits and testing, there is still a risk of errors/bugs persisting.

Overlay has undergone two comprehensive audits: Spearbit and Least Authority. For more details on Overlay’s audits, read about them [here](https://github.com/overlay-market/v1-core/blob/main/audits/spearbit/audit.pdf) and [here](https://github.com/overlay-market/v1-core/blob/main/audits/leastauthority/audit.pdf).

## III. Smart contract control/access

If access to the smart contract is not implemented correctly, this can lead to a vulnerability that then may be exploited to gain control of the smart contract. This puts the protocol and the funds in the smart contract at risk.

## IV. Oracle Risk

Pricing data on Overlay markets is based on values intermittently fetched from oracles. Oracles are third-party services that help protocols get information/data (related to price data or other data) required from outside of the protocol’s smart contract ecosystem. Any tool that helps get price data about an asset is a “price oracle.” Overlay has the ability to onboard nearly any oracle, as long as the oracle feed is non-manipulable and non-predictable.

There is sometimes a time delay between manipulation-resistant information available at the current time and the actual most recent value of the data stream. That is, the price feed of the oracle may not be up to date with the actual price at any given point of time. This latency can be exploited to turn a profit by frontrunning users.

Several crypto exploits have focused on corrupting oracle data through manipulation of the oracle price feeds. This can lead to large gains for exploiters on another platform using the corrupted oracle data. Such attacks usually involve flash loans to manipulate oracle data and are completed within the same block (due to the nature of flash loans).

Overlay attempts to mitigate oracle risks by implementing the following features:

### A. Time Weighted Average Price (TWAP)

TWAP or “Time-Weighted Average Price” is the average price of an asset over a certain time period. TWAP price is often used by market participants in traditional markets and crypto to execute large orders (in chunks) while minimizing market impact.

Using TWAPs instead of spot prices as a price oracle is common practice in DeFi. TWAPs make oracle manipulation attacks significantly more expensive and cumbersome. This is because TWAP feeds require that attacks be sustained across multiple blocks, which is extremely expensive to do and can generally not be executed through flash loans - such an attack would require an attacker to put up real liquidity.

### B. Bid-ask spread

A bid-ask spread refers to the difference or “spread” in the price between which an asset can be bought or sold at any given particular point of time. In traditional exchanges (based on the CLOB model), this can be thought of as the difference between the highest price a buyer is willing to pay and the lowest price a seller is offering.

Overlay introduces a static spread between bid and ask prices in order for users to not profit from the latency inherent in a TWAP price feed (since it is the average of the price over a certain period of time).

### C. Market impact

Market impact is the change in price of an asset due to the execution of a particular position. Price Impact is generally a function of liquidity in a market - the more liquid a market, the less the price impact would be for the same size of position.

Large positions on Overlay markets suffer slippage, emulating a real market and severely limiting the potential profit of attackers (as compared to Overlay markets where market impact was not emulated). This market impact is determined by a combination of a per-market price impact constant (which could be changed for any market in governance) and the cumulative open interest on the ask/bid side in a rolling time window. Thus, price impact on Overlay is added to bid and ask prices based on the size of the order and a per-market impact constant.

### D. Spot price manipulation

Wherever applicable, such as when the price oracle is a Uniswap v3 oracle, the protocol keeps track of liquidity and price movements in the pool and adjusts its risk parameters accordingly.
