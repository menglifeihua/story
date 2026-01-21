
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([
    { id: 1, name: '特选爱心大米 5kg', price: 88, spec: '5kg/袋', qty: 1, checked: true, img: '/rice.png' },
    { id: 2, name: '手工编织竹篮', price: 45, spec: '颜色: 原木色', qty: 2, checked: true, img: '/basket.png' }
  ]);

  const toggleCheck = (id: number) => {
    setItems(items.map(item => item.id === id ? { ...item, checked: !item.checked } : item));
  };

  const total = items.reduce((sum, item) => item.checked ? sum + item.price * item.qty : sum, 0);

  return (
    <div className="bg-[#fcfcfc] font-display min-h-screen flex flex-col max-w-[480px] mx-auto">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 p-4 flex justify-between">
        <div className="w-12"></div>
        <h1 className="text-lg font-bold flex-1 text-center">购物车</h1>
        <div className="flex w-12 items-center justify-end"><button className="text-primary text-sm font-semibold">编辑</button></div>
      </header>

      <main className="flex-1 px-4 py-6 space-y-4">
        {items.map(item => (
          <div key={item.id} className="bg-white rounded-2xl p-4 flex gap-4 border border-gray-50 shadow-sm">
            <div className="flex items-center justify-center shrink-0">
              <input checked={item.checked} onChange={() => toggleCheck(item.id)} className="h-6 w-6 rounded-full border-gray-200 border-2 text-primary focus:ring-0" type="checkbox" />
            </div>
            <div className="relative w-24 h-24 bg-gray-50 rounded-xl overflow-hidden shrink-0">
              <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col justify-between flex-1 py-1">
              <div>
                <h3 className="text-base font-bold leading-snug">{item.name}</h3>
                <p className="text-gray-400 text-xs mt-1">规格: {item.spec}</p>
              </div>
              <div className="flex items-end justify-between">
                <p className="text-primary text-lg font-bold">¥{item.price.toFixed(2)}</p>
                <div className="flex items-center gap-3 bg-gray-50 px-2 py-1 rounded-full border border-gray-100">
                  <button className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm">-</button>
                  <span className="text-sm font-bold w-4 text-center">{item.qty}</span>
                  <button className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm">+</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>

      <section className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-white/95 backdrop-blur-md border-t border-gray-100 p-4 pb-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <input checked className="h-5 w-5 rounded-full border-gray-200 text-primary" type="checkbox" />
          <label className="text-sm text-gray-500 font-medium">全选</label>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">合计</p>
            <p className="text-primary text-xl font-bold">¥{total.toFixed(2)}</p>
          </div>
          <button onClick={() => navigate('/checkout')} className="bg-primary text-white font-bold py-3 px-10 rounded-full shadow-lg">去结算 ({items.length})</button>
        </div>
      </section>
    </div>
  );
};

export default Cart;
