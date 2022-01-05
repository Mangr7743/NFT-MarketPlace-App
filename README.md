A simple NFT marketplace

This is a simple NFT marketplace built on the Polygon blockchain. This marketplace allows for basic NFT transactions through metamask accounts such as listing NFTs, buying NFTs, and displaying owned/created NFTs. The marketplace uses a set listing price for each NFT and then the price of the NFT is chosen by the user in ETH.

The marketplace can be used locally through hardhat by with test accounts and deploying the smart contracts to display the functionality of simple NFT transactions.

**Example Image**
![image](https://user-images.githubusercontent.com/45516727/148149976-04b6cf06-81b8-4835-87e2-bf02da7ef26d.png)


**Local Setup**

1. Clone the project locally and install dependencies

``` 
git clone https://github.com/Mangr7743/NFT-MarketPlace-App.git

cd nft-marketplace

#install using npm or yarn
```

2. Setup hardhat

```
npx hardhat node
```

3. Deploy contracts and obtain contract addresses

```
npx hardhat run --network localhost scripts/deploy.js

copy address for 'nftAddress' and 'nftMarketAddress' to /config.js
```

4. Start app

```
npm run
```
