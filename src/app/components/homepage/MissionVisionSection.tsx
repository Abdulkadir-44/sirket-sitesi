'use client';

import { motion } from 'framer-motion';
import { EyeIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

export default function MissionVisionSection() {
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
          Misyon ve Vizyonumuz
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="text-center md:text-left"
          >
            <div className="flex justify-center md:justify-start mb-4">
              <RocketLaunchIcon className="h-12 w-12 text-primary-600 dark:text-orange-accent" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-heading">Misyonumuz</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Müşterilerimize en son teknolojileri kullanarak yenilikçi, güvenilir ve yüksek performanslı yazılım çözümleri sunarak dijital dönüşümlerine liderlik etmek ve iş hedeflerine ulaşmalarını sağlamak.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="text-center md:text-left"
          >
            <div className="flex justify-center md:justify-start mb-4">
              <EyeIcon className="h-12 w-12 text-primary-600 dark:text-orange-accent" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-heading">Vizyonumuz</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Yazılım sektöründe global bir lider olarak tanınmak ve dünya çapında işletmelerin teknoloji ile büyümesine ve başarılı olmasına ilham veren bir marka olmak.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
