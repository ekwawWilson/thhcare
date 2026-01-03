"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Users, Heart, Home, Shield, Smile, HandHeart } from 'lucide-react';

export default function WhoWeServePage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[500px] overflow-hidden">
        <Image
          src="/images/bigstock-Senior.jpg"
          alt="Who We Serve"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Who We Serve</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Compassionate care for individuals and families across all stages of life
            </p>
          </motion.div>
        </div>
      </section>

      {/* Seniors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900">Individuals Needing Assistance with Daily Living</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Transformation home health provides individuals with assistance they need to complete their activities of daily living through Personal Care Services and Homemaker Services to keep your home in order.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-secondary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Skilled Nursing</h3>
                    <p className="text-gray-600">Our team of licensed nurses provides expert care with access to an on-call 24/7 Registered Nurse. Services include wound care management, ostomy/stoma care, pre and post surgery care, monitoring of chronic conditions, IV therapy, tube feeding, catheter care, drainage tube care, pain management, and medication management</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-secondary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Personal Care Services</h3>
                    <p className="text-gray-600">Feeding, bathing, mouth care, dressing, shaving, nail care, medication reminders, bowel/bladder care, hair care, transferring, positioning, and ambulation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-secondary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Homemaker Services</h3>
                    <p className="text-gray-600">Light housekeeping, laundry, trash removal, bathroom cleaning, kitchen cleaning, sweeping, dish washing, shopping/errands, vacuuming, and bed making</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="card bg-gradient-to-br from-blue-50 to-blue-100">
                <Home className="w-10 h-10 text-blue-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Home Safety</h3>
                <p className="text-gray-600 text-sm">Fall prevention and home modifications</p>
              </div>
              <div className="card bg-gradient-to-br from-green-50 to-green-100">
                <Heart className="w-10 h-10 text-green-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Health Monitoring</h3>
                <p className="text-gray-600 text-sm">Regular vital signs and wellness checks</p>
              </div>
              <div className="card bg-gradient-to-br from-purple-50 to-purple-100">
                <Smile className="w-10 h-10 text-purple-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Social Activities</h3>
                <p className="text-gray-600 text-sm">Engagement and community participation</p>
              </div>
              <div className="card bg-gradient-to-br from-orange-50 to-orange-100">
                <Shield className="w-10 h-10 text-orange-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Respite Care</h3>
                <p className="text-gray-600 text-sm">Temporary relief for family caregivers</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Individuals with Disabilities */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="space-y-6">
                <div className="card group hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Home className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">IRSS - Residential Support</h3>
                      <p className="text-gray-600">Host Home, Independent Living, and Family Caregiver model options for residential support</p>
                    </div>
                  </div>
                </div>

                <div className="card group hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Community Connector</h3>
                      <p className="text-gray-600">Programs for individuals under 18 to access community and its resources</p>
                    </div>
                  </div>
                </div>

                <div className="card group hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <HandHeart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Mentorship</h3>
                      <p className="text-gray-600">Guidance through consistent training, teaching, mentoring and supervision</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-xl flex items-center justify-center">
                  <HandHeart className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900">Persons with Intellectual and Developmental Disability (IDD)</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We assist persons with Intellectual and developmental disability (IDD) to be healthy, safe and active members of their community through comprehensive support services.
              </p>
              <div className="bg-secondary-50 border-2 border-secondary-200 rounded-xl p-6">
                <h3 className="font-bold text-secondary-900 mb-3">Our Services for IDD</h3>
                <ul className="space-y-2 text-secondary-800">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-600 mt-1">✓</span>
                    <span>In-Home Support Services (IHSS) - Training and support for daily living</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-600 mt-1">✓</span>
                    <span>Individual Residential Services and Support (IRSS) - Host Home, Independent Living, Family Caregiver model</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-600 mt-1">✓</span>
                    <span>Community Connector - Programs for individuals under 18 to access community resources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-600 mt-1">✓</span>
                    <span>Supported Community Connections - Support to live and participate in the community safely</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Families & Caregivers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Families Caring for Loved Ones with Physical or Mental Disabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In-Home Support Services (IHSS) allows family members to get paid for providing care to loved ones with physical or mental disabilities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'IHSS Training & Support',
                description: 'Transformation Home health provides training and support clients and families need to make them feel at their best',
                icon: Shield
              },
              {
                title: 'Daily Living Assistance',
                description: 'Medication reminders, grocery shopping, bathing, dressing, laundry, light housekeeping, planning daily schedule, meal preparation',
                icon: Heart
              },
              {
                title: 'Family Caregiver Model',
                description: 'Services that enable family members to provide care and support to their loved ones with IDD in a familiar, comfortable home setting',
                icon: HandHeart
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card group hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Let Us Support You
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Whatever your care needs, we&apos;re here to help. Schedule a consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/appointments"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-50 transform hover:scale-105 transition-all duration-200 shadow-xl"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/services"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary-600 transform hover:scale-105 transition-all duration-200"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
