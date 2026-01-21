
import React from 'react';
import { useNavigate } from 'react-router-dom';

const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen max-w-[480px] mx-auto pb-12">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md px-4 py-4 flex items-center border-b border-gray-100">
        <button onClick={() => navigate(-1)} className="material-symbols-outlined text-primary p-2">arrow_back_ios_new</button>
        <h1 className="flex-1 text-center text-lg font-bold pr-10 font-serif">关于慧爱家</h1>
      </header>

      <main>
        <div className="flex flex-col items-center pt-12 pb-8 px-6">
          <div className="w-20 h-20 shrink-0 mb-4">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 85C50 85 15 65 15 40C15 25 25 15 37.5 15C44 15 48 18 50 22C52 18 56 15 62.5 15C75 15 85 25 85 40C85 65 50 85 50 85Z" fill="#af1818" />
              <path d="M40 58V45L50 37L60 45V58H40Z" fill="white" />
              <path d="M46 58H54V52H46V58Z" fill="#af1818" />
            </svg>
          </div>
          <h2 className="text-2xl font-black font-serif text-primary tracking-widest mb-2">慧爱家</h2>
          <p className="text-xs font-bold tracking-[0.4em] text-brand-gray uppercase mb-8">Charity & Home</p>
          <div className="w-12 h-1 bg-primary/20 rounded-full mb-8"></div>
        </div>

        <section className="px-8 space-y-8">
          <div>
            <h3 className="text-lg font-bold font-serif mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-primary rounded-full"></span>
              我们的愿景
            </h3>
            <p className="text-[#171212]/80 leading-relaxed font-light text-[15px]">
              慧爱家（Hui Ai Jia）成立于2018年，是一个致力于连接城市爱心与乡村需求的智慧公益平台。我们相信，每一份微小的善意，汇聚在一起都能成为温暖万千家庭的巨大力量。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold font-serif mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-primary rounded-full"></span>
              核心领域
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {[
                { title: '乡村教育', desc: '通过爱心包裹与奖学金，助力偏远地区困境儿童改善学习环境。', icon: 'auto_stories' },
                { title: '非遗传承', desc: '扶持传统手工艺人，将指尖技艺转化为经济收益，守护文化根脉。', icon: 'temp_preferences_custom' },
                { title: '绿色环保', desc: '倡导可持续生活方式，支持垃圾分类与旧物循环公益项目。', icon: 'eco' }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl">
                  <span className="material-symbols-outlined text-primary text-2xl">{item.icon}</span>
                  <div>
                    <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-gray-500 leading-normal">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary/5 rounded-3xl p-6 border border-primary/10">
            <h3 className="text-base font-bold font-serif mb-3 text-primary">透明与信任</h3>
            <p className="text-xs text-primary/70 leading-relaxed">
              慧爱家坚持“善款流向透明化”原则。每一笔捐赠、每一件公益商品的售出，其影响力和资金去向均在平台公示。我们建立了严格的财务审核机制，确保每一分爱心都能精准送达受助者手中。
            </p>
          </div>
        </section>

        <footer className="mt-16 px-8 text-center">
          <p className="text-[10px] text-gray-400 font-medium tracking-widest uppercase mb-4">汇聚爱 · 温暖家</p>
          <div className="flex justify-center gap-6 mb-8">
            <div className="size-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
              <span className="material-symbols-outlined text-xl">language</span>
            </div>
            <div className="size-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
              <span className="material-symbols-outlined text-xl">mail</span>
            </div>
            <div className="size-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
              <span className="material-symbols-outlined text-xl">call</span>
            </div>
          </div>
          <p className="text-[10px] text-gray-300">© 2018-2024 Hui Ai Jia Charity Foundation.</p>
        </footer>
      </main>
    </div>
  );
};

export default About;
