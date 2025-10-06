"use client";

import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarBase from '@/components/navigation/NavbarBase';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import PatternTokenomics from '@/components/sections/layouts/tokenomics/PatternTokenomics';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'futuristicAndOutOfBox', colorTemplate: 2, textAnimation: 'slide' }}>
      <div id="nav" data-section="nav">
        <NavbarBase
          logoSrc="/images/logo.svg"
          logoAlt="Xeven Solutions"
          leftButtonText="Get Started"
          className=""            
          containerClassName=""
          logoClassName=""
          buttonClassName=""
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <TokenBillboardHero
          title="Welcome to Xeven Solutions"
          subtitle="Your gateway to innovative SaaS solutions."
          contractAddress="0x..."
          copyButtonText="Copy Address"
          copiedText="Address Copied!"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SocialsAbout
          title="About Us"
          descriptions={[
            "We provide cutting-edge solutions tailored to your needs.",
            "Join us as we navigate the digital landscape."
          ]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          title="How to Buy"
          steps={[
            { title: "Step 1", description: "Register your account", image: "", position: "left", isCenter: false },
            { title: "Step 2", description: "Verify your identity", image: "", position: "center", isCenter: true },
            { title: "Step 3", description: "Make your purchase", image: "", position: "right", isCenter: false }
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <PatternTokenomics
          title="Tokenomics"
          description="Explore our tokenomics structure to understand our value distribution."
          kpiItems={[
            { value: "100M", description: "Total Supply", icon: "" },
            { value: "50M", description: "Circulated Supply", icon: "" },
            { value: "10M", description: "Reserved for Team", icon: "" }
          ]}
        />
      </div>
      <div id="faq" data-section="faq" className="scroll-mt-24">
        <CentralFAQ
          items={[
            { title: "What is Xeven Solutions?", content: "Xeven Solutions is a SaaS provider..." },
            { title: "How do I get started?", content: "Simply sign up..." },
            { title: "What are the pricing options?", content: "We offer a range of pricing models..." },
            { title: "Is support available?", content: "Yes, 24/7 support is here for you!" }
          ]}
          title="Frequently Asked Questions"
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogo
          logoSrc="/images/logo.svg"
          logoAlt="Xeven Solutions"
          logoText="Xeven Solutions"
          className=""
          svgClassName=""
        />
      </div>
    </SiteThemeProvider>
  );
}
