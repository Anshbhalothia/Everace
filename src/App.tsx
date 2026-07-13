import { Routes, Route } from 'react-router-dom';
import { Navbar } from '@components/layout/Navbar';
import { Footer } from '@components/layout/Footer';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import ProductDetailsPage from './pages/ProductDetails';
import CartPage from './pages/Cart';
import CheckoutPage from './pages/Checkout';
import NotFoundPage from './pages/NotFound';
import StoryPage from './pages/Story';

function App() {
  return (
    <div className="min-h-screen bg-ivory text-[#1c1a18] antialiased">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:slug" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/story" element={<StoryPage />} />

        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
