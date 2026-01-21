
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Events: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#fcfcfc] min-h-screen pb-24 max-w-[480px] mx-auto">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md px-4 py-4 flex items-center border-b border-gray-100">
        <button onClick={() => navigate(-1)} className="material-symbols-outlined text-primary p-2">arrow_back_ios_new</button>
        <h1 className="flex-1 text-center text-lg font-bold pr-10 font-serif">义卖活动</h1>
      </header>

      <main className="p-4 space-y-6">
        {[
          {
            title: '「春芽行动」乡村小学公益义卖',
            status: '进行中',
            time: '2024-05-20 ~ 2024-06-01',
            participants: '2,482人',
            img: '/event1.png'
          },
          {
            title: '「非遗传承」手工艺人扶持计划',
            status: '即将开始',
            time: '2024-06-15 ~ 2024-07-01',
            participants: '1,024人预约',
            img: '/bamboo_basket.png'
          }
        ].map((ev, i) => (
          <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group cursor-pointer" onClick={() => navigate('/project-detail')}>
            <div className="relative aspect-[16/9] w-full bg-gray-100">
              <img src={ev.img} alt={ev.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-widest ${ev.status === '进行中' ? 'bg-primary' : 'bg-brand-gray'}`}>
                {ev.status}
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-serif font-bold text-lg mb-2 text-gray-900 leading-tight">{ev.title}</h3>
              <div className="flex items-center gap-4 text-[11px] text-gray-400 mb-4">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">calendar_today</span>{ev.time}</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">group</span>{ev.participants}</span>
              </div>
              <button className="w-full py-3 bg-primary/5 text-primary text-sm font-bold rounded-xl active:bg-primary active:text-white transition-colors">
                立即参与
              </button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Events;
