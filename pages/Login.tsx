
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white font-display min-h-screen flex flex-col max-w-[480px] mx-auto overflow-hidden">
      <div className="flex items-center p-4">
        <div onClick={() => navigate(-1)} className="text-[#181112] flex size-12 shrink-0 items-center cursor-pointer">
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center pt-12 pb-16">
        <div className="w-20 h-20 bg-primary rounded-xl flex items-center justify-center mb-4">
          <span className="material-symbols-outlined text-white text-5xl">volunteer_activism</span>
        </div>
        <h1 className="text-2xl font-bold text-[#181112] tracking-tight">慧爱家</h1>
        <p className="text-sm text-gray-500 mt-1">智慧公益 · 爱传万家</p>
      </div>
      <div className="px-6 space-y-4">
        <div className="flex flex-col w-full">
          <p className="text-[#181112] text-sm font-semibold leading-normal pb-2">手机号</p>
          <input className="form-input w-full rounded-lg border border-gray-200 h-14 p-[15px] focus:ring-primary focus:border-primary" placeholder="请输入手机号" type="tel" />
        </div>
        <div className="flex flex-col w-full">
          <p className="text-[#181112] text-sm font-semibold leading-normal pb-2">验证码</p>
          <div className="flex items-stretch rounded-lg border border-gray-200 overflow-hidden focus-within:border-primary">
            <input className="flex-1 border-none h-14 p-[15px] focus:ring-0" placeholder="请输入验证码" type="number" />
            <button className="text-primary font-bold text-sm px-4 whitespace-nowrap">获取验证码</button>
          </div>
        </div>
      </div>
      <div className="px-6 py-8">
        <button onClick={() => navigate('/home')} className="w-full h-14 bg-primary text-white rounded-lg font-bold">登录 / 注册</button>
      </div>
      <div className="mt-auto pb-12">
        <div className="flex items-center w-full px-6 mb-6">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="px-4 text-xs text-gray-400 font-medium">第三方账号登录</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>
        <div className="flex justify-center">
          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer">
            <svg className="w-7 h-7" fill="#07C160" viewBox="0 0 24 24">
              <path d="M12 3C6.477 3 2 6.806 2 11.5c0 2.54 1.304 4.814 3.394 6.368L4.35 21l3.525-1.763c.692.176 1.417.263 2.125.263 5.523 0 10-3.806 10-8.5S17.523 3 12 3z"></path>
            </svg>
          </div>
        </div>
        <div className="flex items-start justify-center px-8 mt-10 gap-2">
          <input className="mt-1 rounded border-gray-300 text-primary" id="agreement" type="checkbox" />
          <label className="text-xs text-gray-500 leading-relaxed text-center" htmlFor="agreement">
            我已阅读并同意 <a className="text-primary font-medium" href="#">《用户协议》</a>、<a className="text-primary font-medium" href="#">《隐私政策》</a>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Login;
