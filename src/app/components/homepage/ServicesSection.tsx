'use client';

import { motion } from 'framer-motion';
import {
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  CloudIcon,
  RectangleGroupIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Web Geliştirme',
    description: 'Modern ve performanslı web siteleri ve uygulamaları geliştiriyoruz.',
    icon: ComputerDesktopIcon,
  },
  {
    title: 'Mobil Uygulama',
    description: 'iOS ve Android için kullanıcı dostu mobil uygulamalar tasarlıyoruz.',
    icon: DevicePhoneMobileIcon,
  },
  {
    title: 'UI/UX Tasarımı',
    description: 'Kullanıcı deneyimini ön planda tutan estetik ve işlevsel arayüzler tasarlıyoruz.',
    icon: RectangleGroupIcon,
  },
  {
    title: 'Bulut Çözümleri',
    description: 'İşletmenizi buluta taşıyarak verimliliği ve ölçeklenebilirliği artırıyoruz.',
    icon: CloudIcon,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white dark:bg-dark-background">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 font-heading"
        >
          Hizmetlerimiz
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeInOut' }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex justify-center mb-4">
                <service.icon className="h-16 w-16 text-primary-600 dark:text-orange-accent" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 font-heading">{service.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
