import React from 'react';
import { NavLink } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import logo from '../assets/logo.png';
import bgFooter from '../assets/bg_about.png';

const Footer = () => {
  return (
    <footer className="bg-sky-50 border-t border-blue-100 text-slate-900 pt-20 pb-10 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-[0.04] mix-blend-multiply pointer-events-none" style={{ backgroundImage: `url(${bgFooter})` }}></div>
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-200/50 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand & Description */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Novatrix Logo" className="h-14 w-auto object-contain" />
            </div>
            <p className="text-sm text-slate-600 leading-relaxed mb-6 font-medium">
              We are committed to delivering high-quality, affordable medicines and building long-term healthcare partnerships globally.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-slate-900">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Products', 'Franchise', 'Certifications'].map((link) => (
                <li key={link}>
                  <NavLink
                    to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '-')}`}
                    className="text-sm text-slate-500 hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 rounded-full bg-slate-300 group-hover:bg-primary transition-colors"></div>
                    {link}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-slate-900">Products</h4>
            <ul className="space-y-3">
              {['Injectables', 'Tablets & Capsules', 'Syrups & Suspensions', 'Featured Brands'].map((category) => (
                <li key={category}>
                  <NavLink
                    to={`/products?category=${encodeURIComponent(category)}`}
                    className="text-sm text-slate-500 hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 rounded-full bg-slate-300 group-hover:bg-primary transition-colors" />
                    {category}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-slate-900">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="bg-slate-100 p-2.5 rounded-full border border-slate-200 shrink-0 text-primary">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm text-slate-500 font-light mt-1">GF, NO. 2, SR.NO. 561P1, Plot No. 2,<br />JAMNAVAD ROAD, AT.TA. DHORAJI, RAJKOT - 360410</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-slate-100 p-2.5 rounded-full border border-slate-200 shrink-0 text-primary">
                  <Phone className="w-4 h-4" />
                </div>
                <a href="tel:+919428126738" className="text-sm text-slate-500 font-light hover:text-primary transition-colors hover:underline underline-offset-4 decoration-primary/30">+91 94281 26738</a>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-slate-100 p-2.5 rounded-full border border-slate-200 shrink-0 text-primary">
                  <Mail className="w-4 h-4" />
                </div>
                <a href="mailto:info@novatrixformulations.com" className="text-sm text-slate-500 font-light hover:text-primary transition-colors hover:underline underline-offset-4 decoration-primary/30">info@novatrixformulations.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400 font-light">
            &copy; {new Date().getFullYear()} Novatrix Formulations LLP. All Rights Reserved.
          </p>
          <div className="flex gap-4 items-center">
            <span className="text-xs text-slate-400 hover:text-primary cursor-pointer transition-colors font-medium">Privacy Policy</span>
            <span className="text-xs text-slate-200">|</span>
            <NavLink to="/terms" className="text-xs text-slate-400 hover:text-primary cursor-pointer transition-colors font-medium">Terms & Conditions</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
