---
slug: /
sidebar_position: 1
---

# Introduction to Overlay


## What is Overlay?

Overlay Protocol is a decentralized platform built on Arbitrum, and offers users the ability to build positions on a market or data stream without traditional counterparties (liquidity providers or market makers) taking the other side of the position. The protocol can offer markets on ANY non-manipulable & non-predictable numerical data feed.

Initially, the token and markets were created on Ethereum. However, following a governance proposal, the community decided to transition to becoming a native Arbitrum protocol.



> INFO    
> For a deep dive into Overlay Protocol, please refer to our white paper [here](https://redrct.overlay.market/whitepaper).




## Types of markets

Overlay aims to offer several types of markets, based on price data feeds and non-manipulable & non-predictable data feeds. These include:



* non-traditional crypto markets such as markets letting users build positions on hash rate, gas, BTC difficulty, NFT floors, social tokens, yield rates, etc. 
* non-traditional markets such as e-sports & sports, sneaker prices, scalar social-political markets, nature and science markets, etc. 
* And the list goes on


## How does Overlay offer markets without counterparties?

Users build positions against the entire protocol itself, or perhaps most tellingly: against every other OVL holder simultaneously. This enables Overlay markets to have deep liquidity without the need for liquidity providers or traditional swap-based counterparties (including market makers). To read more about how the protocol negates the potential OVL inflation risk from this mechanism, please refer to [this page](/Concepts%20Explained/Pricing%20and%20Price%20Impact).


## Pricing based on oracle feeds

Pricing on Overlay markets is not dynamic in the traditional sense; it is based on values intermittently fetched from oracles. These oracle values are then adjusted by certain mechanisms built-in to the protocol (for more details, please [see our docs](/Concepts%20Explained/Pricing%20and%20Price%20Impact) on Pricing on Overlay). Overlay has the ability to onboard nearly any oracle, as long as the oracle feed is non-manipulable and non-predictable. 

 ## How does trading work (Collateral and PnL)?

Users would be required to lock OVL as collateral to a position in an Overlay market. PnL is settled in OVL. OVL is minted by the protocol and sent to the user as PnL if a position is in profit; on the other hand, if the position is at a loss, locked OVL is burned (to the extent of the loss).


## OVL

OVL is the proposed native token of Overlay Protocol. It is an ERC-20 token on the Arbitrum Mainnet. OVL serves a dual purpose and will be used to participate in trading and DAO governance after launch. OVL acts as liquidity and governance in the Overlay system - all PnL for users is denominated in OVL, creating a flywheel effect where utility, liquidity and community incentives are fed back into the system. For more on OVL, please refer to [our section on OVL here](/Concepts%20Explained/OVL).


## Nature of Contracts entered by users

Positions on Overlay Protocol resemble perpetual futures contracts (perps) - similar to perps, the contracts keep rolling over, with no expiration date or actual settlement. However, contracts offered on Overlay markets have several key features differing from conventional perps. For more on this, please refer to [our section on this](/Concepts%20Explained/How%20is%20Overlay%20different).


> DISCLAIMER     
> Building positions can result in financial loss, especially with the use of leverage. Do your research about Overlay Protocol and the markets it offers before deploying your resources. A good rule of thumb is to not build positions with more than you can afford to lose. Overlay Protocol is a nascent and untested technology. While measures have been taken to secure the code/network/protocol, that does not ensure real funds cannot be lost.


<p style={{textAlign: 'right'}}>
<em>Last updated on <strong>Dec 19, 2023</strong></em></p>
