
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddressList: React.FC = () => {
  const navigate = useNavigate();
  const addresses = [
    { name: '张晓明', phone: '138****8888', city: '上海市徐汇区', detail: '虹漕路448号腾讯大厦B座12层', isDefault: true },
    { name: '王小红', phone: '139****1234', city: '北京市朝阳区', detail: '建国门外大街1号国贸三期', isDefault: false },
  ];

  return (
    <div className="bg-[#f7f8f9] min-h-screen pb-24 max-w-[480px] mx-auto">
      <header className="sticky top-0 z-50 bg-white px-4 py-4 flex items-center border-b border-gray-100">
        <button onClick={() => navigate(-1)} className="material-symbols-outlined text-primary p-2">arrow_back_ios_new</button>
        <h1 className="flex-1 text-center text-lg font-bold pr-10">地址管理</h1>
      </header>
      
      <main className="p-4 space-y-4">
        {addresses.map((addr, idx) => (
          <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 relative group">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-base font-bold text-gray-900">{addr.name}</span>
              <span className="text-sm text-gray-500">{addr.phone}</span>
              {addr.isDefault && <span className="bg-primary/10 text-primary text-[10px] px-1.5 py-0.5 rounded font-bold">默认</span>}
            </div>
            <p className="text-sm text-gray-600 leading-snug">{addr.city}{addr.detail}</p>
            <div className="mt-4 pt-3 border-t border-gray-50 flex justify-end gap-4">
              <button className="text-xs text-gray-500 flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">edit</span>编辑</button>
              <button className="text-xs text-gray-500 flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">delete</span>删除</button>
            </div>
          </div>
        ))}
      </main>

      <div className="fixed bottom-0 left-0 right-0 p-4 max-w-[480px] mx-auto bg-white/80 backdrop-blur-md">
        <button className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20">+ 添加新地址</button>
      </div>
    </div>
  );
};

export default AddressList;
