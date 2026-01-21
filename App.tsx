
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

// Pages
import Splash from './pages/Splash';
import Home from './pages/Home';
import Community from './pages/Community';
import Shop from './pages/Shop';
import Profile from './pages/Profile';
import ProjectDetail from './pages/ProjectDetail';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import PaymentSuccess from './pages/PaymentSuccess';
import OrderList from './pages/OrderList';
import Tracking from './pages/Tracking';
import Review from './pages/Review';
import MemberCenter from './pages/MemberCenter';
import Certificate from './pages/Certificate';
import PointsCenter from './pages/PointsCenter';
import Login from './pages/Login';
import AddressList from './pages/AddressList';
import Coupons from './pages/Coupons';
import Events from './pages/Events';
import CharityReport from './pages/CharityReport';
import Settings from './pages/Settings';
import About from './pages/About';

// Layout
import BottomNav from './components/BottomNav';

const App: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Initial splash screen duration
    if (location.pathname === '/') {
      const timer = setTimeout(() => {
        setShowSplash(false);
        navigate('/home');
      }, 2500);
      return () => clearTimeout(timer);
    } else {
      setShowSplash(false);
    }
  }, [navigate, location.pathname]);

  const showBottomNav = ['/home', '/community', '/shop', '/profile'].includes(location.pathname);

  if (showSplash && location.pathname === '/') {
    return <Splash />;
  }

  return (
    <div className="max-w-[480px] mx-auto min-h-screen bg-white shadow-2xl overflow-x-hidden flex flex-col">
      <div className="flex-1 overflow-y-auto no-scrollbar">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/community" element={<Community />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/project-detail" element={<ProjectDetail />} />
          <Route path="/product-detail" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/order-list" element={<OrderList />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/review" element={<Review />} />
          <Route path="/member-center" element={<MemberCenter />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/points" element={<PointsCenter />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addresses" element={<AddressList />} />
          <Route path="/coupons" element={<Coupons />} />
          <Route path="/events" element={<Events />} />
          <Route path="/charity-report" element={<CharityReport />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      {showBottomNav && <BottomNav />}
    </div>
  );
};

export default App;
