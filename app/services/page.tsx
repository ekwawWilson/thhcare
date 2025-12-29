"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Home, Heart, Stethoscope, Users, Calendar, Lightbulb, Shield, HandHeart } from 'lucide-react';

export default function ServicesPage() {
  const homeServices = [
    {
      icon: Heart,
      title: 'Personal Care Services',
      description: 'Comprehensive assistance with feeding, bathing, toileting, incontinence care, medication reminders, and meal preparation to support daily living activities.',
      image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&h=500&fit=crop'
    },
    {
      icon: Home,
      title: 'Homemaker Services',
      description: 'Housekeeping, laundry, cooking, shopping, medication reminders, and meal preparation to maintain a comfortable and safe home environment.',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=500&fit=crop'
    },
    {
      icon: Stethoscope,
      title: 'IHSS (In-Home Support Services)',
      description: 'Specialized support for individuals with intellectual and developmental disabilities to maintain independence in their homes.',
      image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=500&fit=crop'
    },
    {
      icon: Users,
      title: 'IRSS (Residential Services & Support)',
      description: 'Individual residential services and support for persons with intellectual and developmental disabilities living in community settings.',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=500&fit=crop'
    },
    {
      icon: Lightbulb,
      title: 'Community Connector',
      description: 'Short-term services helping individuals discover and connect with community resources, supports, and recreational opportunities.',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=500&fit=crop'
    },
    {
      icon: HandHeart,
      title: 'Supported Community Connections',
      description: 'Ongoing support for individuals to participate fully in community life through access to resources, activities, and social connections.',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=500&fit=crop'
    },
  ];

  const skilledServices = [
    {
      title: 'Mentorship Services',
      description: 'Guidance and support to help individuals develop skills, build confidence, and achieve personal goals in home and community settings.'
    },
    {
      title: 'Life Skills Development',
      description: 'Training in daily living skills, money management, social interactions, and independent living to promote self-sufficiency.'
    },
    {
      title: 'Health & Wellness Support',
      description: 'Assistance with medication management, appointment scheduling, and coordination of healthcare services to maintain optimal health.'
    },
    {
      title: 'Family Support Services',
      description: 'Respite care and family consultation services to support caregivers and families in their care journey.'
    },
  ];

  const developmentalServices = [
    {
      icon: Shield,
      title: 'Safety & Advocacy',
      description: 'Ensuring safe environments and advocating for the rights and needs of individuals with IDD in all settings.'
    },
    {
      icon: Users,
      title: 'Social Integration',
      description: 'Supporting meaningful relationships, social connections, and full participation in community activities.'
    },
    {
      icon: Calendar,
      title: 'Activity Planning',
      description: 'Coordinating recreational activities, community events, and social opportunities tailored to individual interests.'
    },
    {
      icon: HandHeart,
      title: 'Person-Centered Care',
      description: 'Individualized support plans that respect personal choices, preferences, and goals for independent living.'
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
              Comprehensive care solutions designed around your unique needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Home Care Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Care Services</h2>
            <p className="text-xl text-gray-600">Comprehensive support for daily living and independence</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 card bg-secondary-50 border-2 border-secondary-200"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-secondary-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary-900 mb-2">Person-Centered Approach</h3>
                <p className="text-secondary-800">
                  All our services are tailored to each individual&apos;s unique needs, preferences, and goals, ensuring personalized care that promotes dignity and independence.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skilled & Wellness */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Support Services</h2>
            <p className="text-xl text-gray-600">Enhanced care and mentorship for personal growth</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {skilledServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Developmental Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Community & Developmental Support</h2>
            <p className="text-xl text-gray-600">Promoting community integration and person-centered care</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {developmentalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="card group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Care Works */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How Care Works</h2>
            <p className="text-xl text-gray-600">Our simple, personalized process</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Consultation', description: 'We discuss your needs and preferences' },
              { step: '2', title: 'Care Plan', description: 'A customized plan is created for you' },
              { step: '3', title: 'Matching', description: 'We pair you with the perfect caregiver' },
              { step: '4', title: 'Ongoing Support', description: 'Regular check-ins and adjustments' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-primary-100">
              Schedule a free consultation to discuss your care needs
            </p>
            <Link
              href="/appointments"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-50 transform hover:scale-105 transition-all duration-200 shadow-xl"
            >
              Book Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
