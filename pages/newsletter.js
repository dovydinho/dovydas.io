import { Subscribe, WrappingContainer } from '@components/index';

export default function Newsletter() {
  return (
    <WrappingContainer
      title="Newsletter - Dovydas Lapinskas"
      description="Newsletter of web3 software engineer, cryptocurrency enthusiast, and digital content creator."
    >
      <div className="flex flex-col items-start justify-center max-w-4xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
          Newsletter
        </h1>
        <p className="mb-6">
          My newsletter provides a behind-the-scenes look into what I&apos;m
          working on and writing about. I frequently share some of my favorite
          articles I&apos;ve read, as well as anything fascinating about
          technology.
        </p>
        <Subscribe />
      </div>
    </WrappingContainer>
  );
}
