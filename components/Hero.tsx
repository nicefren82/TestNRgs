import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/445/1920/1080" 
          alt="Textile Factory" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6 drop-shadow-lg">
          Kualitas Terbaik untuk <br/>
          <span className="text-blue-400">Identitas Brand Anda</span>
        </h1>
        <p className="mt-4 text-xl text-slate-200 max-w-2xl mx-auto mb-10">
          NR Industries adalah mitra terpercaya dalam produksi pakaian seragam, kaos, jaket, dan merchandise perusahaan dengan standar kualitas ekspor.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-accent hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full transition-all flex items-center justify-center shadow-lg shadow-blue-500/50"
          >
            Hubungi Kami
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button 
            onClick={() => scrollToSection('portfolio')}
            className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-full transition-all"
          >
            Lihat Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;