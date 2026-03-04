---
sidebar_position: 2
---
# OVL

OVL is the native token of Overlay Protocol. It is an ERC-20 token. OVL serves a dual purpose and will be used to participate in trading and DAO governance after launch.

OVL may be used by holders to:



1. vote on [governance](/Getting%20Started/Governance) proposals of the DAO governing Overlay Protocol
2. open positions on the markets offered on Overlay by using OVL as collateral


## Token Details

| Ticker | OVL |
| :----------- | :----------- |
| Initial Supply | 88,888,888 |

## Building Position

To enter a position, a user of Overlay Protocol uses USDT as collateral/margin into the Overlay smart contract. A user can leverage this collateral to take a position on either side of any market offered by Overlay.

On closing a position, the outcome may be profitable, unprofitable, or at break-even. If the position is profitable, the trader receives PnL in USDT equivalent to the delta difference of the market between build and unwind.

If the position is unprofitable, the loss is deducted from the USDT collateral that was posted to the position.

Behind the scenes, the protocol continues to use OVL as its internal balancing mechanism, adjusting supply according to the system's accounting rules to reflect profits and losses across markets.

No adjustments are required when a position is closed at break-even
## Supply

Total supply of OVL equals 88,888,888. The OVL supply, by function, is dynamic. Thus, OVL is dynamically minted and burned by the smart contracts when positions are unwound by users.

<p style={{textAlign: 'right'}}>
<em>Last updated on <strong>Jan 2, 2025</strong></em></p>

