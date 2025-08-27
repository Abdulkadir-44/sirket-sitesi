'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center px-6 bg-white dark:bg-dark-background">
      <div className="relative z-10 flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-dark-text mb-4 font-heading"
        >
          Dijital Geleceğinizi Birlikte İnşa Edelim
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeInOut' }}
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mb-8"
        >
          Modern teknolojilerle güçlü ve etkili dijital çözümler üretiyoruz. Web
          sitenizi, uygulamanızı veya özel yazılımınızı hayata geçiriyoruz.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeInOut' }}
          className="flex flex-col md:flex-row gap-4"
        >
          <Link
            href="/projeler"
            className="px-8 py-3 bg-primary-600 text-white rounded-lg text-lg font-semibold shadow-lg hover:bg-primary-700 transition-colors dark:bg-orange-accent dark:hover:bg-orange-hover"
          >
            Projelerimizi İncele
          </Link>
          <Link
            href="/iletisim"
            className="px-8 py-3 border border-primary-600 text-primary-600 rounded-lg text-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors dark:border-orange-accent dark:text-orange-accent dark:hover:bg-orange-accent dark:hover:text-white"
          >
            İletişime Geç
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
