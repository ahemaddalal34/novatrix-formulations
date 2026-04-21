import { createContext, useState, useEffect } from 'react';
import productsData from '../data/products.json';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    setProducts(productsData);
  }, []);

  return (
    <AppContext.Provider value={{ products }}>
      {children}
    </AppContext.Provider>
  );
};
