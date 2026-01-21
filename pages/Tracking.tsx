
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tracking: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-[480px] mx-auto min-h-screen flex flex-col bg-white relative">
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-50">
        <div className="flex items-center p-4 justify-between">
          <button onClick={() => navigate(-1)} className="text-primary flex items-center justify-center"><span className="material-symbols-outlined text-[28px]">arrow_back_ios_new</span></button>
          <h2 className="text-lg font-bold tracking-tight text-slate-800">物流详情</h2>
          <span className="material-symbols-outlined filled text-primary text-[28px] fill-1">favorite</span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(142,1,27,0.08)]">
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">顺丰速运</p>
                <p className="text-2xl font-bold text-primary tabular-nums">SF 164 293 8840</p>
              </div>
              <div className="flex gap-2 mt-1">
                <button className="flex items-center justify-center rounded-full h-8 px-4 bg-primary text-white gap-1.5 text-xs font-bold transition-opacity active:opacity-80"><span className="material-symbols-outlined text-[14px]">content_copy</span><span>复制单号</span></button>
                <button className="flex items-center justify-center rounded-full h-8 px-4 bg-slate-50 text-gray-500 border border-slate-200 gap-1.5 text-xs font-bold"><span className="material-symbols-outlined text-[14px]">call</span><span>联系快递员</span></button>
              </div>
            </div>
            <div className="w-16 h-16 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 overflow-hidden shrink-0">
              <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBkrVLxMeMAZwEHcfnkrChcd3IwT9mC4VLcGd2mBfPPZy54szWRkBGTG9wcqyNXkHBe1I0XObEgNmZx8P0jj-y8nO5TI8uyaHGiyRMUSQwjRtf56BXHkWFAe_lKY91ITFWe5SBEHLEEIjJFp53lvltd26ZLb3Pbx00UV7bARqUVn_duFoCjvHyxLYR1LebVm3zD80yntjSO5-OJOwL05UzdpYCGJ_ZAVuG-7mmVsKtv7onmppqr_EBj7BrSiQGI9h8MHYjH8p39UA')"}}></div>
            </div>
          </div>
          <div className="mt-5 pt-4 border-t border-slate-50 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[18px] fill-1">verified</span>
            <p className="text-xs font-medium text-gray-500">爱心包裹正由慧爱家绿色通道优先配送</p>
          </div>
        </div>
      </div>

      <div className="px-6 py-4">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-base font-bold text-slate-900">包裹动态</h3>
          <span className="text-xs font-medium text-primary bg-primary/5 px-2 py-1 rounded">预计明日 18:00 前送达</span>
        </div>
        <div className="space-y-0">
          {[
            { status: '运输中', time: '今天 14:20', active: true, desc: '您的爱心包裹已到达 [上海嘉定分拨中心]，正准备发往目的地。', icon: 'local_shipping' },
            { status: '已揽收', time: '今天 09:15', active: false, desc: '包裹已由快递员揽收，即将开启温暖旅程。', icon: 'package_2' },
            { status: '出库中', time: '昨天 21:00', active: false, desc: '慧爱家仓库已完成爱心包裹打包，贴上您的专属寄语标签。', icon: 'inventory' }
          ].map((step, i) => (
            <div key={i} className="relative flex gap-4 pb-10">
              <div className="relative flex flex-col items-center shrink-0 w-8">
                <div className={`z-10 rounded-full w-8 h-8 flex items-center justify-center ${step.active ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-slate-100 text-gray-500 border-2 border-white'}`}>
                  <span className={`material-symbols-outlined text-[18px] ${step.active ? 'fill-1' : ''}`}>{step.icon}</span>
                </div>
                {i < 2 && <div className={`absolute top-8 w-0.5 h-full ${step.active ? 'bg-primary' : 'bg-slate-100'}`}></div>}
              </div>
              <div className="flex flex-col pt-1">
                <div className="flex justify-between items-center mb-1">
                  <p className={`${step.active ? 'text-primary font-bold' : 'text-gray-500 font-semibold'} text-base`}>{step.status}</p>
                  <p className="text-gray-500 text-[11px] font-medium">{step.time}</p>
                </div>
                <p className="text-slate-800 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tracking;
