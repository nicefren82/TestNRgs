import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import QuoteAssistant from './components/QuoteAssistant';

const App: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200 selection:text-blue-900">
      <Navbar scrollToSection={scrollToSection} />
      
      <main>
        <Hero scrollToSection={scrollToSection} />
        
        <div id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-sm font-bold text-accent uppercase tracking-wider mb-3">Tentang Kami</h2>
            <h3 className="text-3xl font-bold text-primary sm:text-4xl max-w-3xl mx-auto mb-8">
              Dedikasi untuk Kualitas Konveksi Sejak 2015
            </h3>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
              NR Industries bermula dari sebuah workshop kecil di Bandung, kini berkembang menjadi salah satu vendor konveksi terpercaya yang melayani ratusan klien korporat, komunitas, dan brand clothing di seluruh Indonesia. Kami memadukan teknologi tekstil modern dengan keahlian tangan pengrajin lokal untuk menghasilkan produk yang presisi dan tahan lama.
            </p>
          </div>
        </div>

        <Services />
        <Portfolio />
        <QuoteAssistant />
        <Contact />
      </main>
    </div>
  );
};

export default App;