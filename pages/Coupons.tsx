
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Coupons: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f7f8f9] min-h-screen max-w-[480px] mx-auto">
      <header className="sticky top-0 z-50 bg-white px-4 py-4 flex items-center border-b border-gray-100">
        <button onClick={() => navigate(-1)} className="material-symbols-outlined text-primary p-2">arrow_back_ios_new</button>
        <h1 className="flex-1 text-center text-lg font-bold pr-10">我的奖券</h1>
      </header>

      <div className="flex border-b border-gray-100 bg-white">
        {['可用 (2)', '已使用 (5)', '已过期'].map((tab, i) => (
          <button key={i} className={`flex-1 py-4 text-sm font-bold ${i === 0 ? 'text-primary border-b-2 border-primary' : 'text-gray-500'}`}>{tab}</button>
        ))}
      </div>

      <main className="p-4 space-y-4">
        <div className="bg-white rounded-xl overflow-hidden flex shadow-sm border border-primary/10 relative">
          <div className="w-24 bg-primary flex flex-col items-center justify-center text-white">
            <p className="text-2xl font-black">¥10</p>
            <p className="text-[10px] font-bold">满99可用</p>
          </div>
          <div className="flex-1 p-4 relative">
            <h3 className="font-bold text-gray-900 text-sm">慧爱公益商品券</h3>
            <p className="text-[10px] text-gray-400 mt-1">有效期至 2024-12-31</p>
            <button onClick={() => navigate('/shop')} className="absolute bottom-4 right-4 bg-primary/10 text-primary text-[10px] px-4 py-1.5 rounded-full font-bold">立即使用</button>
          </div>
          <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 rounded-full bg-[#f7f8f9]"></div>
          <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 rounded-full bg-[#f7f8f9]"></div>
        </div>

        <div className="bg-white rounded-xl overflow-hidden flex shadow-sm border border-primary/10 opacity-80">
          <div className="w-24 bg-brand-gray flex flex-col items-center justify-center text-white">
            <p className="text-2xl font-black">Free</p>
            <p className="text-[10px] font-bold">运费券</p>
          </div>
          <div className="flex-1 p-4 relative">
            <h3 className="font-bold text-gray-900 text-sm">爱心包裹免邮券</h3>
            <p className="text-[10px] text-gray-400 mt-1">仅限慧爱自营商品</p>
            <button onClick={() => navigate('/shop')} className="absolute bottom-4 right-4 bg-brand-gray/10 text-brand-gray text-[10px] px-4 py-1.5 rounded-full font-bold">立即使用</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Coupons;
