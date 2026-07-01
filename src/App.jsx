import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Group Pages
import GroupHome from './pages/group/Home';
import GroupAbout from './pages/group/About';
import GroupBusinesses from './pages/group/Businesses';
import GroupContact from './pages/group/Contact';

// Trading Pages
import TradingHome from './pages/trading/Home';
import TradingServices from './pages/trading/Services';
import TradingWhyPartner from './pages/trading/WhyPartner';
import TradingAbout from './pages/trading/About';
import TradingContact from './pages/trading/Contact';

// Layout wrapping pages with the Header and Footer
function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Femsa Group Routes */}
          <Route index element={<GroupHome />} />
          <Route path="about" element={<GroupAbout />} />
          <Route path="businesses" element={<GroupBusinesses />} />
          <Route path="contact" element={<GroupContact />} />

          {/* Femsa Trading Routes */}
          <Route path="trading">
            <Route index element={<TradingHome />} />
            <Route path="services" element={<TradingServices />} />
            <Route path="why-partner" element={<TradingWhyPartner />} />
            <Route path="about" element={<TradingAbout />} />
            <Route path="contact" element={<TradingContact />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}
