
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f7f7f7] min-h-screen pb-24">
      <div className="bg-gradient-to-b from-[#c3223d] to-[#b01e35] pt-12 pb-8 px-5 rounded-b-[2.5rem] shadow-md relative z-10">
        <div className="flex justify-between items-center mb-6 text-white">
          <button onClick={() => navigate('/home')} className="material-symbols-outlined p-2 hover:bg-white/10 rounded-full transition-colors">arrow_back_ios_new</button>
          <div className="flex gap-1">
            <button className="material-symbols-outlined p-2 hover:bg-white/10 rounded-full transition-colors">chat_bubble</button>
            <button onClick={() => navigate('/settings')} className="material-symbols-outlined p-2 hover:bg-white/10 rounded-full transition-colors">settings</button>
          </div>
        </div>
        <div 
          onClick={() => navigate('/settings')}
          className="flex items-center gap-4 cursor-pointer active:opacity-90 transition-opacity"
        >
          <div className="relative">
            <div className="size-16 rounded-full border-2 border-white/60 bg-center bg-cover shadow-inner" style={{backgroundImage: `url("/avatar1.png")`}}></div>
            <div className="absolute -bottom-0.5 -right-0.5 bg-white rounded-full p-0.5 shadow-sm">
              <span className="material-symbols-outlined text-primary text-[12px] font-bold">verified</span>
            </div>
          </div>
          <div className="flex flex-col text-white">
            <h1 className="text-xl font-bold tracking-tight">Alice Zhang</h1>
            <div className="flex items-center mt-1.5 bg-white/20 backdrop-blur-sm px-3 py-0.5 rounded-full w-fit">
              <span className="material-symbols-outlined text-white text-[14px] mr-1.5">favorite</span>
              <span className="text-white text-[11px] font-semibold tracking-wide">爱心守护者 LV.4</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 mt-4">
        <div 
          onClick={() => navigate('/member-center')}
          className="bg-white rounded-2xl p-4 shadow-[0_4px_15px_rgba(195,34,61,0.06)] flex items-center justify-between border border-primary/10 cursor-pointer active:scale-98 transition-transform"
        >
          <div className="flex items-center gap-3">
            <div className="bg-primary/5 p-2.5 rounded-xl"><span className="material-symbols-outlined text-primary text-2xl">workspace_premium</span></div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] text-primary font-black tracking-widest">HUI AI JIA</span>
                <span className="h-2 w-px bg-gray-200"></span>
                <h2 className="text-[15px] font-bold text-gray-900">会员中心</h2>
              </div>
              <p className="text-[11px] text-gray-400 mt-0.5">解锁专属公益权益</p>
            </div>
          </div>
          <button className="bg-primary text-white text-[12px] font-bold px-4 py-1.5 rounded-full shadow-sm">立即查看</button>
        </div>
      </div>

      <div className="mt-6 px-4">
        <div className="flex items-center justify-between mb-3 px-1">
          <h3 className="text-[16px] font-bold text-gray-900">我的订单</h3>
          <button onClick={() => navigate('/order-list')} className="flex items-center text-gray-400 text-[12px] font-medium cursor-pointer">
            查看全部 <span className="material-symbols-outlined text-[16px] ml-0.5">chevron_right</span>
          </button>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm flex justify-between items-center text-center">
          {[
            { icon: 'account_balance_wallet', label: '待付款' },
            { icon: 'package_2', label: '待收货' },
            { icon: 'local_shipping', label: '待评价' },
            { icon: 'support_agent', label: '售后' },
          ].map((item, idx) => (
            <div key={idx} onClick={() => navigate('/order-list')} className="flex flex-col items-center flex-1 cursor-pointer active:scale-95 transition-transform group">
              <div className="mb-2 text-primary group-hover:scale-110 transition-transform"><span className="material-symbols-outlined text-[28px]">{item.icon}</span></div>
              <p className="text-[12px] font-medium text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 px-4">
        <h3 className="text-[16px] font-bold mb-3 px-1 text-gray-900">我的公益</h3>
        <div className="grid grid-cols-2 gap-3.5">
          <div 
            onClick={() => navigate('/charity-report')}
            className="bg-white rounded-2xl p-4 shadow-sm border-l-4 border-primary cursor-pointer active:scale-95 transition-transform"
          >
            <p className="text-[11px] text-gray-500 mb-0.5">累计捐赠</p>
            <div className="flex items-baseline gap-0.5"><span className="text-primary font-extrabold text-xl">¥1,250</span><span className="text-[10px] text-gray-400">.00</span></div>
          </div>
          <div 
            onClick={() => navigate('/charity-report')}
            className="bg-white rounded-2xl p-4 shadow-sm border-l-4 border-primary/40 cursor-pointer active:scale-95 transition-transform"
          >
            <p className="text-[11px] text-gray-500 mb-0.5">影响力</p>
            <div className="flex items-baseline gap-0.5"><span className="text-primary font-extrabold text-xl">124</span><span className="text-[10px] text-gray-400">天</span></div>
          </div>
        </div>
        <div 
          onClick={() => navigate('/certificate')}
          className="mt-3.5 bg-white rounded-2xl p-4 shadow-sm flex items-center justify-between cursor-pointer active:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="bg-primary/5 p-1.5 rounded-full"><span className="material-symbols-outlined text-primary text-xl">card_membership</span></div>
            <div>
              <p className="text-[14px] font-bold text-gray-900">公益荣誉证书</p>
              <p className="text-[11px] text-gray-400">已获得 12 份爱心见证</p>
            </div>
          </div>
          <div className="flex -space-x-2.5">
            <div className="size-8 rounded-full border-2 border-white bg-gray-200 bg-cover shadow-sm" style={{backgroundImage: `url("/avatar2.png")`}}></div>
            <div className="size-8 rounded-full border-2 border-white bg-primary text-white flex items-center justify-center text-[10px] font-bold shadow-sm">+10</div>
          </div>
        </div>
      </div>

      <div className="mt-6 px-4">
        <h3 className="text-[16px] font-bold mb-3 px-1 text-gray-900">常用工具</h3>
        <div className="bg-white rounded-2xl divide-y divide-gray-50 shadow-sm overflow-hidden border border-gray-50">
          {[
            { label: '地址管理', icon: 'location_on', path: '/addresses' },
            { label: '我的奖券', icon: 'redeem', path: '/coupons' },
            { label: '义卖活动', icon: 'volunteer_activism', path: '/events' },
            { label: '积分兑换', icon: 'storefront', path: '/points' },
            { label: '关于慧爱家', icon: 'info', path: '/about' },
          ].map((tool, idx) => (
            <div key={idx} onClick={() => tool.path && navigate(tool.path)} className="flex items-center justify-between p-4 cursor-pointer active:bg-gray-50 transition-colors">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary text-2xl">{tool.icon}</span>
                <span className="text-[14px] font-medium text-gray-700">{tool.label}</span>
              </div>
              <span className="material-symbols-outlined text-gray-300 text-xl">chevron_right</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 px-4 text-center">
        <button onClick={() => navigate('/login')} className="w-full py-3.5 bg-white border border-gray-100 rounded-2xl text-primary text-[15px] font-semibold shadow-sm active:bg-gray-50 transition-colors">
          退出当前账号
        </button>
        <p className="mt-4 text-[10px] text-gray-300 tracking-[0.15em] uppercase font-medium">Version 1.2.4 (Build 2023)</p>
      </div>
    </div>
  );
};

export default Profile;
