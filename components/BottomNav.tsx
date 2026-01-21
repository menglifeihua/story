
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const BottomNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: '首页', icon: 'home', path: '/home' },
    { label: '社区', icon: 'group_work', path: '/community' },
    { label: '商城', icon: 'shopping_bag', path: '/shop' },
    { label: '我的', icon: 'person', path: '/profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-white/95 dark:bg-[#1a0b0e] border-t border-gray-100 dark:border-white/10 px-6 py-2 pb-6 flex justify-between items-center z-[100] backdrop-blur-xl">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <div
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${
              isActive ? 'text-primary' : 'text-brand-gray'
            }`}
          >
            <span className={`material-symbols-outlined text-[26px] ${isActive ? 'fill-1' : ''}`}>
              {item.icon}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest">{item.label}</span>
          </div>
        );
      })}
    </nav>
  );
};

export default BottomNav;
