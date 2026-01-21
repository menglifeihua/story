
import React from 'react';

const Splash: React.FC = () => {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-between bg-white overflow-hidden max-w-[480px] mx-auto">
      <div className="h-24 md:h-32"></div>
      <div className="flex flex-col items-center justify-center px-8">
        <div className="mb-10 relative">
          <svg className="w-24 h-24 md:w-28 md:h-28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 85C50 85 15 65 15 40C15 25 25 15 37.5 15C44 15 48 18 50 22C52 18 56 15 62.5 15C75 15 85 25 85 40C85 65 50 85 50 85Z" stroke="#af1818" strokeLinejoin="round" strokeWidth="2.5"></path>
            <path d="M40 55V42L50 34L60 42V55" stroke="#af1818" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
            <path d="M45 55H55" stroke="#af1818" strokeLinecap="round" strokeWidth="2.5"></path>
          </svg>
        </div>
        <div className="mb-4">
          <h1 className="text-primary text-[42px] font-extrabold leading-none brand-calligraphy tracking-wider font-brand">
            慧爱家
          </h1>
        </div>
        <div className="flex items-center justify-center">
          <div className="h-[1px] w-4 bg-primary/30 mr-3"></div>
          <h2 className="text-primary text-sm font-bold tagline-spacing uppercase">
            Charity & Home
          </h2>
          <div className="h-[1px] w-4 bg-primary/30 ml-3"></div>
        </div>
      </div>
      <div className="pb-16 flex flex-col items-center px-4">
        <p className="text-[#96A1A6] text-[13px] font-normal leading-relaxed tracking-[0.3em] uppercase opacity-80">
          汇聚爱 · 温暖家
        </p>
        <div className="mt-8 h-1 w-8 bg-primary/10 rounded-full"></div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-primary blur-[100px]"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-primary blur-[100px]"></div>
      </div>
    </div>
  );
};

export default Splash;
