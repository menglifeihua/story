
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Community: React.FC = () => {
  const navigate = useNavigate();
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  const toggleLike = (idx: number) => {
    if (likedPosts.includes(idx)) {
      setLikedPosts(likedPosts.filter(i => i !== idx));
    } else {
      setLikedPosts([...likedPosts, idx]);
    }
  };

  const posts = [
    {
      user: '林婉清',
      role: '已认证捐赠者',
      avatar: '/avatar1.png',
      image: '/post_image1.png',
      title: '今天收到了慧爱家的爱心包裹',
      content: '每一个包裹都承载着满满的爱。看到孩子们纯真的笑脸，觉得一切都值得了。这些书籍和文具将会陪伴他们开启新的学期。',
      likes: '1,248',
      comments: '256',
      shares: '89'
    },
    {
      user: '陈默',
      role: '资深公益人',
      avatar: '/avatar2.png',
      image: '/post_image2.png',
      title: '温暖的力量：加入慧爱家100天',
      content: '加入慧爱家社区的第100天，见证了无数感人的瞬间。公益不是一个人的全力以赴，而是许多人的力所能及。',
      likes: '862',
      comments: '112',
      shares: '45'
    }
  ];

  return (
    <div className="bg-[#fbfaf9] min-h-screen pb-24">
      <header className="sticky top-0 z-50 bg-[#fbfaf9]/80 backdrop-blur-md">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="w-10">
            <button className="flex items-center justify-center p-1 rounded-full hover:bg-black/5 transition-colors">
              <span className="material-symbols-outlined text-2xl">search</span>
            </button>
          </div>
          <h1 className="text-lg font-bold tracking-tight">慧爱社区</h1>
          <div className="w-10 flex justify-end">
            <button className="flex items-center justify-center p-1 rounded-full hover:bg-black/5 transition-colors">
              <span className="material-symbols-outlined text-2xl">notifications</span>
            </button>
          </div>
        </div>
        <div className="flex border-b border-[#e7dadd] px-6 gap-8">
          <button className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#8d5e66] pb-3 pt-2">
            <p className="text-sm font-bold tracking-wide">关注</p>
          </button>
          <button className="flex flex-col items-center justify-center border-b-[3px] border-primary text-primary pb-3 pt-2">
            <p className="text-sm font-bold tracking-wide">发现</p>
          </button>
        </div>
      </header>

      <main className="p-4 space-y-6">
        {posts.map((post, idx) => (
          <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm border border-black/5">
            <div className="p-3 flex items-center justify-between">
              <div 
                className="flex items-center gap-3 cursor-pointer"
                onClick={() => navigate('/profile')}
              >
                <div className="size-10 rounded-full bg-slate-200 bg-cover bg-center" style={{backgroundImage: `url('${post.avatar}')`}}></div>
                <div>
                  <p className="text-sm font-bold">{post.user}</p>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px] text-primary fill-1">verified</span>
                    <span className="text-[11px] text-primary font-bold uppercase tracking-wider">{post.role}</span>
                  </div>
                </div>
              </div>
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <span className="material-symbols-outlined text-[#8d5e66]">more_horiz</span>
              </button>
            </div>
            <div 
              className="aspect-[4/3] w-full bg-cover bg-center cursor-pointer" 
              style={{backgroundImage: `url('${post.image}')`}}
              onClick={() => navigate('/project-detail')}
            ></div>
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-bold leading-tight">{post.title}</h3>
              <p className="text-[#8d5e66] text-sm leading-relaxed">{post.content}</p>
              <div className="flex items-center justify-between pt-2">
                <div className="flex gap-4">
                  <button 
                    onClick={() => toggleLike(idx)}
                    className="flex items-center gap-1 transition-colors"
                  >
                    <span className={`material-symbols-outlined text-xl ${likedPosts.includes(idx) ? 'text-primary fill-1' : 'text-[#8d5e66]'}`}>favorite</span>
                    <span className={`text-xs font-bold ${likedPosts.includes(idx) ? 'text-primary' : 'text-[#8d5e66]'}`}>{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-1 text-[#8d5e66]">
                    <span className="material-symbols-outlined text-xl">chat_bubble</span>
                    <span className="text-xs font-bold">{post.comments}</span>
                  </button>
                  <button className="flex items-center gap-1 text-[#8d5e66]">
                    <span className="material-symbols-outlined text-xl">share</span>
                    <span className="text-xs font-bold">{post.shares}</span>
                  </button>
                </div>
                <button 
                  onClick={() => navigate('/project-detail')}
                  className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold active:scale-95 transition-transform"
                >
                  支持她
                </button>
              </div>
            </div>
          </div>
        ))}
      </main>
      
      <button className="fixed bottom-24 right-6 size-14 bg-primary text-white rounded-full shadow-lg shadow-primary/30 flex items-center justify-center z-50 active:scale-90 transition-transform">
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>
    </div>
  );
};

export default Community;
