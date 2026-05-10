import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AppContext } from '../context/AppContext';
import { ChevronRight, ShieldCheck, ThumbsUp, Clock, Info, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Breadcrumbs from '../components/Breadcrumbs';
import bgProd from '../assets/bg_products.png';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products } = useContext(AppContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (products.length > 0) {
      const found = products.find(p => p.id === parseInt(id));
      if (found) {
        setProduct(found);
      } else {
        navigate('/products');
      }
    }
  }, [id, products, navigate]);

  if (!product) return <div className="min-h-screen pt-32 text-center text-slate-500">Loading...</div>;

  return (
    <>
      <Helmet>
        <title>{product.name} | Novatrix Formulations LLP</title>
        <meta name="description" content={product.description} />
      </Helmet>

      {/* Breadcrumb Header */}
      <div className="bg-slate-50 mt-32 mb-12 mx-4 xl:mx-auto max-w-7xl py-12 rounded-3xl text-slate-900 relative border border-slate-200 overflow-hidden shadow-sm">
        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-multiply" style={{ backgroundImage: `url(${bgProd})` }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50/90 via-slate-50/50 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full lg:w-2/3">
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { name: 'Products', path: '/products' },
                { name: product.name }
              ]}
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">{product.name}</h1>
        </div>
      </div>

      <section className="py-16 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-[32px] shadow-sm border border-slate-200 overflow-hidden flex flex-col lg:flex-row">

            {/* Left - Image */}
            <div className="w-full lg:w-2/5 bg-white md:bg-white p-12 flex items-center justify-center relative border-b lg:border-b-0 lg:border-r border-slate-200">
              <div className="absolute top-6 left-6 bg-primary/10 text-primary font-bold px-3 py-1.5 rounded-lg border border-primary/20 uppercase tracking-wider text-xs shadow-sm">
                {product.category}
              </div>
              <motion.img
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                src={product.image}
                alt={product.name}
                className="w-full max-w-sm object-contain drop-shadow-xl mix-blend-multiply"
              />
            </div>

            {/* Right - Product Info */}
            <div className="w-full lg:w-3/5 p-8 lg:p-12 flex flex-col">
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-2 text-balance">{product.name}</h1>
              <p className="text-xl text-primary font-medium mb-6">{product.composition}</p>
              <p className="text-slate-600 font-light leading-relaxed mb-8">{product.longDescription}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div>
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block mb-1">Pack Size</span>
                  <p className="font-medium text-slate-800 flex items-center gap-2">
                    <Info className="w-4 h-4 text-primary" /> {product.packSize}
                  </p>
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block mb-1">Form</span>
                  <p className="font-medium text-slate-800 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-primary" /> {product.form}
                  </p>
                </div>
                <div className="md:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <span className="text-xs text-primary/80 font-bold uppercase tracking-wider block mb-2">Usage & Indication</span>
                  <p className="text-sm font-light text-slate-600">{product.usage}</p>
                </div>
              </div>

              <div className="mt-auto flex flex-wrap gap-4 pt-8 border-t border-slate-200">
                <Link to="/contact" className="bg-primary hover:bg-secondary text-white px-8 py-3.5 rounded-full shadow-[0_10px_20px_-10px_rgba(14,165,233,0.5)] transition-all font-semibold hover:-translate-y-0.5">
                  Enquire Now
                </Link>
                <button className="border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 px-8 py-3.5 rounded-full transition-all font-semibold hover:-translate-y-0.5 shadow-sm">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>

          {product.bannerImage && (
            <div className="mt-16 rounded-[32px] overflow-hidden shadow-sm border border-slate-200">
              <img src={product.bannerImage} alt={`${product.name} Visual Aid`} className="w-full h-auto object-cover" />
            </div>
          )}

          {/* Features Strip */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <ShieldCheck className="w-10 h-10 text-primary mx-auto mb-3" />
              <h4 className="font-heading font-bold text-sm text-slate-700">WHO-GMP Certified</h4>
            </div>
            <div className="p-4">
              <ThumbsUp className="w-10 h-10 text-primary mx-auto mb-3" />
              <h4 className="font-heading font-bold text-sm text-slate-700">High Quality Formulation</h4>
            </div>
            <div className="p-4">
              <CheckCircle2 className="w-10 h-10 text-primary mx-auto mb-3" />
              <h4 className="font-heading font-bold text-sm text-slate-700">Safe & Effective</h4>
            </div>
            <div className="p-4">
              <Clock className="w-10 h-10 text-primary mx-auto mb-3" />
              <h4 className="font-heading font-bold text-sm text-slate-700">Timely Delivery</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
