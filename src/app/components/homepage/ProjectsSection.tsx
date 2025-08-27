'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'Proje 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    link: '/projects/1',
  },
  {
    title: 'Proje 2',
    description: 'Pellentesque in ipsum id orci porta dapibus.',
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    link: '/projects/2',
  },
  {
    title: 'Proje 3',
    description: 'Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    link: '/projects/3',
  },
];

export default function ProjectsSection() {
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
          Öne Çıkan Projelerimiz
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeInOut' }}
            >
              <Link href={project.link}>
                <div className="block bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 font-heading">{project.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
