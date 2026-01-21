
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductDetail: React.FC = () => {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
    // Visual feedback could be added here
  };

  return (
    <div className="bg-white text-[#1a1a1a] min-h-screen pb-32 max-w-[480px] mx-auto">
      <nav className="sticky top-0 z-50 flex items-center justify-between px-4 py-4 bg-white/90 backdrop-blur-md">
        <button onClick={() => navigate(-1)} className="flex items-center justify-center size-10 rounded-full hover:bg-gray-50 transition-colors">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <div className="flex gap-2">
          <button 
            onClick={() => setIsFavorite(!isFavorite)} 
            className="flex items-center justify-center size-10 rounded-full hover:bg-gray-50 transition-colors"
          >
            <span className={`material-symbols-outlined text-primary ${isFavorite ? 'fill-1' : ''}`}>favorite</span>
          </button>
          <button className="flex items-center justify-center size-10 rounded-full hover:bg-gray-50 transition-colors">
            <span className="material-symbols-outlined">share</span>
          </button>
        </div>
      </nav>

      <div className="px-4">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
          <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/book.png')"}}></div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md">
            <div className="size-1.5 rounded-full bg-white"></div>
            <div className="size-1.5 rounded-full bg-white/40"></div>
            <div className="size-1.5 rounded-full bg-white/40"></div>
          </div>
        </div>
      </div>

      <section className="mt-8 px-6">
        <div className="flex items-baseline justify-between">
          <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Artisan Series</span>
          <span className="text-[10px] text-gray-400">ID: HAJ-2024-089</span>
        </div>
        <h1 className="mt-3 text-2xl font-serif font-bold leading-tight tracking-tight">Handcrafted Ceramic Vase<br/>Minimalist Collection</h1>
        <p className="mt-4 text-2xl font-serif font-bold text-primary">¥899.00</p>
      </section>

      <section className="mt-10 px-6">
        <div className="p-6 rounded-2xl border border-primary/10 bg-primary/[0.02]">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="material-symbols-outlined text-primary text-xl fill-1">volunteer_activism</span>
            <h3 className="font-serif font-bold text-base text-primary">Charity Impact</h3>
          </div>
          <p className="text-sm leading-relaxed text-gray-600">
            Your purchase funds <span className="font-bold text-primary">3 days of vocational training</span> for local artisans in rural communities. Helping preserve cultural heritage through sustainable craftsmanship.
          </p>
        </div>
      </section>

      <section className="mt-12 px-6">
        <h3 className="font-serif font-bold text-lg mb-4 border-l-4 border-primary pl-3">Artisan's Story</h3>
        <p className="text-[15px] leading-7 text-gray-600 font-light italic">
          "Each piece is a dialogue between the clay and the hands. We don't strive for perfection, but for the soul that only human touch can provide."
        </p>
        <div className="mt-8 flex items-center gap-4">
          <div className="size-11 rounded-full bg-cover bg-center border border-gray-100" style={{backgroundImage: "url('/avatar2.png')"}}></div>
          <div>
            <p className="text-sm font-bold">Li Ming</p>
            <p className="text-xs text-gray-500">Master Ceramist, Jingdezhen</p>
          </div>
        </div>
      </section>

      <footer className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 px-6 pb-10 pt-4">
        <div className="max-w-md mx-auto flex items-center gap-5">
          <button 
            onClick={() => navigate('/cart')}
            className="flex flex-col items-center justify-center shrink-0 relative group"
          >
            <div className="relative">
              <span className="material-symbols-outlined text-primary text-2xl group-hover:scale-110 transition-transform">shopping_cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] size-4 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="text-[10px] mt-0.5 text-gray-500">Cart</span>
          </button>
          <div className="flex gap-3 w-full">
            <button 
              onClick={handleAddToCart}
              className="flex-1 h-12 flex items-center justify-center bg-white text-primary font-bold text-sm rounded-full border border-primary active:scale-95 transition-transform"
            >
              Add to Cart
            </button>
            <button 
              onClick={() => navigate('/checkout')}
              className="flex-1 h-12 flex items-center justify-center bg-primary text-white font-bold text-sm rounded-full shadow-lg active:scale-95 transition-transform"
            >
              Buy Now
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductDetail;
