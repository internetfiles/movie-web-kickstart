import { siteConfig } from "@/configs/site";
import React, { useEffect } from "react";
import MainNav from "@/components/navigation/main-nav";

const SiteHeader = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//bracemascara.com/67/ae/e3/67aee39d51ff1a813d163c60a33e8c9d.js';
    script.type = 'text/javascript';
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <MainNav items={siteConfig.mainNav} />
      {/* <MobileNav items={siteConfig.mainNav} className="md:hidden" /> */}
    </header>
  );
};

export default SiteHeader;
