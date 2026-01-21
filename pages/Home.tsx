
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const featuredProducts = [
    {
      name: '传统非遗竹编花篮',
      price: '129.00',
      tag: '手工制作',
      desc: '支持山区手艺人增收',
      img: '/bamboo_basket.png'
    },
    {
      name: '纯棉环保帆布袋',
      price: '49.00',
      tag: '环保材料',
      desc: '减少塑料，守护地球',
      tagColor: 'text-green-600',
      img: '/canvas_bag.png'
    },
    {
      name: '深山百花土蜂蜜',
      price: '158.00',
      tag: '天然无添',
      desc: '源自秦岭，纯正滋养',
      img: '/honey.png'
    },
    {
      name: '植染手工棉麻围巾',
      price: '189.00',
      tag: '古法染织',
      desc: '传承千年蓝染工艺',
      img: '/scarf.png'
    },
    {
      name: '定制爱心公益课本',
      price: '30.00',
      tag: '爱心助学',
      desc: '为偏远地区学生捐书',
      tagColor: 'text-blue-600',
      img: '/book.png'
    },
    {
      name: '有机粗粮杂豆组合',
      price: '66.00',
      tag: '农家直采',
      desc: '健康膳食，产地直发',
      img: '/grains.png'
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-24">
      <header className="sticky top-0 z-50 bg-white px-5 pt-6 pb-4 border-b border-gray-50/50">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 shrink-0">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 85C50 85 15 65 15 40C15 25 25 15 37.5 15C44 15 48 18 50 22C52 18 56 15 62.5 15C75 15 85 25 85 40C85 65 50 85 50 85Z" fill="#af1818" />
                <path d="M40 58V45L50 37L60 45V58H40Z" fill="white" />
                <path d="M46 58H54V52H46V58Z" fill="#af1818" />
              </svg>
            </div>
            <h1 className="text-primary text-[26px] font-serif font-black tracking-tight leading-none pt-0.5" style={{ fontFamily: "'Noto Serif SC', serif" }}>
              慧爱家
            </h1>
          </div>
          <button className="flex size-10 items-center justify-center rounded-full hover:bg-gray-50 transition-colors">
            <span className="material-symbols-outlined text-primary text-[28px] fill-1">notifications</span>
          </button>
        </div>

        <div className="flex items-center justify-end mb-5 mr-1">
          <div className="flex items-center gap-3">
            <div className="w-16 h-[0.5px] bg-primary/40"></div>
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#86656a] uppercase">CHARITY & HOME</span>
          </div>
        </div>

        <div className="w-full">
          <div className="flex w-full items-stretch rounded-full h-12 shadow-[0_4px_16px_rgba(0,0,0,0.02)] bg-[#f7f8f9] border border-gray-100 cursor-pointer" onClick={() => navigate('/shop')}>
            <div className="text-primary flex items-center justify-center pl-5">
              <span className="material-symbols-outlined !text-[22px] font-bold">search</span>
            </div>
            <div className="flex flex-1 items-center px-3 text-gray-400 text-[15px] font-medium">寻找有温度的公益好物...</div>
          </div>
        </div>
      </header>

      <div className="px-4 py-4">
        <div 
          onClick={() => navigate('/project-detail')}
          className="relative h-[220px] w-full overflow-hidden rounded-2xl group cursor-pointer shadow-xl shadow-black/5"
        >
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" style={{backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.1) 100%), url("/banner.png")`}}>
          </div>
          <div className="absolute inset-0 flex flex-col justify-center p-8 text-white">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase mb-3 opacity-90 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span> 精选公益项目
            </span>
            <h2 className="text-2xl font-black mb-2 leading-tight font-serif">用爱，让明天更有力量</h2>
            <p className="text-sm opacity-80 mb-6 max-w-[220px]">您的每一份购买，都将直接支持偏远地区困境儿童的教育改善计划。</p>
            <button className="w-fit px-8 py-2.5 bg-primary text-white text-sm font-bold rounded-full shadow-lg hover:shadow-primary/40 active:scale-95 transition-all">
              立即支持
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 p-4">
        {[
          { label: '爱心捐赠', icon: 'favorite', bg: 'bg-primary/10', path: '/project-detail' },
          { label: '环保专区', icon: 'eco', bg: 'bg-primary/5', path: '/shop' },
          { label: '非遗手作', icon: 'auto_awesome', bg: 'bg-primary/5', path: '/shop' },
          { label: '积分兑换', icon: 'stars', bg: 'bg-primary/5', path: '/points' },
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center gap-2 cursor-pointer active:scale-90 transition-transform" onClick={() => navigate(item.path)}>
            <div className={`flex size-14 items-center justify-center rounded-2xl ${item.bg} text-primary shadow-sm`}>
              <span className="material-symbols-outlined">{item.icon}</span>
            </div>
            <span className="text-[11px] font-bold text-[#171212]">{item.label}</span>
          </div>
        ))}
      </div>

      <div className="px-4 py-2">
        <div className="bg-[#fcfafa] rounded-2xl p-5 flex items-center justify-between border border-primary/10 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-[0.03] rotate-12">
            <span className="material-symbols-outlined text-[60px]">volunteer_activism</span>
          </div>
          <div className="relative z-10">
            <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold mb-1">慧爱影响力累计</p>
            <p className="text-2xl font-black text-[#171212] font-serif">¥ 1,284,900</p>
          </div>
          <div className="text-right relative z-10">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#86656a] font-bold mb-1">累计受助人数</p>
            <p className="text-2xl font-black text-primary font-serif">12,482</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-5 pt-8 pb-3">
        <h2 className="text-xl font-black tracking-tight font-serif border-l-4 border-primary pl-3">精选公益好物</h2>
        <button onClick={() => navigate('/shop')} className="text-xs font-bold text-primary flex items-center gap-1 group">
          查看全部 <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">chevron_right</span>
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 p-4">
        {featuredProducts.map((prod, idx) => (
          <div key={idx} className="group cursor-pointer mb-4" onClick={() => navigate('/product-detail')}>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gray-100 shadow-[0_8px_20px_-8px_rgba(0,0,0,0.1)]">
              <img alt={prod.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src={prod.img} />
              <div className={`absolute top-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-md rounded-lg text-[10px] font-black shadow-sm ${prod.tagColor || 'text-primary'}`}>
                {prod.tag}
              </div>
            </div>
            <div className="mt-4 px-1">
              <h3 className="text-[15px] font-bold text-[#171212] line-clamp-1">{prod.name}</h3>
              <p className="text-[11px] text-[#86656a] mt-1 font-medium">{prod.desc}</p>
              <div className="flex items-center justify-between mt-3">
                <span className="text-primary font-black text-lg font-serif">¥{prod.price}</span>
                <button className="size-9 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20 active:scale-90 transition-all">
                  <span className="material-symbols-outlined !text-[20px] fill-1">add_shopping_cart</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="h-12"></div>
    </div>
  );
};

export default Home;
