import React, { useContext, useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { AppContext } from '../context/AppContext';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Breadcrumbs from '../components/Breadcrumbs';
import bgProd from '../assets/bg_products.png';

const ProductCard = ({ product }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    className="bg-white rounded-[24px] hover:border-primary/30 transition-all duration-300 border border-slate-200 hover:shadow-[0_20px_50px_-15px_rgba(14,165,233,0.15)] overflow-hidden flex flex-col h-full group"
  >
    <div className="h-48 overflow-hidden bg-slate-50 flex items-center justify-center p-4 relative border-b border-slate-100">
       <div className="absolute inset-0 bg-gradient-to-t from-slate-200/50 to-transparent z-0"></div>
       <img src={product.image} alt={product.name} className="h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500 relative z-10" />
       <div className="absolute top-2 right-2 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider z-10 shadow-sm">
         {product.category}
       </div>
    </div>
    <div className="p-6 flex flex-col flex-grow">
       <h3 className="text-xl font-heading font-bold text-slate-900 mb-1">{product.name}</h3>
       <p className="text-xs text-primary font-medium mb-3 h-8 line-clamp-2">{product.composition}</p>
       <p className="text-sm text-slate-600 flex-grow mb-6 font-light">{product.description}</p>
       <Link 
         to={`/products/${product.id}`}
         className="w-full text-center bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-primary hover:border-primary/30 py-2 rounded-lg font-medium transition-all text-sm shadow-sm"
       >
         View Details
       </Link>
    </div>
  </motion.div>
);

const Products = () => {
  const { products } = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  
  const selectedCategory = searchParams.get('category') || 'All';
  const categories = ['All', 'Injectables', 'Tablets & Capsules', 'Syrups & Suspensions', 'Featured Brands'];

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchCategory = selectedCategory === 'All' || p.category === selectedCategory;
      const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.composition.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [products, selectedCategory, searchQuery]);

  return (
    <>
      <Helmet>
        <title>Our Products | Novatrix Formulations LLP</title>
        <meta name="description" content="Explore our wide range of pharmaceutical products including injectables, tablets, capsules, and syrups." />
      </Helmet>

      {/* Header */}
      <div className="bg-slate-50 mt-32 mb-12 mx-4 xl:mx-auto max-w-7xl py-12 rounded-3xl text-slate-900 relative border border-slate-200 overflow-hidden shadow-sm">
         <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-multiply" style={{ backgroundImage: `url(${bgProd})` }}></div>
         <div className="absolute inset-0 bg-gradient-to-r from-slate-50/90 via-slate-50/50 to-transparent"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full lg:w-2/3">
          <div className="mb-6">
            <Breadcrumbs 
              items={[
                { name: 'Products', path: selectedCategory !== 'All' ? '/products' : null },
                ...(selectedCategory !== 'All' ? [{ name: selectedCategory }] : [])
              ]} 
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Products</h1>
        </div>
      </div>

      <section className="py-12 bg-white min-h-[60vh] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Sidebar / Filters */}
            <div className="w-full lg:w-1/4">
               <div className="bg-slate-50 border border-slate-200 rounded-[24px] shadow-sm p-6 sticky top-28">
                  <h3 className="font-heading font-bold text-lg text-slate-900 mb-4 pb-2 border-b border-slate-200">Categories</h3>
                  <ul className="space-y-2 mb-8">
                    {categories.map((cat) => (
                      <li key={cat}>
                        <button
                          onClick={() => setSearchParams(cat === 'All' ? {} : { category: cat })}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                            selectedCategory === cat 
                              ? 'bg-primary/10 text-primary font-medium border border-primary/20' 
                              : 'text-slate-600 hover:bg-white hover:text-slate-900 hover:shadow-sm'
                          }`}
                        >
                          {cat}
                        </button>
                      </li>
                    ))}
                  </ul>

                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Search composition..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-slate-900 placeholder-slate-400 shadow-inner"
                    />
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  </div>
               </div>
            </div>

            {/* Product Grid */}
            <div className="w-full lg:w-3/4">
              <div className="mb-6 flex justify-between items-end border-b border-slate-200 pb-4">
                 <h2 className="text-2xl font-heading font-bold text-slate-900 flex items-center gap-2">
                    {selectedCategory === 'All' ? 'All Products' : selectedCategory}
                 </h2>
                 <p className="text-sm text-slate-500 font-medium">Showing <span className="text-primary">{filteredProducts.length}</span> Results</p>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="bg-slate-50 border border-slate-200 rounded-[32px] p-12 text-center shadow-sm">
                   <p className="text-slate-600 text-lg font-light mb-2">No products found matching your search.</p>
                   <button 
                     onClick={() => { setSearchQuery(''); setSearchParams({}); }}
                     className="mt-4 text-primary hover:text-primary/80 font-medium px-6 py-2 bg-primary/10 rounded-full transition-colors"
                   >
                     Clear Filters
                   </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
