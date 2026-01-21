
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Review: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f8f5f6] font-display min-h-screen flex flex-col max-w-[480px] mx-auto pb-24">
      <div className="sticky top-0 z-50 flex items-center bg-white/90 backdrop-blur-md px-4 py-4 justify-between border-b border-gray-100">
        <div onClick={() => navigate(-1)} className="text-[#181012] flex size-10 shrink-0 items-center justify-center cursor-pointer"><span className="material-symbols-outlined">arrow_back_ios</span></div>
        <h2 className="text-[#181012] text-lg font-bold flex-1 text-center pr-10">发表评价</h2>
      </div>
      
      <main className="flex flex-col gap-4 p-4 mt-2">
        <div className="bg-white rounded-xl shadow-sm p-4 flex flex-col gap-4">
          <div className="flex items-center gap-4 py-2">
            <div className="bg-center bg-cover rounded-lg size-16 shrink-0" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuASLz3-ROUL4LQnDDGHpaOjLsVaBdjoGtgYrswpdE4KfwqbiPUjEj2_2KQJ34cuu4kuwvWqEaArjAuTc7JkqeE3qaXnZ54Wx7ntMZHyWhUTh79yyYTbBNTQQFY4j7_plcC_vu-FEIT18slELyQbnSS3xHbnUGGthxoQi2rotMJuxT7_PlbPh8WPWL9hm9cb5Mz9l5FSXIC1wFJhirmSwhUOTGZdN9COcIM7thVhT2SDcka23rzlqwTeCY2xM_CDCN4J1o1DghiWJA')"}}></div>
            <div className="flex flex-col justify-center">
              <p className="text-[#181012] text-base font-bold line-clamp-1">爱心助农：红富士苹果 5kg</p>
              <p className="text-primary text-sm font-medium">规格：精品礼盒装</p>
            </div>
          </div>
          <div className="h-px bg-gray-100 w-full"></div>
          <div className="flex flex-col gap-2">
            <h3 className="text-[#181012] text-base font-bold">总体评价</h3>
            <div className="flex items-center gap-4 py-2">
              <div className="flex gap-2">
                {[1, 2, 3, 4].map(i => <span key={i} className="material-symbols-outlined text-primary fill-1" style={{fontSize: '32px'}}>favorite</span>)}
                <span className="material-symbols-outlined text-primary/30" style={{fontSize: '32px'}}>favorite</span>
              </div>
              <span className="text-primary font-bold">非常满意</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[#181012] text-sm font-medium pb-2">评价心得</p>
            <textarea className="form-input w-full rounded-lg border border-[#e7dadd] bg-[#f8f5f6] min-h-32 p-4 text-base focus:ring-primary focus:border-primary" placeholder="分享您的使用心得，您的评价对其他用户非常有帮助..."></textarea>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[#181012] text-sm font-medium">添加图片 (最多6张)</p>
            <div className="flex flex-wrap gap-3">
              <div className="size-24 border-2 border-dashed border-primary/20 bg-primary/[0.02] rounded-lg flex flex-col items-center justify-center cursor-pointer">
                <span className="material-symbols-outlined text-primary" style={{fontSize: '28px'}}>add_a_photo</span>
                <span className="text-primary text-[10px] mt-1 font-bold">上传照片</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] p-4 bg-white/80 backdrop-blur-lg border-t border-gray-100">
        <button onClick={() => navigate('/home')} className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg">提交评价</button>
      </div>
    </div>
  );
};

export default Review;
