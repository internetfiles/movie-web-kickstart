import React, { useEffect } from "react";

const SiteFooter = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://bracemascara.com/376926be59b8e7a9fea49241db31690a/invoke.js"; // Replace with the actual Adsterra script URL
    script.async = true;
    document.getElementById("adsterra-banner").appendChild(script);
  }, []);

  return (
    <footer aria-label="Footer" className="w-full">
      <div className="container flex justify-center py-10">
        <div id="adsterra-banner" style={{ width: "100%", textAlign: "center" }}>
          {/* The Adsterra banner will be injected here */}
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
