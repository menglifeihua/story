
import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentSuccess: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen flex flex-col max-w-[480px] mx-auto overflow-hidden relative">
      <div className="flex items-center p-4 justify-between relative z-10">
        <div onClick={() => navigate('/home')} className="text-primary flex size-12 shrink-0 items-center justify-start cursor-pointer">
          <span className="material-symbols-outlined text-2xl">close</span>
        </div>
        <h2 className="text-primary text-lg font-bold flex-1 text-center pr-12">慧爱家</h2>
      </div>

      <div className="flex flex-col items-center pt-10 pb-6 gap-5 relative z-10">
        <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-xl shadow-primary/20">
          <span className="material-symbols-outlined text-white text-5xl fill-1">check</span>
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-black text-primary mb-2 font-serif">支付成功</h1>
          <p className="text-primary/70 text-sm font-medium">感谢您的每一份爱心，让温暖传递</p>
        </div>
      </div>

      <div className="px-6 py-4 relative z-10">
        <div className="flex flex-col rounded-2xl overflow-hidden bg-white shadow-xl border border-primary/5">
          <div className="w-full aspect-[4/3] bg-cover bg-center relative" style={{backgroundImage: `url("/book.png")`}}>
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              <span className="bg-primary px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">爱心见证</span>
            </div>
          </div>
          <div className="p-6 space-y-5">
            <div className="space-y-1">
              <p className="text-primary text-xl font-bold font-serif">您的贡献已送达</p>
              <p className="text-primary/80 text-base font-medium">您的善举为1名孩子提供了整学期的文具套装</p>
            </div>
            <div className="h-[1px] bg-primary/10 w-full"></div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-primary/40 text-[10px] uppercase font-bold">爱心编号</p>
                <p className="text-primary text-sm font-bold">HUAJ-2024-0521-008</p>
              </div>
              <button className="flex items-center gap-2 rounded-full h-9 px-4 bg-primary/5 border border-primary/10 text-primary text-sm font-bold"><span className="material-symbols-outlined text-sm">share</span>分享荣誉</button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 pb-8 relative z-10">
        <div className="flex justify-between items-center rounded-2xl p-5 border border-primary/10 bg-primary/[0.02]">
          <p className="text-primary/60 text-sm font-bold">支付总额</p>
          <p className="text-primary tracking-tight text-3xl font-black font-serif">¥199.00</p>
        </div>
      </div>

      <div className="flex-grow"></div>
      <div className="px-6 py-8 relative z-10 space-y-4">
        <button onClick={() => navigate('/home')} className="w-full h-16 bg-primary text-white rounded-2xl font-bold text-lg shadow-lg shadow-primary/30">返回首页</button>
        <button onClick={() => navigate('/order-list')} className="w-full h-16 bg-transparent border-2 border-primary text-primary rounded-2xl font-bold text-lg">查看订单</button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
