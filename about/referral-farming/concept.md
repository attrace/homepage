---
title: Referral Farming
sidebar_label: Concept
description: Deep dive into concept and flow of Referral Farming
slug: '/referral-farming'
---

Referral farming is a concept invented by the Attrace team which aims at providing proper incentives for successful referrals of tokens. Referral farming distributes rewards to those who “spread the word” about the tokens and those who buy and hold the tokens based on the recommendation. 

## “Adding value” via referrals
When people buy tokens and hold them, whether they simply keep or stake the tokens or provide liquidity, we say that they “add value” to the token community, or more specifically to the existing token holders or anyone who benefits from token value/price increase (typically projects or large investors in projects).

To properly account for the "value added" via referrals, Attrace Oracles track "position" of the amount of tokens bought and held (when purchase came via referral link). And because a person who bought the tokens was influenced/persuaded by a promoter/recommender, we consider that both of them "added value" to the token community. Therefore, to attribute a share of “added value” to both parties, the Oracles create two “positions” in the farm by splitting the purchased amount of tokens in half (e.g. purchased tokens = 100; promoter position = 50; buyer’s position = 50). Everyone who joins the farm, receives rewards based on their share of the total “position” in the referral farm.

## How it works
​​Referral farming works in a similar way to farming on a DEX, where farming-like rewards are distributed for those who “add value” to the token community via referrals (instead of providing liquidity). This mechanism creates the same incentives as with yield farming and has the two key characteristics:


* it provides incentive to join the referral farm first and early in order to earn higher share of daily rewards
* rewards are continuously distributed among those who join the farm therefore incentivising buy and hold behavior and giving extra utility to holders over time (ideal for token believers)

These incentives provide a way for projects or larger investors to engage the community to help them “spread the word” about the token while growing the holders by giving them additional utility with referral farming rewards. We expect that projects will be the ones who will create referral farms to use this reward mechanism to incentivise people to "add value" via referrals over a specific time period.


## The Farming Effect
The first participant gets the highest yield/commission, which will then go down with more value being contributed. This creates the urgency to to start promoting/recommending a token of a newly created referral farm ASAP, as the rewards will be higher if you are an early adopter of the project.

In addition to the incentive to promote/buy early before the others join, buyers will want to keep their "position" as long as the rewards are active.

## Referral Farm Types

Currently, there are two Referral Farm types supported by Attrace protocol: 

### Single Referral Token Farm
_The Single Referral Token Farm is suitable for crypto or NFT projects/protocols to sponsor referrals of their own token._

- Consists of a single referredToken and single rewardToken 
- A referredToken is a token for which the referrals are sponsored (“buy and hold” via referral link earns rewards) 
- A referredToken can be any token, either a crypto/fungible token or NFT, on a blockchain supported by the Attrace protocol (e.g. ERC20, ERC721, ERC1155). At the moment only ERC20 tokens are supported as referredTokens
- A rewardToken is a token which is deposited in a referral farm as a reward for the successful referrals 
0 A rewardToken can be any crypto/fungible token on a blockchain supported by the Attrace protocol (e.g. ERC20). At the moment only ERC20 tokens are supported as rewardTokens 
- A referredToken and rewardToken can also be the same when the same crypto/fungible token is chosen for both when creating the farm


### Farming flow
The farming flow involves three players:
1. **Project:** The party that is looking for promotion for its digital asset. As an example a new crypto project that wants to create demand for its token, or a newly launch NFT collection
1. **Promotor:** The promotor is typically looking for a way to montise it's traffic or influence. This could a Twitter or YouTube account with large dedicated following, or a crypto news or statistics website that would like to earn from traffic being sent to a DEX or NFT market place
1. **Buyer:** Someone that got recommended by the promoter to buy in a farm and so can earn additional rewards from participating in a project.

The flow below explains in 5 steps how a farm is setup between the players

![](/about/referral-farming/farm-overview.svg)

1. Create Farm
1. Refer to Farm
1. Buy to Farm
1. Observe & React Read more about the role and functionality in the [Oracles section](/about/oracles).
1. Harvest Rewards





## Roles and Actors

| Role           | Name        | Description       | Value Proposition | Token Role     |
| -------------- |------------ | ----------------- | ----------------- | -------------- |
| Builders       | Attrace Team | Developing referral protocol (smart contracts, oracles, tokenomics) + dapp | Deliver trustless Referral protocol | Incentivised with ATTR token allocation | 
|                | Promoters (large crypto or NFT websites) | Utilizing SDK to integrate with referral protocol (provide cashback offers to their users or visitors) | Monetise traffic they send to Tokens, Dapps, DEXs or Marketplaces + increase user engagement | Earn sponsored tokens + earn ATTR tokens |
|                | Protocol, Dapp, marketplaces or DEXs | Utilizing SDK to integrate with referral protocol (bring referral feature to their users) | Increase the number of users/volume via referrals + increase the existing user engagement | Provide incentive in their native tokens including 5% worth of protocol fee in ATTR |  
| Promoters      | Crypto user, influencer or website | A user, influencer or website which promotes a token to their friends, followers or visitors  | Earn Referral Farm Rewards and become Attrace stakeholder | Earn sponsored tokens from sponsored referral farms + earn ATTR tokens from Attrace Referral farms |
| Projects | Attrace (Attrace Referral Farm) | Provides an incentive to promote a token and drive traffic towards their Protocol, Dapp, marketplaces or DEXs | Increase the number of users or volume via referrals | 100m ATTR over 2.5 years (10% of total token allocation) |
| | Protocol, Dapp, marketplaces or DEXs (Sponsored Referral Farms) | | | Provide incentive in their native tokens including |
| Participants | Buyer or Customer | Participant who bought tokens with attrace Promoter's link | Discover new projects, earn rewards and become Attrace stakeholder | Earn sponsored tokens from sponsored referral farms + earn ATTR tokens from Attrace Referral farms |



