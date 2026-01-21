
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CharityReport: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#fdfcfc] min-h-screen pb-24 max-w-[480px] mx-auto">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md px-4 py-4 flex items-center border-b border-gray-100">
        <button onClick={() => navigate(-1)} className="material-symbols-outlined text-primary p-2">arrow_back_ios_new</button>
        <h1 className="flex-1 text-center text-lg font-bold pr-10 font-serif">慧爱公益报告</h1>
      </header>

      <main className="p-6">
        <div className="bg-gradient-to-br from-primary to-brand-darkRed rounded-3xl p-8 text-white shadow-xl mb-10 relative overflow-hidden">
          <div className="absolute -bottom-10 -right-10 opacity-10">
            <span className="material-symbols-outlined text-[160px]">volunteer_activism</span>
          </div>
          <p className="text-xs uppercase tracking-[0.3em] font-bold opacity-80 mb-2">Total Contribution</p>
          <h2 className="text-4xl font-black font-serif mb-6">¥1,250.00</h2>
          <div className="flex justify-between items-center pt-6 border-t border-white/20">
            <div>
              <p className="text-[10px] opacity-70 uppercase mb-1">Impact Rank</p>
              <p className="text-base font-bold">超越了 88% 的用户</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] opacity-70 uppercase mb-1">Days with Us</p>
              <p className="text-base font-bold">124 天</p>
            </div>
          </div>
        </div>

        <h3 className="font-serif font-bold text-xl mb-6 border-l-4 border-primary pl-3">影响力概览</h3>
        <div className="grid grid-cols-2 gap-4 mb-10">
          {[
            { label: '支持项目', val: '12 个', icon: 'favorite' },
            { label: '爱心好物', val: '5 件', icon: 'shopping_bag' },
            { label: '直接帮助', val: '15 人', icon: 'group' },
            { label: '积分积累', val: '2,850', icon: 'stars' }
          ].map((item, i) => (
            <div key={i} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-primary mb-2 text-2xl">{item.icon}</span>
              <p className="text-xs text-gray-400 mb-1">{item.label}</p>
              <p className="text-lg font-black text-gray-900 font-serif">{item.val}</p>
            </div>
          ))}
        </div>

        <h3 className="font-serif font-bold text-xl mb-6 border-l-4 border-primary pl-3">最近足迹</h3>
        <div className="space-y-4">
          {[
            { title: '助力乡村困境儿童圆梦计划', time: '2024-05-18', val: '¥100.00' },
            { title: '购买：传统非遗竹编花篮', time: '2024-05-12', val: '¥129.00' },
            { title: '参与：旧衣回收计划', time: '2024-04-20', val: '+50 积分' }
          ].map((log, i) => (
            <div key={i} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
              <div>
                <p className="text-sm font-bold text-gray-900 truncate max-w-[200px]">{log.title}</p>
                <p className="text-[10px] text-gray-400 mt-1">{log.time}</p>
              </div>
              <p className="text-sm font-black text-primary font-serif">{log.val}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CharityReport;
