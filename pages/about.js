import { WrappingContainer } from '@components/index';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <WrappingContainer
      title="About – Dovydas Lapinskas"
      description="About Dovydas Lapinskas: web3 software engineer, cryptocurrency enthusiast, and digital content creator."
    >
      <div className="flex flex-col items-start justify-center max-w-4xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
          About Me
        </h1>
        <h3 className="py-4 text-3xl font-bold">Bio</h3>
        <p className="py-2 text-xl font-bold">Specialty</p>
        <p className="mb-2">Software Engineering, Web3</p>

        <p className="py-2 text-xl font-bold">
          Introduction of Self, 3rd Person
        </p>
        <p className="mb-2">
          Dovydas Lapinskas is a Software Engineer with a focus on building web3
          applications. He is a self-taught programming recruit who switched
          from Engineering where he led large-scale and complex projects in both
          the Confectionary and Tobacco industries. With a long-term passion for
          IT, Dovydas has previous web-based project experience working with
          several affiliate marketing and Google AdSense programs.
        </p>

        <p className="py-2 text-xl font-bold">
          Introduction of Self, 1st Person
        </p>
        <p className="mb-2">
          Hey, I&apos;m Dovydas. I&apos;m a Software Engineer working with web3
          and blockchain applications. I&apos;m a self-taught programmer who
          switched from the engineering field where I led large-scale and
          complex projects in both Tobacco and Confectionary. As a passionate IT
          enthusiast, I was always involved with side web-based projects
          including several affiliate marketing and Google AdSense program
          initiatives.
        </p>

        <p className="py-2 text-xl font-bold">Education</p>
        <p className="mb-2">
          Dovydas Lapinskas graduated from Klaipeda University with BSc in
          Mechanical Engineering.
        </p>
        <h3 className="py-4 text-3xl font-bold">Headshot</h3>
        <div className="w-full sm:w-1/2">
          <Image
            alt="Dovydas Lapinskas"
            height={176}
            width={176}
            src="/img/dovydas-lapinskas.png"
            sizes="30vw"
            priority
            className="rounded-lg"
          />
        </div>
        <h3 className="py-4 text-3xl font-bold">Links</h3>
        <ul className="list-disc marker:text-gray-500 pl-6 mb-2">
          <ListItemLink
            title="Twitter"
            href="https://twitter.com/dovydinho"
            description="@dovydinho"
          />
          <ListItemLink
            title="GitHub"
            href="https://github.com/dovydinho"
            description="@dovydinho"
          />
          <ListItemLink
            title="Website"
            href="https://dovydas.io"
            description="https://dovydas.io"
          />
          <ListItemLink
            title="LinkedIn"
            href="https://www.linkedin.com/in/dovydas-lapinskas"
            description="https://www.linkedin.com/in/dovydas-lapinskas"
          />
        </ul>
      </div>
    </WrappingContainer>
  );
}

const ListItemLink = ({ title, href, description }) => {
  return (
    <li>
      {title}:{' '}
      <Link href={href}>
        <a target="_blank" className="text-blue-600 dark:text-blue-300">
          {description}
        </a>
      </Link>
    </li>
  );
};
