import React from 'react';
import { Shirt, Briefcase, GraduationCap, Trophy } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    title: 'Kaos & Polo',
    description: 'Cotton Combed 30s/24s premium, Lacoste CVC. Sablon plastisol & rubber kualitas tinggi yang tahan lama.',
    icon: 'shirt',
    image: 'https://picsum.photos/id/1060/400/300'
  },
  {
    id: '2',
    title: 'Kemeja Kerja (PDH/PDL)',
    description: 'Bahan American Drill, Japan Drill, Tropical. Jahitan rapih, bordir komputer presisi untuk seragam kantor.',
    icon: 'briefcase',
    image: 'https://picsum.photos/id/1059/400/300'
  },
  {
    id: '3',
    title: 'Jaket & Hoodie',
    description: 'Fleece, Taslan, Parasut, Baby Terry. Cocok untuk komunitas, event, atau merchandise perusahaan.',
    icon: 'graduation',
    image: 'https://picsum.photos/id/1025/400/300'
  },
  {
    id: '4',
    title: 'Jersey & Sportswear',
    description: 'Bahan Drifit Milano, Brazil, Benzema. Full printing sublimasi dengan warna tajam dan tidak luntur.',
    icon: 'trophy',
    image: 'https://picsum.photos/id/1058/400/300'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">Layanan Kami</h2>
          <p className="mt-4 text-lg text-secondary">Solusi lengkap untuk segala kebutuhan konveksi Anda</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="group bg-slate-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-accent">
                    {service.icon === 'shirt' && <Shirt size={24} />}
                    {service.icon === 'briefcase' && <Briefcase size={24} />}
                    {service.icon === 'graduation' && <GraduationCap size={24} />}
                    {service.icon === 'trophy' && <Trophy size={24} />}
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;