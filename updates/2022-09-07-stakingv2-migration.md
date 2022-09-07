---
title: Staking migration  
description: The Attrace team is pleased to announce the release of the updated and improved version of the staking contract, Staking Contract v2.
authors:
  - nikola
  - roeland
tags: [product]
hide_table_of_contents: false
---
The Attrace team is pleased to announce the release of the updated and improved version of the staking contract: Staking Contract v2. The purpose of the new contract is to fix reported issues with the Staking Contract v1, continue the distribution of ATTR staking rewards and prepare for the Attrace Oracles to go public. The new version of the staking contract is available at: https://app.attrace.com/staking
<!--truncate-->

# Staking Rewards

It is intended to retain the original token emission schedule of distributing 10% of total token allocation via staking rewards (10M ATTR over the 30 month period). This means that 3.33M ATTR is intended to be distributed monthly across all stakers as originally planned.

Please note that at the beginning, the monthly staking rewards will amount to 1M ATTR monthly, until the majority of the stake has been moved to Staking Contract v2. The aim is to continue with the intended emission once the majority of the stake has migrated from Staking Contract v1. We are expecting that all stake will be migrated by the end of September, which is when the v1 contract will be retired (claiming rewards from v1 contract will still be possible) after which the rewards of Staking Contract v2 will be increased to the new intended level (3.33M ATTR monthly).

# Staking contract change (no penalty for unstaking)

The biggest change compared to the first version of the staking contract is that stakers can now freely unstake the entire amount of ATTR tokens at any point without any penalty. 

# What do I need to do?

To keep earning staking rewards you will need to migrate your existing stake from Staking Contract v1 to Staking Contract v2: 

1. Go to https://app.attrace.com/staking/v1
1. Connect your wallet
1. Select ‘Migrate’ button to migrate your stake
1. Approve the following transactions with your wallet:
    1. Grant the token permission to the Staking Contract v2
    1. Unstake ATTR from Staking Contract v1
    1. Stake ATTR to Staking Contract v2 

Once you complete all these steps you will start earning staking rewards from the updated contract. 

# Claiming rewards (Staking Contract v1)

After migrating your stake from Staking Contract v1, you will still need to claim your rewards from the old contract. We would suggest that you wait until all the rewards become vested so that you can claim all earned rewards at once, to avoid paying gas cost every time when claiming. Claiming features will remain exposed via the app so that everyone can continue to claim their rewards even after the contract is retired. 

# Claiming rewards (Staking Contract v2)

Claiming rewards will work the same as with the Staking Contract v1, the staking rewards earned can be claimed over a period of 12 months (1/12 of the rewards can be claimed each month). For example, if you have staked 10K ATTR and earned 120 ATTR tokens during the first month of staking, you would be able to claim 10 ATTR tokens every month for the next 12 months.

<div class="videowrapper">
<iframe width="780" height="500" src="https://www.youtube.com/embed/DDL_yg_CJMM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
</div>
<br/><br/>
Please reach out via our socials in case you have any questions!  







