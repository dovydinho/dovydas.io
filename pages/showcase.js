import { WrappingContainer } from '@components/index';
import ProjectCard from '@components/project-card';

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
            title="Decentralized Exchange"
            slug="https://dex.dovydas.io"
            image="/img/blog/my-web3-app-overview-dex/dex-1.png"
            tags={['DEFI', 'Ethereum', 'Next.js', 'ApexCharts']}
            description="DEX allow users to trade ERC-20 tokens listed on the exchange. It is deployed on Ethereum Ropsten Test Network and uses USDC stablecoin testnet representation for trade settlements."
            network="Ethereum (Ropsten Test Network)"
            contract="0x5EB8bC7F4A09A9510685A744F6f355248Bd52272"
            github="https://github.com/dovydinho/dex"
          />
          <ProjectCard
            title="Treasure Hunt Outdoors"
            slug="https://treasure-hunt-outdoors.dovydas.io"
            image="/img/blog/my-web3-app-overview-treasure-hunt-outdoors/treasure-hunt-outdoors-7.png"
            tags={['Web3', 'Ethereum', 'Next.js', 'Leaflet']}
            description="Web3 application powered by Ethereum and inspired by adventure game Geocaching, 
            where community can look for caches pinned on the game map or create new challenges for other adventure enthusiasts."
            network="Ethereum (Ropsten Test Network)"
            contract="0x6E41D2a146EE85506A83f79578ad3D04CaB2b59D"
            github="https://github.com/dovydinho/treasure-hunt-outdoors"
          />
        </section>
      </div>
    </WrappingContainer>
  );
}
