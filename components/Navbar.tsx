import React, { useState } from 'react';
import { Menu, X, Scissors } from 'lucide-react';

interface NavbarProps {
  scrollToSection: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (id: string) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => handleNav('hero')}>
            <div className="bg-primary p-2 rounded-lg">
              <Scissors className="h-6 w-6 text-white" />
            </div>
            <span className="ml-3 text-xl font-bold text-primary tracking-tight">NR Industries</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => handleNav(item.toLowerCase())}
                  className="text-slate-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item}
                </button>
              ))}
              <button 
                onClick={() => handleNav('quote-assistant')}
                className="bg-accent text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/30"
              >
                Tanya AI
              </button>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['About', 'Services', 'Portfolio', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => handleNav(item.toLowerCase())}
                className="text-slate-600 hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                {item}
              </button>
            ))}
             <button 
                onClick={() => handleNav('quote-assistant')}
                className="bg-accent text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left mt-4"
              >
                Konsultasi AI
              </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;