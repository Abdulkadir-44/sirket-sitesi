import React from 'react';
import { motion } from 'framer-motion';
import { CogIcon, CodeBracketIcon, ServerIcon } from '@heroicons/react/24/outline';

const services = [
  {
    name: 'Custom Software Development',
    description: 'We build custom software solutions tailored to your business needs.',
    icon: CogIcon,
  },
  {
    name: 'Web Development',
    description: 'We create modern and responsive websites that look great on all devices.',
    icon: CodeBracketIcon,
  },
  {
    name: 'API Development',
    description: 'We design and build robust and scalable APIs for your applications.',
    icon: ServerIcon,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-light-background dark:bg-dark-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-light-text dark:text-dark-text">Our Services</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">
            We offer a wide range of services to help you achieve your business goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 dark:bg-orange-900 mb-6">
                <service.icon className="h-8 w-8 text-light-primary dark:text-dark-primary" />
              </div>
              <h3 className="text-2xl font-bold text-light-text dark:text-dark-text mb-4">{service.name}</h3>
              <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
