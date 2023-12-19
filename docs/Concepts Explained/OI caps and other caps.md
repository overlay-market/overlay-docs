---
sidebar_position: 4
---

# Payoff caps, OI caps, and the Circuit Breaker


## Introduction

Overlay uses its native token OV to pay out PnL if there is a loss, and burns OV collateralized by the user (up to the extent of the loss) in case of a loss. While this mechanism bestows the protocol with benefits like not requiring market makers or the ability to open positions on nearly any scalar data stream, it also opens the protocol up to potential vulnerabilities caused by OV inflation (especially in case of long-tail assets).

To counter these potential vulnerabilities, Overlay utilizes a risk framework that includes payoff caps, OI caps, and a circuit breaker mechanism.


## Payoff caps

Payoff caps (denoted as _C<sub>p</sub>_) are a “per-position” limit on the PnL of each position. This is a static cap that will be determined by the DAO through a formal governance process and will be specific to each market on Overlay. With riskier/longer tail assets, governance could choose a lower cap.

In markets based on long tail price feeds, the payoff cap enables: 

(i) the protocol to avoid a theoretically infinite payout on any particular position; and 

(ii) the protocol to quantify the risk associated with each market in an automated fashion, based on the _C<sub>p</sub>_ determined by the DAO


## Open Interest caps

Open Interest caps (OI caps or C<sub>Q</sub> are “per-market” caps that set a cut off or limit on the aggregate amount of open interest (on the long and short side) in Overlay markets. This static constant will vary from market to market, and will be determined by the community through governance. OI caps are required despite the existence of payoff caps as payoff caps may be bypassed by a user by opening multiple positions. 

Setting C<sub>Q</sub> through governance helps the protocol quantify inflation risk: the amount of OV that the protocol will have to mint in case of a worst-case scenario for any given market. This hypothetical worst-case scenario involves the imbalance liability (the difference in OI between longs and shorts) being completely skewed towards one side of the market. Quantifying the per-market inflation risk (a function of C<sub>Q</sub>) in the worst-case scenario in an automated fashion allows the community to be aware of the risks posed to the protocol by the introduction of any new market. 


## Circuit Breaker

The circuit breaker mechanism gives Overlay an extra layer of protection: it allows a market to cool off in case there have been large payouts (in the form of OV printing) during the recent past. 

Using C<sub>Q</sub>, the protocol calculates an expected inflation rate over a rolling period of time. If the actual inflation rate in this period exceeds the expected rate, C<sub>Q </sub>is adjusted to stem the inflation. C<sub>Q </sub>comes back to normal when the actual inflation rate nears the expected inflation rate. 

The circuit breaker works by adjusting the per-market notional OI cap (C<sub>Q</sub>) for a particular period of time so as to limit the possible notional size of new positions offered by the market till the market cools down. 

<p style={{textAlign: 'right'}}>
<em>Last updated on <strong>Dec 19, 2023</strong></em></p>

