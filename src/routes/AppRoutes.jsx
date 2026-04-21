import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Products from '../pages/Products';
import ProductDetails from '../pages/ProductDetails';
import Franchise from '../pages/Franchise';
import Certifications from '../pages/Certifications';
import Contact from '../pages/Contact';
import Terms from '../pages/Terms';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/franchise" element={<Franchise />} />
      <Route path="/certifications" element={<Certifications />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/terms" element={<Terms />} />
    </Routes>
  );
};

export default AppRoutes;
