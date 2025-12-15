import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-primary text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">NR Industries</h3>
            <p className="mb-6 leading-relaxed">
              Partner terbaik untuk kebutuhan produksi pakaian Anda. Kami mengutamakan kualitas, ketepatan waktu, dan kepuasan pelanggan.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Hubungi Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 text-accent flex-shrink-0" />
                <span>Jl. Industri Raya No. 123, Bandung, Jawa Barat, Indonesia 40123</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-accent flex-shrink-0" />
                <span className="font-mono">+62 812-3456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-accent flex-shrink-0" />
                <span>info@nr-industries.com</span>
              </li>
            </ul>
          </div>

          {/* Quick Action */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Jam Operasional</h3>
            <ul className="space-y-2 mb-6">
              <li className="flex justify-between">
                <span>Senin - Jumat</span>
                <span className="text-white">08:00 - 17:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sabtu</span>
                <span className="text-white">08:00 - 14:00</span>
              </li>
              <li className="flex justify-between">
                <span>Minggu</span>
                <span className="text-red-400">Tutup</span>
              </li>
            </ul>
             <a 
                href="https://wa.me/6281234567890" 
                target="_blank" 
                rel="noreferrer"
                className="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Chat WhatsApp Sekarang
              </a>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} NR Industries. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;