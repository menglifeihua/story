
import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderList: React.FC = () => {
  const navigate = useNavigate();
  const orders = [
    { id: '202310248892', name: '慧爱定制保温杯: 益路同行', status: '待收货', price: '59.00', spec: '烈焰红, 500ml', qty: '1', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-GtIc4Yr2Mq1_BBNQyu0BDdofuA30YvXs2VsOJefoSUqWNqg8S0px2tdK4ajvaA-UuEpH4D3UUVy2NLCmpKXv_Ntt7kdQsiloHxNXHHZpJFbfa4QMIw4Kjv8ftgPNSwsTzZBHdvOe4J44ReIVX62n_YSfife3ub0tR_lHRzzeTYCe_UrMfXeQl0XM0vTIwvlXlAygWOZgI1tnyrCmj3UEquEFd1nyyxTicj1mDD23l4ynB6MpSTRHzOb_0hStxPcaJOf4HKKNVQ' },
    { id: '202310247751', name: '大凉山助农苹果: 脆甜多汁', status: '运输中', price: '45.00', spec: '家庭分享装 (5kg)', qty: '1', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAYPFse4H03Q4sFMxVmlvsB8e7MFjbrmtZ9kWsRrUZSVdF7ID8gf5xutdpdzhI8NtuX8KxBv7IRieqT8_282yFkmgrRBI6Hg0Bb_92nyD8BpXvwJVRcyeer_JTcavpZWBq5psnag8kOy7Z-kmOZu_Ul_VRSeSgHT0oWe74Yudc074zKxzz1UPojl4v6WrnZXdwT7A9XYj4ydH_fTaQkVe8t7fE6sh0dzxvjwwNloNe-i6qbEtJpI5dqlgkErBd98Bggf1or68qYw' }
  ];

  return (
    <div className="bg-[#f3f5f7] min-h-screen pb-10 max-w-[480px] mx-auto">
      <header className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="flex items-center p-4 justify-between">
          <div onClick={() => navigate(-1)} className="text-[#181012] flex size-10 shrink-0 items-center justify-start cursor-pointer"><span className="material-symbols-outlined">arrow_back_ios</span></div>
          <h2 className="text-[#181012] text-lg font-bold flex-1 text-center">我的订单</h2>
          <div className="w-10 flex justify-end"><span className="material-symbols-outlined">search</span></div>
        </div>
        <nav className="flex overflow-x-auto no-scrollbar justify-between px-2">
          {['全部', '待付款', '待发货', '待收货', '已评价'].map((tab, i) => (
            <a key={i} className={`pb-3 pt-4 px-3 whitespace-nowrap text-sm font-bold ${tab === '待收货' ? 'border-b-[3px] border-b-primary text-primary' : 'text-gray-500'}`} href="#">{tab}</a>
          ))}
        </nav>
      </header>

      <main className="pt-4 px-4 space-y-4">
        {orders.map((order, idx) => (
          <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
            <div className="p-4 border-b border-gray-50 flex justify-between items-center">
              <span className="text-xs text-gray-400 font-medium">订单号: {order.id}</span>
              <span className="text-sm text-primary font-bold">{order.status}</span>
            </div>
            <div className="p-4 flex gap-4">
              <div className="w-24 h-24 flex-shrink-0 bg-gray-100 rounded-lg bg-center bg-cover" style={{backgroundImage: `url("${order.img}")`}}></div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[#181012] text-base font-bold truncate leading-tight mb-1">{order.name}</h3>
                <p className="text-gray-500 text-xs mb-1">规格: {order.spec}</p>
                <p className="text-gray-500 text-xs mb-2">数量: x{order.qty}</p>
                <div className="flex justify-end items-baseline gap-1">
                  <span className="text-xs text-gray-500">实付:</span>
                  <span className="text-lg font-bold text-[#181012]">¥{order.price}</span>
                </div>
              </div>
            </div>
            <div className="p-4 bg-gray-50/50 flex justify-end gap-3">
              <button onClick={() => navigate('/tracking')} className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-sm font-bold text-gray-700">查看物流</button>
              <button onClick={() => navigate('/review')} className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-bold">确认收货</button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default OrderList;
