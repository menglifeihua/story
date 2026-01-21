
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectDetail: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative max-w-md mx-auto min-h-screen bg-[#f7f6f7] pb-32">
      <nav className="sticky top-0 z-50 flex items-center justify-between p-4 bg-[#f7f6f7]/80 backdrop-blur-md">
        <span onClick={() => navigate(-1)} className="material-symbols-outlined cursor-pointer">arrow_back_ios</span>
        <h2 className="font-serif text-lg font-bold">项目详情</h2>
        <span className="material-symbols-outlined cursor-pointer">share</span>
      </nav>

      <div className="px-4 py-2">
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDBQpmdM61tcTKZiB64z4NEhNjRMNe1XFuwh1hmH5wah6mDd7e4DZbxxFYBMycDRsMul2Y1obp7CKpRUsrQRFIJSe_AVCvFBIOdqwxdi0Nmx_wUFJ0WqEDhpa70FCLQu73Awhsu1syYDunee-kHM9FC98BD5DXItiGYTpZoL3LAMIDBQXWkaoa9C35l9xT7tN17yYhuxsQ1m6x0_9qBLBv-haAmZmWwq1I5SjoECwKZPRVS3v99RcqKHNkbpcnBBsAVBXFpzTQcBg")`}}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4">
            <span className="inline-block px-2 py-1 bg-primary text-white text-xs font-bold rounded mb-2 uppercase tracking-wider">正在筹款</span>
            <h1 className="font-serif text-2xl font-bold text-white leading-tight">助力乡村困境儿童圆梦计划</h1>
          </div>
        </div>
      </div>

      <div className="px-4 -mt-8 relative z-10">
        <div className="bg-white p-6 rounded-xl shadow-xl border border-black/5">
          <div className="flex justify-between items-end mb-4">
            <div className="flex flex-col">
              <span className="text-xs text-[#7e6d70] mb-1">已筹集善款</span>
              <div className="flex items-baseline gap-1">
                <span className="font-serif text-2xl font-bold text-primary">¥45,000</span>
                <span className="text-xs text-[#7e6d70]">/ ¥100,000</span>
              </div>
            </div>
            <span className="text-2xl font-bold font-serif">45%</span>
          </div>
          <div className="w-full h-2.5 bg-[#e3dedf] rounded-full overflow-hidden mb-4">
            <div className="h-full bg-primary" style={{width: '45%'}}></div>
          </div>
          <div className="flex justify-between items-center pt-2 border-t border-[#e3dedf]">
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200"></div>
              ))}
              <div className="w-8 h-8 rounded-full bg-[#f0f0f0] border-2 border-white flex items-center justify-center text-[10px] font-bold">+1k</div>
            </div>
            <p className="text-xs text-[#7e6d70]">已有 1,240 位爱心人士参与</p>
          </div>
        </div>
      </div>

      <div className="mt-6 border-b border-[#e3dedf] px-4">
        <div className="flex gap-8">
          <a className="border-b-2 border-primary pb-3 text-sm font-bold text-[#161314] font-serif" href="#">项目详情</a>
          <a className="pb-3 text-sm font-bold text-[#7e6d70] font-serif" href="#">执行计划</a>
          <a className="pb-3 text-sm font-bold text-[#7e6d70] font-serif" href="#">财务公示</a>
        </div>
      </div>

      <div className="px-4 py-8">
        <h3 className="font-serif text-xl font-bold mb-4 flex items-center gap-2">
          <span className="w-1.5 h-6 bg-primary rounded-full"></span>
          项目背后的故事
        </h3>
        <div className="bg-primary/5 p-4 rounded-xl mb-6 border-l-4 border-primary italic font-serif text-primary text-base leading-relaxed">
          “我也想和城里的孩子一样，拥有一本属于自己的画册，把山里的风景都画出来。” —— 8岁的小玲
        </div>
        <p className="text-base leading-7 text-[#161314]/80 mb-6">
          在遥远的云贵山区，由于地理环境的限制和家庭经济的困难，许多像小玲这样的孩子，虽然拥有过人的天赋和梦想，却往往连基本的画笔和课外书籍都是奢求。
        </p>
        <div className="rounded-xl overflow-hidden mb-6">
          <img className="w-full" src="/child_with_paintbrush.png" alt="Child with paintbrush" />
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white p-4 shadow-[0_-8px_30px_rgb(0,0,0,0.12)] z-50 flex items-center gap-4">
        <button className="flex flex-col items-center justify-center p-2 text-[#7e6d70]">
          <span className="material-symbols-outlined">favorite</span>
          <span className="text-[10px] mt-1">收藏</span>
        </button>
        <button className="flex flex-col items-center justify-center p-2 text-[#7e6d70]">
          <span className="material-symbols-outlined">chat</span>
          <span className="text-[10px] mt-1">咨询</span>
        </button>
        <button 
          onClick={() => navigate('/checkout')}
          className="flex-1 bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-lg active:scale-95 transition-transform font-serif"
        >
          立即捐赠
        </button>
      </div>
    </div>
  );
};

export default ProjectDetail;
