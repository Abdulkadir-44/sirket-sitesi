'use client';

import { motion } from 'framer-motion';
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function ContactSection() {
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
          Bize Ulaşın
        </motion.h2>
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-heading">İletişim Bilgileri</h3>
            <div className="flex items-center mb-4">
              <MapPinIcon className="h-6 w-6 mr-3 text-primary-600 dark:text-orange-accent" />
              <p className="text-gray-700 dark:text-gray-300">123 Yazılım Sokak, Teknopark, İstanbul</p>
            </div>
            <div className="flex items-center mb-4">
              <EnvelopeIcon className="h-6 w-6 mr-3 text-primary-600 dark:text-orange-accent" />
              <p className="text-gray-700 dark:text-gray-300">info@sirket.com</p>
            </div>
            <div className="flex items-center mb-8">
              <PhoneIcon className="h-6 w-6 mr-3 text-primary-600 dark:text-orange-accent" />
              <p className="text-gray-700 dark:text-gray-300">+90 212 123 45 67</p>
            </div>
            <div className="h-64 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Map Placeholder</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">İsim</label>
                <input type="text" id="name" className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-600 dark:focus:ring-orange-accent" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input type="email" id="email" className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-600 dark:focus:ring-orange-accent" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">Mesaj</label>
                <textarea id="message" rows={4} className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-600 dark:focus:ring-orange-accent"></textarea>
              </div>
              <button type="submit" className="w-full px-8 py-3 bg-primary-600 text-white rounded-lg text-lg font-semibold shadow-lg hover:bg-primary-700 transition-colors dark:bg-orange-accent dark:hover:bg-orange-hover">
                Gönder
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
