import { WrappingContainer, ProjectCard } from '@components/index';

export default function Showcase() {
  return (
    <WrappingContainer
      title="Showcase - Dovydas Lapinskas"
      description="Web3 applications showcase of full-stack blockchain developer, cryptocurrency enthusiast, and digital creator."
    >
      <div className="flex flex-col items-start justify-center max-w-4xl mx-auto mb-16">
        <h1 className="mb-8 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Showcase
        </h1>

        <section className="-mx-8 sm:-mx-6 md:-mx-8 lg:-mx-16 p-0 sm:p-6 md:p-8 lg:p-16 rounded-lg bg-gray-200 dark:bg-gray-800 outline outline-offset-8 outline-8 outline-gray-200 dark:outline-gray-800">
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
            image="/img/blog/my-web3-app-overview-dex/dex-1.png"
            tags={['DEFI', 'Ethereum', 'Next.js', 'ApexCharts']}
            description="DEX allow users to trade ERC-20 tokens listed on the exchange. It is deployed on Ethereum Goerli Test Network and uses USDC stablecoin testnet representation for trade settlements."
            network="Ethereum (Goerli Test Network)"
            contract="0xE970aDF0413879763a1B49dfFc72589672d2937A"
            github="https://github.com/dovydinho/dex"
          />
          <ProjectCard
            title="Treasure Hunt Outdoors"
            slug="https://treasure-hunt-outdoors.dovydas.io"
            image="/img/blog/my-web3-app-overview-treasure-hunt-outdoors/treasure-hunt-outdoors-7.png"
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
