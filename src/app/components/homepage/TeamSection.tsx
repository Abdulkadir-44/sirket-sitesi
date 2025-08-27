'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Ahmet Yılmaz',
    role: 'CEO & Kurucu',
    imageUrl: 'https://picsum.photos/seed/team1/200/200',
  },
  {
    name: 'Ayşe Kaya',
    role: 'Proje Yöneticisi',
    imageUrl: 'https://picsum.photos/seed/team2/200/200',
  },
  {
    name: 'Mehmet Demir',
    role: 'Yazılım Geliştirici',
    imageUrl: 'https://picsum.photos/seed/team3/200/200',
  },
  {
    name: 'Fatma Çelik',
    role: 'UI/UX Tasarımcısı',
    imageUrl: 'https://picsum.photos/seed/team4/200/200',
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 font-heading"
        >
          Ekibimizle Tanışın
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeInOut' }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="rounded-full mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 font-heading">{member.name}</h3>
              <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
