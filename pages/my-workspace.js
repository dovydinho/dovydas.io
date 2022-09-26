import { WrappingContainer } from '@components/index';

export default function Workspace() {
  return (
    <WrappingContainer
      title="My Workspace – Dovydas Lapinskas"
      description="Workspace of full-stack blockchain developer, cryptocurrency enthusiast, and digital creator."
    >
      <div className="flex flex-col items-start justify-center max-w-4xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
          My Workspace
        </h1>
        <p className="mb-2">
          Here&apos;s my current home office setup and tech used for my daily
          work. Most of these have been accumulated over the past several years,
          with a recent office upgrade in 2020.
        </p>

        <h3 className="py-4 text-3xl font-bold">Office Setup</h3>
        <p className="py-2 text-xl font-bold">Desktop</p>
        <ul className="list-disc marker:text-gray-500 pl-6 mb-2">
          <li>AMD Ryzen 5 3600</li>
          <li>MSI GeForce GTX 1080 Ti GAMING X 11GB</li>
          <li>2x Kingston HyperX FURY 16GB 3200MHz DDR4</li>
          <li>MSI B450 TOMAHAWK MAX, ATX, AM4</li>
          <li>Samsung SSD 850 EVO 500GB</li>
          <li>Dysk Seagate BarraCuda 3 TB 3.5&quot; SATA III</li>
          <li>Corsair RM750X 750W</li>
        </ul>
        <p className="py-2 text-xl font-bold">External Devices</p>
        <ul className="list-disc marker:text-gray-500 pl-6 mb-2">
          <li>DELL U2515Hc Monitor</li>
          <li>DELL U2415b Monitor</li>
          <li>Logitech G305 Mouse</li>
          <li>Corsair Strafe RGB Mechanical Gaming Keyboard</li>
          <li>Superlux E205U Condenser Microphone</li>
          <li>Logitech Z333 Multimedia Speaker System</li>
          <li>Jabra Evolve2 65 Headset</li>
          <li>GoPro as Webcam</li>
        </ul>
        <p className="py-2 text-xl font-bold">Office Desk</p>
        <ul className="list-disc marker:text-gray-500 pl-6 mb-2">
          <li>IKEA Desk (LAGKAPTEN / ALEX)</li>
          <li>Himalayan Salt Lamp</li>
          <li>Yeelight RGB Lightstrip</li>
          <li>Random Chair :)</li>
        </ul>

        <h3 className="py-4 text-3xl font-bold">Software</h3>
        <p className="py-2 text-xl font-bold">Coding</p>
        <ul className="list-disc marker:text-gray-500 pl-6 mb-2">
          <li>VSCode Editor</li>
        </ul>
        <p className="py-2 text-xl font-bold">Other Software</p>
        <ul className="list-disc marker:text-gray-500 pl-6 mb-2">
          <li>Bitwarden</li>
          <li>Brave / Mozilla / Chrome</li>
          <li>Photoshop</li>
          <li>Discord</li>
        </ul>
      </div>
    </WrappingContainer>
  );
}
