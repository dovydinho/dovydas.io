import { WrappingContainer, ProjectCard } from '@components/index';

export default function Showcase() {
  return (
    <WrappingContainer
      title="Showcase - Dovydas Lapinskas"
      description="Web3 software engineer, cryptocurrency enthusiast, and digital content creator applications showcase"
    >
      <div className="flex flex-col max-w-4xl mx-auto mb-16">
        <h1 className="mb-8 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Showcase
        </h1>

        <section className="sm:px-8 py-2 rounded-3xl sm:bg-gray-200 sm:dark:bg-gray-800 sm:outline outline-offset-8 outline-8 outline-gray-200 dark:outline-gray-800">
          <ProjectCard
            title="NFT Drop"
            slug="https://nft-drop.dovydas.io"
            image="/img/blog/my-web3-app-overview-nft-drop/nft-drop-4.jpg"
            tags={['Next.js', 'Sanity', 'Thirdweb']}
            description="NFT Drop allows users to browse displayed artist collections and mint new NFTs which are the available on the most popular NFT marketplace - Opensea."
            network="Ethereum (Goerli Test Network)"
            contract="0xAac3B8d788f85684A5c959c6CF005E11FaeD0f57"
            github="https://github.com/dovydinho/nft-drop"
          />
          <ProjectCard
            title="Crowdfund"
            slug="https://crowdfund.dovydas.io"
            image="/img/blog/my-web3-app-overview-crowdfund/crowdfund-4.jpg"
            tags={['Ethereum', 'Next.js', 'Sanity', 'Hardhat']}
            description="Crowdfund app enables users to create projects and set weekly funding targets to be unlocked and distributed for project contributors evenly and transparently."
            network="Ethereum (Goerli Test Network)"
            contract="0xb465C6E71C8694846426A28f596D4c44D203F6bC"
            github="https://github.com/dovydinho/crowdfund"
          />
          <ProjectCard
            title="Decentralized Exchange"
            slug="https://dex.dovydas.io"
            image="/img/blog/my-web3-app-overview-dex/dex-1.jpg"
            tags={['DEFI', 'Ethereum', 'Next.js', 'ApexCharts']}
            description="DEX allow users to trade ERC-20 tokens listed on the exchange. It is deployed on Ethereum Goerli Test Network and uses USDC stablecoin testnet representation for trade settlements."
            network="Ethereum (Goerli Test Network)"
            contract="0xE970aDF0413879763a1B49dfFc72589672d2937A"
            github="https://github.com/dovydinho/dex"
          />
          <ProjectCard
            title="Treasure Hunt Outdoors"
            slug="https://treasure-hunt-outdoors.dovydas.io"
            image="/img/blog/my-web3-app-overview-treasure-hunt-outdoors/treasure-hunt-outdoors-7.jpg"
            tags={['Web3', 'Ethereum', 'Next.js', 'Leaflet']}
            description="Web3 application powered by Ethereum and inspired by adventure game Geocaching, 
            where community can look for caches pinned on the game map or create new challenges for other adventure enthusiasts."
            network="Ethereum (Goerli Test Network)"
            contract="0x1953429ef894a7a6Cc6102D0eAc9C05121a41F7f"
            github="https://github.com/dovydinho/treasure-hunt-outdoors"
          />
        </section>
      </div>
    </WrappingContainer>
  );
}
