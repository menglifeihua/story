
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f7f5f2] min-h-screen flex flex-col max-w-[480px] mx-auto">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between">
        <div onClick={() => navigate(-1)} className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors"><span className="material-symbols-outlined">arrow_back_ios_new</span></div>
        <h1 className="text-lg font-bold tracking-tight">确认订单</h1>
        <div className="w-10"></div>
      </header>

      <main className="flex-1 overflow-y-auto pb-32 p-4 space-y-6">
        <div className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-4 cursor-pointer">
          <div className="bg-primary/10 text-primary p-3 rounded-lg"><span className="material-symbols-outlined">location_on</span></div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-bold text-base">张晓明</span>
              <span className="text-sm text-gray-500">138****8888</span>
              <span className="text-[10px] px-1.5 py-0.5 bg-primary text-white rounded font-medium">默认</span>
            </div>
            <p className="text-sm text-gray-600 leading-snug">上海市徐汇区虹漕路448号腾讯大厦B座12层</p>
          </div>
          <span className="material-symbols-outlined text-gray-400">chevron_right</span>
        </div>

        <div className="bg-white rounded-xl overflow-hidden shadow-sm">
          <div className="p-4 flex gap-4 border-b border-gray-50">
            <div className="w-24 h-24 bg-gray-100 rounded-lg bg-cover bg-center shrink-0" style={{backgroundImage: "url('/checkout_item.png')"}}></div>
            <div className="flex-1 flex flex-col justify-between py-0.5">
              <div>
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-sm leading-tight">爱心义卖定制款T恤</h4>
                  <span className="text-sm font-medium">¥99.00</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">白色 / L码</p>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-primary font-medium border border-primary/30 px-1.5 py-0.5 rounded">慧爱家自营</span>
                <span className="text-xs text-gray-400">x 1</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm flex items-center justify-between border-l-4 border-primary">
          <div className="flex-1 pr-4">
            <div className="flex items-center gap-2 mb-0.5">
              <span className="material-symbols-outlined text-primary text-lg">workspace_premium</span>
              <h4 className="font-bold text-sm">电子捐赠证书</h4>
            </div>
            <p className="text-xs text-gray-500">您的这笔订单将为偏远地区儿童提供一份午餐。</p>
          </div>
          <div className="w-11 h-6 bg-primary rounded-full relative"><div className="absolute right-1 top-1 bg-white w-4 h-4 rounded-full"></div></div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm space-y-3">
          <div className="flex justify-between text-sm"><span className="text-gray-500">商品总额</span><span className="font-medium">¥138.00</span></div>
          <div className="flex justify-between text-sm"><span className="text-gray-500">运费</span><span className="font-medium">¥0.00</span></div>
          <div className="pt-3 border-t border-gray-50 flex justify-between items-center"><span className="font-bold text-sm">应付总额</span><span className="text-lg font-bold text-primary">¥138.00</span></div>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 pb-8 flex items-center justify-between z-50">
        <div className="flex flex-col">
          <span className="text-[10px] text-gray-400 font-medium uppercase">合计金额</span>
          <div className="flex items-baseline gap-0.5"><span className="text-xs text-primary font-bold">¥</span><span className="text-2xl font-bold text-primary">138.00</span></div>
        </div>
        <button onClick={() => navigate('/payment-success')} className="bg-primary text-white px-10 py-3.5 rounded-xl font-bold">确认支付</button>
      </footer>
    </div>
  );
};

export default Checkout;
