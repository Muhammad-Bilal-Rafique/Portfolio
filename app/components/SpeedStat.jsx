import React from 'react'

const SpeedStat = () => {
  return (
    <div className="w-full border-y border-bg-secondary bg-action/5 py-6 px-4">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 text-center sm:text-left">
        <p className="text-text-primary font-medium text-base">
          {"⚡ Every 100ms slower your store loads, conversion drops by "}
          <span className="font-extrabold text-action">{"3.5%"}</span>
          {" — stores with 2.5s LCP convert "}
          <span className="font-extrabold text-action">{"30% less"}</span>
          {" than stores with 1.5s LCP."}
        </p>
        
        <a
          href="https://www.shopify.com/enterprise/blog/store-speed-conversion"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-text-muted hover:text-action underline underline-offset-2 whitespace-nowrap transition-colors"
        >
          {"Shopify Research →"}
        </a>
      </div>
    </div>
  );
};

export default SpeedStat;