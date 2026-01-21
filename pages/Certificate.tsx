
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Certificate: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#fafaf9] font-display text-[#171212] min-h-screen max-w-[480px] mx-auto pb-24">
      <nav className="sticky top-0 z-50 flex items-center bg-white/80 backdrop-blur-md p-4 justify-between border-b border-gray-100">
        <div onClick={() => navigate(-1)} className="flex size-10 items-center justify-center cursor-pointer">
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </div>
        <h2 className="text-lg font-bold flex-1 text-center">爱心证书</h2>
        <div className="flex w-10 items-center justify-end">
          <button className="flex size-10 items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
            <span className="material-symbols-outlined text-primary">share</span>
          </button>
        </div>
      </nav>

      <main className="p-4 pt-6">
        <div className="relative overflow-hidden bg-white rounded-xl shadow-xl border-2 border-primary p-8 min-h-[480px] flex flex-col items-center text-center">
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
            <span className="material-symbols-outlined text-[300px]">volunteer_activism</span>
          </div>
          <div className="z-10 w-full">
            <div className="flex justify-center mb-6">
              <div className="bg-primary/10 p-3 rounded-full">
                <span className="material-symbols-outlined text-primary text-4xl">workspace_premium</span>
              </div>
            </div>
            <h1 className="text-primary text-2xl font-extrabold tracking-widest mb-1">爱心荣誉证书</h1>
            <p className="text-xs uppercase tracking-[0.2em] text-primary/60 font-bold mb-8 italic">Honorary Certificate</p>
            <div className="space-y-6">
              <p className="text-lg font-medium">尊敬的 <span className="border-b-2 border-primary/30 px-4 font-bold">张小凡</span> 用户：</p>
              <p className="text-base leading-relaxed text-left indent-8">
                感谢您在“慧爱家”平台的每一分善举。您的爱心投入已经为需要帮助的群体带来了实质性的改变。这份证书旨在表彰您在公益事业中展现出的杰出贡献与责任感。
              </p>
              <p className="text-base leading-relaxed text-left indent-8">
                愿这一份温暖能跨越山海，让世界因您的参与而更加美好。
              </p>
            </div>
            <div className="mt-12 flex justify-end w-full pr-4 relative">
              <div className="border-2 border-double border-primary text-primary px-3 py-1 rounded-md opacity-80 flex flex-col items-center rotate-[-15deg]">
                <span className="text-[10px] font-bold">慧爱家公益平台</span>
                <span className="text-xs font-black">官方认证盖章</span>
                <span className="text-[8px]">Verified Charity</span>
              </div>
              <div className="absolute -bottom-4 right-0 text-[10px] text-gray-400 font-mono">
                ID: HAJ-2023-9921-X
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-center">
          <button className="flex items-center gap-2 px-6 py-2 rounded-full border border-primary/20 bg-white shadow-sm font-bold text-primary">
            <span className="material-symbols-outlined text-sm">download</span> 保存到相册
          </button>
        </div>
      </main>

      <div className="flex flex-wrap gap-3 p-4">
        {[
          { label: '捐赠总额', val: '¥1,280.00' },
          { label: '帮助人数', val: '42人' },
          { label: '守护天数', val: '156天' }
        ].map((stat, i) => (
          <div key={i} className="flex min-w-[100px] flex-1 flex-col gap-1 rounded-xl p-4 bg-white shadow-sm border border-gray-100">
            <p className="text-gray-500 text-xs font-medium">{stat.label}</p>
            <p className="text-primary tracking-tight text-xl font-extrabold">{stat.val}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;
