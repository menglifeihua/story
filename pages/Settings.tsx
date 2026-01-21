
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Settings: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f7f8f9] min-h-screen max-w-[480px] mx-auto">
      <header className="sticky top-0 z-50 bg-white px-4 py-4 flex items-center border-b border-gray-100">
        <button onClick={() => navigate(-1)} className="material-symbols-outlined text-primary p-2">arrow_back_ios_new</button>
        <h1 className="flex-1 text-center text-lg font-bold pr-10">设置</h1>
      </header>

      <main className="p-4 space-y-4">
        <section className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between cursor-pointer active:bg-gray-50 transition-colors">
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-full bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuATEAlPFn3Z7BcGn3NWcBtlrNjoR0I5-SCTWGhuRn_vVorbDlmJop0EXJI2K2UEGycC3l8ZbrgD8DKSOKQu8Oh-PtNbOTg3jI5BQ3j2pk4xUtmTjWjK-TrjoIIgFdGK_MR6VfpUdOlIbxIE9M4-p08lzBJ6YJoRakpSyiLzSeUqQ9I4frkeARJmTd-u4ygmszXcEIspfZY5f_6N3MTOGQIcncjUrksHBBLyTDmA5tgXmiRN7PQcteD0mwy_H3NXjiUcXOa2Xb-AcQ')"}}></div>
            <div>
              <p className="font-bold text-gray-900">个人主页设置</p>
              <p className="text-xs text-gray-400">修改头像、昵称、寄语</p>
            </div>
          </div>
          <span className="material-symbols-outlined text-gray-300">chevron_right</span>
        </section>

        <section className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 divide-y divide-gray-50">
          {[
            { label: '账户与安全', icon: 'shield_person' },
            { label: '隐私设置', icon: 'lock' },
            { label: '通知提醒', icon: 'notifications' },
            { label: '多语言', icon: 'translate', sub: '简体中文' }
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-4 cursor-pointer active:bg-gray-50 transition-colors">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-gray-400">{item.icon}</span>
                <span className="text-[14px] font-medium text-gray-700">{item.label}</span>
              </div>
              <div className="flex items-center gap-2">
                {item.sub && <span className="text-xs text-gray-400">{item.sub}</span>}
                <span className="material-symbols-outlined text-gray-300">chevron_right</span>
              </div>
            </div>
          ))}
        </section>

        <section className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 divide-y divide-gray-50">
          {[
            { label: '清除缓存', sub: '124 MB' },
            { label: '用户协议' },
            { label: '隐私政策' },
            { label: '关于慧爱家', sub: 'v1.2.4', path: '/about' }
          ].map((item, i) => (
            <div key={i} onClick={() => item.path && navigate(item.path)} className="flex items-center justify-between p-4 cursor-pointer active:bg-gray-50 transition-colors text-[14px] font-medium text-gray-700">
              <span>{item.label}</span>
              <div className="flex items-center gap-2">
                {item.sub && <span className="text-xs text-gray-400">{item.sub}</span>}
                <span className="material-symbols-outlined text-gray-300">chevron_right</span>
              </div>
            </div>
          ))}
        </section>

        <div className="pt-10">
          <button onClick={() => navigate('/login')} className="w-full py-4 bg-white text-primary border border-primary/10 rounded-2xl font-bold shadow-sm active:bg-gray-50 transition-colors">
            切换账号
          </button>
        </div>
      </main>
    </div>
  );
};

export default Settings;
