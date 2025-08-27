import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    name: 'Project One',
    description: 'A brief description of the first project.',
    imageUrl: '/placeholder1.svg',
    link: '#',
  },
  {
    name: 'Project Two',
    description: 'A brief description of the second project.',
    imageUrl: '/placeholder2.svg',
    link: '#',
  },
  {
    name: 'Project Three',
    description: 'A brief description of the third project.',
    imageUrl: '/placeholder3.svg',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-light-background dark:bg-dark-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-light-text dark:text-dark-text">Our Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">
            Check out some of our recent work.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Image src={project.imageUrl} alt={project.name} width={500} height={300} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-light-text dark:text-dark-text mb-2">{project.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-block bg-light-primary dark:bg-dark-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
