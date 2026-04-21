import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = ({ items }) => {
  return (
    <nav className="flex items-center space-x-2 text-sm font-medium">
      <Link 
        to="/" 
        className="text-slate-400 hover:text-primary transition-colors flex items-center gap-1.5"
      >
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>
      
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight className="w-4 h-4 text-slate-300" />
          {item.path ? (
            <Link 
              to={item.path} 
              className="text-slate-400 hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ) : (
            <span className="text-slate-900 font-semibold">{item.name}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
