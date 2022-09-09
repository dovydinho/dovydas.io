import { WrappingContainer } from '@components/index';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <WrappingContainer
      title="About – Dovydas Lapinskas"
      description="About Dovydas Lapinskas: full-stack blockchain developer, cryptocurrency enthusiast, and digital creator."
    >
      <div className="flex flex-col items-start justify-center max-w-4xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
          About Me
        </h1>
        <h3 className="py-4 text-3xl font-bold">Bio</h3>
        <p className="py-2 text-xl font-bold">Specialty</p>
        <p className="mb-2">Web3 Application Development</p>

        <p className="py-2 text-xl font-bold">
          Introduction of Self, 3rd Person
        </p>
        <p className="mb-2">
          Dovydas Lapinskas is a Full-stack Blockchain Application Developer
          with experience in building various web3 projects. He is a self-taught
          programming recruit switched from Engineering field where he lead
          large-scale and complexity projects in both Confectionary and Tobacco
          industries. With long-term passion for IT, Dovydas has previously web
          development experience working with several affiliate marketing and
          Google AdSense programs.
        </p>

        <p className="py-2 text-xl font-bold">
          Introduction of Self, 1st Person
        </p>
        <p className="mb-2">
          Hey, I&apos;m Dovydas. I&apos;m a Full-stack Blockchain Application
          Developer working with various web3 projects. I&apos;m a self-taught
          programmer switched from Engineering field where I lead large-scale
          and complexity projects in both Tobacco and Confectionary. As an IT
          enthusiast even when working in Engineering I was always involved with
          web development working with several affiliate marketing and Google
          Adsense programs. I&apos;m an investor and hodler of cryptocurrencies.
        </p>

        <p className="py-2 text-xl font-bold">Education</p>
        <p className="mb-2">
          Dovydas Lapinskas graduated from Klaipeda University with BSc in
          Mechanical Engineering.
        </p>
        <h3 className="py-4 text-3xl font-bold">Headshot</h3>
        <div className="w-1/2">
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
          <li>
            Twitter:{' '}
            <Link href="https://twitter.com/dovydinho">
              <a target="_blank" className="text-blue-600 dark:text-blue-300">
                @dovydinho
              </a>
            </Link>
          </li>
          <li>
            GitHub:{' '}
            <Link href="https://github.com/dovydinho">
              <a target="_blank" className="text-blue-600 dark:text-blue-300">
                @dovydinho
              </a>
            </Link>
          </li>
          <li>
            Website:{' '}
            <Link href="https://dovydas.io">
              <a target="_blank" className="text-blue-600 dark:text-blue-300">
                https://dovydas.io
              </a>
            </Link>
          </li>
          <li>
            LinkedIn:{' '}
            <Link href="https://www.linkedin.com/in/dovydas-lapinskas/">
              <a target="_blank" className="text-blue-600 dark:text-blue-300">
                https://www.linkedin.com/in/dovydas-lapinskas
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </WrappingContainer>
  );
}
