## Overview
The **Funded Trader Program** is a protocol-level mechanism that allows skilled traders to qualify for and trade with Overlay-provided capital by first passing an on-chain evaluation.

Traders demonstrate performance using their own capital.  
Upon passing, they receive access to a funded account with predefined risk limits and a profit-sharing model.

### Key Properties
- Traders do not own the funded capital — they can only trade with it and keep profits.
- Overlay absorbs all funded account losses.
- Traders keep **80%** of net profits.
- Overlay keeps **20%** only.

---

## Program Flow
**Pick Your Tier → Trade & Evaluate → Pass Evaluation → Get Funded → Trade → Withdraw Profits**

---

## Evaluation Phase

### Capital Lock
- Traders lock an amount of capital to participate in an evaluation tier.
- Locked capital is used exclusively for trading during the evaluation.
- There is no limit to losses and trials during the evaluation phase.

### Evaluation Criteria
To pass an evaluation, traders must satisfy **all** of the following conditions:

#### Profit Target
- Reach a predefined profit threshold (e.g. +50%).

#### Trading Volume Requirement
- Generate a minimum notional trading volume (e.g. $20,000).

#### Minimum Trading Days
- Trade on at least 5 distinct trading days.

#### Time Limit
- No maximum time limit (evaluation remains open until passed or abandoned).

Evaluation parameters vary by tier and are defined at the tiers page.

---

## Funded Account Activation
Once evaluation criteria are met:
- The trader receives access to a funded trading account.
- Capital is allocated by the Overlay protocol.
- Traders receive trading permissions only.
- Funded capital cannot be withdrawn or transferred.

---

## Risk Controls (Funded Phase)
Funded accounts are governed by risk limits:

- **Maximum Daily Loss:** 25%
- **Maximum Total Loss:** 50%

If any risk limit is breached:
- The funded account is automatically closed.
- Remaining capital is preserved by the protocol.
- The trader loses access to the funded account.

---

## Profit Distribution
- Profits are calculated on funded accounts only.
- Traders receive **80%** of realized net profits.
- Overlay retains **20%**.
- Profit withdrawals are available every 14 days.
- Losses on funded accounts are fully absorbed by the protocol.

---

## Eligible Markets
- Funded trading is limited to approved Overlay markets.
- Certain high-variance or experimental/gambling markets may be excluded.
- Eligibility rules may evolve over time.

## Program Safeguards
Overlay reserves the right to suspend or terminate any funded trading wallet in cases of market manipulation, abuse, or behavior that compromises system integrity or puts users at risk. This measure exists solely to protect users and ensure proper market operation.

---

## Scaling & Tiers
The program supports multiple evaluation tiers, each with:
- Different locked capital requirements.
- Different funding allocations.
- Different volume thresholds.

Higher tiers unlock access to larger funded accounts.  
Additional funding tiers (up to **$100,000+**) may be introduced in future protocol upgrades.

Current evaluation tiers and requirements are defined in the application:  
https://app.overlay.market/funded-trader
