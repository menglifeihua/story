
import React from 'react';
import { useNavigate } from 'react-router-dom';

const PointsCenter: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen pb-24 max-w-[480px] mx-auto">
      <header className="sticky top-0 z-50 flex items-center bg-white/90 backdrop-blur-md p-4 justify-between border-b border-gray-100">
        <div onClick={() => navigate(-1)} className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer">
          <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
        </div>
        <h1 className="text-lg font-bold flex-1 text-center font-display">兑换中心</h1>
        <div className="flex w-10 items-center justify-end">
          <button className="flex size-10 items-center justify-center rounded-full hover:bg-gray-100">
            <span className="material-symbols-outlined text-2xl text-primary">help_outline</span>
          </button>
        </div>
      </header>

      <div className="p-4 pt-6">
        <div className="bg-primary rounded-xl overflow-hidden shadow-lg relative h-44 flex flex-col justify-between p-6" style={{background: 'linear-gradient(135deg, rgba(142,1,27,1) 0%, rgba(180,30,50,0.9) 100%)'}}>
          <div className="absolute top-0 right-0 p-4 opacity-20">
            <span className="material-symbols-outlined text-[100px] leading-none">volunteer_activism</span>
          </div>
          <div className="relative z-10 flex flex-col text-white">
            <p className="text-white/80 text-xs font-medium tracking-[0.2em] uppercase">My Love Points</p>
            <p className="text-4xl font-bold mt-1 tracking-tight">2,850</p>
            <p className="text-white/90 text-sm font-medium mt-1">我的爱心值</p>
          </div>
          <div className="relative z-10 flex items-center justify-between mt-auto">
            <div className="flex items-center gap-1 text-white/80 text-xs">
              <span className="material-symbols-outlined text-sm">trending_up</span>
              <span>今日已获得 +20</span>
            </div>
            <button className="bg-white text-primary px-4 py-2 rounded-lg text-xs font-bold shadow-md">
              获取更多积分
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-4 mt-6">
        <h3 className="text-[#181012] text-lg font-bold">精选好物</h3>
        <span className="text-primary text-xs font-semibold">查看全部</span>
      </div>

      <div className="flex overflow-x-auto no-scrollbar mt-4 px-4 gap-4">
        {[
          { name: '慧爱家环保帆布袋', points: '500', stock: '12', img: '/eco_bag.png' },
          { name: '品牌联名定制雨伞', points: '1,200', stock: '45', img: '/umbrella.png' }
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col w-[260px] flex-shrink-0 group">
            <div className="w-full aspect-[4/3] bg-gray-50 rounded-xl overflow-hidden relative">
              <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              {idx === 0 && (
                <div className="absolute top-3 left-3">
                  <span className="bg-primary text-white text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-wider">Limited</span>
                </div>
              )}
            </div>
            <div className="py-3">
              <p className="text-[#181012] text-base font-bold">{item.name}</p>
              <div className="flex items-center justify-between mt-1">
                <p className="text-primary text-sm font-bold">{item.points} <span className="text-[10px] font-normal opacity-70">积分</span></p>
                <span className="text-gray-400 text-xs">库存 {item.stock}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PointsCenter;
