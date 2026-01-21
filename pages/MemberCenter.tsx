
import React from 'react';
import { useNavigate } from 'react-router-dom';

const MemberCenter: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#fcfcfc] min-h-screen pb-28 max-w-[480px] mx-auto">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md px-4 py-4 flex items-center justify-between border-b border-gray-100">
        <span onClick={() => navigate(-1)} className="material-symbols-outlined text-primary">arrow_back_ios</span>
        <h1 className="font-serif text-lg font-bold tracking-wider">会员中心</h1>
        <span className="material-symbols-outlined text-gray-600">settings</span>
      </nav>

      <div className="p-6 bg-white">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="size-20 rounded-full border-2 border-primary/20 p-1">
              <div className="w-full h-full rounded-full bg-cover bg-center" style={{backgroundImage: "url('/avatar1.png')"}}></div>
            </div>
            <div className="absolute -bottom-1 -right-1 bg-primary px-2 py-0.5 rounded-full border border-white">
              <p className="text-[10px] text-white font-bold">V3</p>
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl font-serif font-bold">张先生</h2>
            <div className="flex items-center gap-2"><span className="text-primary text-sm font-medium">慧爱尊享会员 • Premium Member</span></div>
            <p className="text-gray-600 text-xs mt-1">ID: 8888 6666 9921</p>
          </div>
        </div>
      </div>

      <div className="px-4 mt-2 mb-8">
        <div className="bg-primary w-full aspect-[1.6/1] rounded-2xl p-6 shadow-xl flex flex-col justify-between relative overflow-hidden" style={{background: 'radial-gradient(circle at 100% 0%, rgba(255,255,255,0.08) 0%, transparent 50%), #8d011b'}}>
          <div className="flex justify-between items-start relative z-10">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-white text-xl fill-1">volunteer_activism</span>
                <span className="text-[10px] tracking-[0.3em] text-white/90 font-bold uppercase">Hui Ai Jia Premium</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-white">爱心大使会员卡</h3>
            </div>
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-md border border-white/20">
              <span className="material-symbols-outlined text-white text-3xl">verified_user</span>
            </div>
          </div>
          <div className="flex flex-col gap-1 relative z-10">
            <div className="flex justify-between items-end">
              <div>
                <p className="text-[10px] text-white/70 tracking-widest uppercase">有效期至</p>
                <p className="text-sm font-medium text-white">2025-12-31</p>
              </div>
              <button className="bg-white text-primary px-5 py-2 rounded-xl text-sm font-bold flex items-center gap-2">
                <span>立即续费</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 mb-8">
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: '当前爱心值', icon: 'favorite', val: '12,850' },
            { label: '爱心排名', icon: 'workspace_premium', val: 'TOP 5%' }
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-xl p-5 shadow-sm flex flex-col items-center justify-center text-center">
              <p className="text-gray-600 text-xs mb-1 uppercase tracking-tighter">{stat.label}</p>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-primary text-xl">{stat.icon}</span>
                <span className="text-2xl font-serif font-bold text-primary">{stat.val}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-8">
        <div className="px-6 flex justify-between items-center mb-6">
          <h3 className="font-serif text-xl font-bold border-l-4 border-primary pl-3">会员特权</h3>
          <span className="text-xs text-primary font-medium">查看全部</span>
        </div>
        <div className="grid grid-cols-4 gap-4 px-6">
          {[
            { icon: 'redeem', label: '专属礼包' },
            { icon: 'campaign', label: '优先认领' },
            { icon: 'cake', label: '生日惊喜' },
            { icon: 'support_agent', label: '金牌客服' }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="size-14 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-2xl">{item.icon}</span>
              </div>
              <span className="text-[11px] text-center font-medium text-gray-600">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemberCenter;
