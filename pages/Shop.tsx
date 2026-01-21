
import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

const Shop: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('全部');

  const products = [
    { 
      name: '爱心手工编织篮', 
      price: '45.00', 
      sold: '1.2k', 
      category: '传统手工艺',
      img: '/bamboo_basket.png' 
    },
    { 
      name: '高山有机红薯', 
      price: '29.90', 
      sold: '560', 
      category: '生鲜食品',
      img: '/rice.png' 
    },
    { 
      name: '环保布艺袋 (米白色)', 
      price: '15.00', 
      sold: '320', 
      category: '生活用品',
      img: '/eco_bag.png' 
    },
    { 
      name: '纯手工无添加草莓酱', 
      price: '38.00', 
      sold: '89', 
      category: '生鲜食品',
      img: '/book.png' 
    },
    { 
      name: '粗陶手作茶杯', 
      price: '68.00', 
      sold: '210', 
      category: '传统手工艺',
      img: '/book.png' 
    },
    { 
      name: '深山土蜂蜜 (500g)', 
      price: '128.00', 
      sold: '450', 
      category: '生鲜食品',
      img: '/honey.png' 
    }
  ];

  const filteredProducts = useMemo(() => {
    if (activeCategory === '全部') return products;
    return products.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  const categories = ['全部', '生活用品', '爱心义卖', '生鲜食品', '传统手工艺'];

  return (
    <div className="bg-white min-h-screen pb-24">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md px-4 pt-4 pb-2">
        <div className="flex items-center justify-between h-12">
          <div className="flex-none w-10">
            <button onClick={() => navigate(-1)} className="flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition-colors">
              <span className="material-symbols-outlined">arrow_back_ios_new</span>
            </button>
          </div>
          <h1 className="text-lg font-bold tracking-tight text-center flex-1">全部商品</h1>
          <div className="flex-none w-10 flex justify-end">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <span className="material-symbols-outlined">search</span>
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-white border-b border-gray-100">
        <div className="flex justify-between px-6">
          <button className="flex flex-col items-center justify-center border-b-2 border-primary py-3 px-2">
            <p className="text-primary text-sm font-bold">综合</p>
          </button>
          <button className="flex flex-col items-center justify-center border-b-2 border-transparent py-3 px-2 text-gray-500">
            <p className="text-sm font-medium">销量</p>
          </button>
          <button className="flex flex-col items-center justify-center border-b-2 border-transparent py-3 px-2 text-gray-500">
            <p className="text-sm font-medium">新品</p>
          </button>
          <button className="flex flex-col items-center justify-center border-b-2 border-transparent py-3 px-2 text-gray-500">
            <div className="flex items-center gap-0.5">
              <p className="text-sm font-medium">价格</p>
              <span className="material-symbols-outlined text-[14px]">unfold_more</span>
            </div>
          </button>
        </div>
      </nav>

      <div className="flex gap-2.5 p-4 overflow-x-auto no-scrollbar bg-white">
        {categories.map((cat, i) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={i}
              onClick={() => setActiveCategory(cat)}
              className={`flex h-9 shrink-0 items-center justify-center rounded-full px-5 transition-all shadow-sm border ${
                isActive 
                ? 'bg-primary text-white border-primary shadow-primary/20' 
                : 'bg-gray-50 text-gray-600 border-gray-100 hover:bg-gray-100'
              }`}
            >
              <p className="text-xs font-semibold uppercase tracking-wider">{cat}</p>
            </button>
          );
        })}
      </div>

      <main className="px-4 py-2">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-x-4 gap-y-6">
            {filteredProducts.map((prod, idx) => (
              <div key={idx} className="flex flex-col group cursor-pointer" onClick={() => navigate('/product-detail')}>
                <div className="relative w-full aspect-[4/5] bg-gray-100 rounded-xl overflow-hidden mb-3">
                  <div className="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-105" style={{backgroundImage: `url('${prod.img}')`}}></div>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-[#171212] text-sm font-semibold leading-snug line-clamp-1">{prod.name}</h3>
                  <div className="flex items-baseline gap-1"><span className="text-primary text-base font-bold">¥ {prod.price}</span></div>
                  <div className="flex items-center justify-between mt-0.5">
                    <p className="text-gray-400 text-[10px] font-medium uppercase tracking-tight">已售 {prod.sold}</p>
                    <button className="w-7 h-7 flex items-center justify-center rounded-full bg-primary/10 text-primary active:scale-90 transition-transform">
                      <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-gray-400">
            <span className="material-symbols-outlined text-6xl mb-4 opacity-20">inventory_2</span>
            <p className="text-sm">暂无该分类商品</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Shop;
