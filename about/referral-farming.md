---
title: Referral Farming
sidebar_label: Referral Farming
description: "Referral farming distributes rewards to those who “spread the word” about the tokens and those who buy and hold the tokens based on the recommendation"
slug: '/referral-farming'
---

Referral farming is a smart contract deployed on Ethereum mainnet that distributes rewards based on the input received from the Oracles. In the Attrace protocol, it is represented as a reward contract that distributes yield farming-like rewards for successful referrals. 

## Concept
Referral farming, a concept invented by the Attrace team, aims to provide proper incentives for successful referrals of tokens. Referral farming distributes rewards to those who “spread the word” about the tokens and those who buy and hold the tokens based on that recommendation. 

### “Adding value” via referrals
When you buy tokens and hold them, whether to keep, stake or provide liquidity, we say that you “add value” to the token community, or more specifically to the existing token holders or anyone who benefits from token value/price increase (typically projects or large investors in projects).

To properly account for the "value added" via referrals, Attrace Oracles track the "position" of the amount of tokens bought and held (when said purchase came via a referral link). And because a person who bought the tokens was influenced/persuaded by a promoter/recommender, we consider that both of them "added value" to the token community. Therefore, to attribute a share of “added value” to both parties, the Oracles create two “positions”, one for each party (e.g., purchased tokens = 100; buyer’s position = 100; promoter’s position = 100). Everyone who joins the farm receives rewards based on their share of the total “position” in the referral farm. 

## How it works
Referral farming works in a similar way to farming on a DEX, where farming-like rewards are distributed to those who “add value” to the token community via referrals (instead of providing liquidity). This mechanism creates the same incentives as with yield farming and has two key characteristics:


* It provides an incentive to join the referral farm early in order to earn higher share of the daily rewards;
* Rewards are continuously distributed among those who join the farm, thereby incentivising buy and hold behavior and giving extra utility to holders over time (ideal for token believers).

These incentives provide a way for projects or larger investors to engage the community to help them “spread the word” about the token while growing the holders by giving them additional utility with referral farming rewards. We expect that projects will be the ones who will create referral farms to use this reward mechanism to incentivise people to "add value" via referrals over a specific time period.


## The Farming Effect
The first participant gets the highest yield/commission, which will then decrease with more value being contributed. This creates an urgency to start promoting/recommending a token of a newly created referral farm early, as the rewards will be higher if you are an early adopter of the project.

In addition to the incentive to promote/buy early, buyers will want to keep their "position" as long as the rewards are active.

## Referral Farm Types

Currently, there are two Referral Farm types supported by the Attrace protocol: 

### Single Referral Token Farm
_The Single Referral Token Farm is suitable for crypto or NFT projects/protocols to sponsor referrals of their own token._

- It consists of a single referredToken and single rewardToken 
- A referredToken is a token for which the referrals are sponsored (“buy and hold” via referral link earns rewards) 
- A referredToken can be any token, either a crypto/fungible token or an NFT, on a blockchain supported by the Attrace protocol (e.g. ERC20, ERC721, ERC1155)
- A rewardToken is a token which is deposited in a referral farm as a reward for successful referrals. It can be any crypto/fungible token on a blockchain supported by the Attrace protocol (e.g. ERC20)
- A referredToken and rewardToken can also be the same when the same crypto/fungible token is chosen for both when creating the farm


### Multi Referral Token Farm _(coming soon)_
_ Multi Referral Token Farm is the most suitable for ecosystems hosting token exchanges that are willing to incentivise traffic/volume towards their protocols via purchase of various tokens (e.g., DEX, Marketplaces, blockchain networks). _

- Multi Referral Token Farm consists of multiple referredTokens and a single rewardToken
- Referrals are sponsored for a number of referredToken chosen by those who create a farm (“buy and hold” of any of the token via referral link earns rewards) 
- In addition to the chosen referredToken the destination contract address, where the buying of tokens will occur, is specified at the moment the farm is created
- A rewardToken is a token that is deposited in a referral farm as a reward for the successful referrals 
- A rewardToken can be any crypto/fungible token on a blockchain supported by the Attrace Protocol (e.g. ERC20). 

Check our [Medium article](https://medium.com/attrace/overview-attrace-referral-farms-52b2f88f05af) for more examples.  

:::note Attrace Referral Farm
The Attrace Referral Farm, a protocol native referral farm, will be the first to utilize Multi Referral Token Farm. The farm will consist of a number of referredTokens, chosen by the community, with rewards allocated as part of $ATTR distribution and the share of the collected protocol fees ([read more here](/about/tokenomics#attrace-referral-farm)). 
:::note




## Farming flow
The farming flow involves three parties:
1. **Project:** The party that is looking for promotion of its digital asset. For example, a new crypto project that wants to create demand for its token, or a newly launch NFT collection
1. **Promotor:** The promotor is typically looking for a way to monetise it's traffic or influence. This could a Twitter or YouTube account with a large dedicated following, or a crypto news or statistics website that would like to earn from traffic being sent to a DEX or NFT market place
1. **Buyer:** Someone that got recommended by the promoter to buy in a farm and so can earn additional rewards from participating in that project.

The flow below explains in 5 steps how a farm is setup between these parties

![](/about/referral-farming/farm-overview.svg)

1. Create Farm
1. Refer to Farm
1. Buy to Farm
1. Observe & React Read more about the role and functionality in the [Oracles section](/about/oracles).
1. Harvest Rewards







