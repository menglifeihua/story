
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
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzMtmZuOkES9gf0rXsfFzIN-PEmdSrpNPdBDVAawpNqcPCkYeSihKob_ubKlwXQPTb6J8a_TZnHCwtqi5OPFlR39LEztSVPdQVbMqIYKjdmWW7RQIlE2a2hbK4FTsNyt4U_AS6hOHYlDzEDGbsX77RFfIdpR5Dyq7CJQZFbbrh2sKTN8xuZ2qr5tAgdpVQcVXpT9Ki0wS0vFhrXLB8HcZfYPCftUy4JzA_JEp4p4G_Z8wfXlRqWTazVLTUS79epnXiKRcieN2vRA' 
    },
    { 
      name: '高山有机红薯', 
      price: '29.90', 
      sold: '560', 
      category: '生鲜食品',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGWuKPwCC9wGjru0CZWc3CL6F2Eh0_hrI6tCBTZlhdqcF3PQWO6RPrrl0itoR2feoPD4lx24-TFudY3JrL79mDnAHL7fcvthT175-5cOf0KAiULF0TzZch7z9swYsfXfgkObl7XAaY0r_A0wy7IljfNGiFp-XdFQNoEI5GmmIrplfT-g1W2AowRgOGpSOIPHD-PGYBbXf3G2eiAEeLm-uavIvj9rjxfZyEOwdYD3soLuaPKj8xL-e8mlF6JECh5cemD8rUNei2ow' 
    },
    { 
      name: '环保布艺袋 (米白色)', 
      price: '15.00', 
      sold: '320', 
      category: '生活用品',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-5JMuej4qJo7Nkdrs_SkI4Il0beWHMkfc54GBoEhHkc3HUHNpYrihcXBxZgi-_omQfis3XmFxgZDgqan_DHGqWKkaQo47ke-p915ZHx0AnZ64qoeA23HWd4dkMI073oJMxLU40nYmUL4JdQ504ElgvUi763AkcOZVv2dg1Bk_fGpDtCjtKVkIM7kuZAEsAFkGvGG3Nxw_-zo-bc_XsnDPDwK4Y2UPLGUhmqo2okhSm7OdBh8P41vlO1fHkARD3A2W_iVhDY_32Q' 
    },
    { 
      name: '纯手工无添加草莓酱', 
      price: '38.00', 
      sold: '89', 
      category: '生鲜食品',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9J2ZBzlBiHp7wLCNlgIve_V10JRjIoA6iec4MnK9z-FAXb2C2cRrZqPK73wyJeRIiQzziTf1YQHtvjp9JNravTAHxniDu6GbL5bCHiWRr9nYdyKIbpjzYOeEYkJ7bg6tMnW0Z8ORyhv_YnDB7tAEyBTzxigbSE8jKxY7aE8sYzJMw3njYYkthfFFdCN2Neq06BFwPLWjKCqAjpVAjuzSkcbVKq6MIA4eCIWb1bJsLHGfkANPCWxI5GTebxW2MesY6bmABtF91og' 
    },
    { 
      name: '粗陶手作茶杯', 
      price: '68.00', 
      sold: '210', 
      category: '传统手工艺',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnl3InCiCSOWgGNzWSrBLoKn1n7l95PEcQqG_9CgaLTvG-Zbuw_NW8hPHFHycYRCO30bXUQjepAwIGmjS4OUGvDH1_hhFdFC9MajQINOFQ2nXmO_f58MMPsAcj7iDjqwgmGUbkVBNoAHeJBc_3-9siPgqorvVR4t4PBgpHnu06fa_6DulcX1-r6Mp6rvR0ZbvX8ld3cHixh-M06TngIu-qFSN4Rh7TC1K57yAE33a82bJ6-sswJ0u9y0ipjIpA23_cnLqkfXPwuA' 
    },
    { 
      name: '深山土蜂蜜 (500g)', 
      price: '128.00', 
      sold: '450', 
      category: '生鲜食品',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxYnaL2TfYfDzuOTrUJZPDVJJ6ExwCohLovqdUkoPmGOh8kqFvR6OuaILLf_eYDZUA3Dxntk5QwB7UP1OJymwTY1Z6czDqXy7uFBe5aEP0s1vCRrBeVeaH_TR_T__g5RwyEw_qYY1VfvAE4fXEW9WRyD4zGJvtrFEqEdX_mvV0Sx4bKG9cUyoE5xdwWItfakpJwtB6CreHfqzPKLTzmtVXIMVMs0r3n28iL9F76lid8UOJ3Mqs5RQgxhRaQaliWVWIt1NGtsvRFQ' 
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
