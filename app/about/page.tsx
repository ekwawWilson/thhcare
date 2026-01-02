"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Target } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <Image
          src="/images/Caregiver1.jpg"
          alt="About Us"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Dedicated to transforming lives through compassionate,
              person-centered care
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Transformation Home Health LLC is a client-centered agency
                located in Centennial, Colorado, delivering both traditional
                home care and community-based developmental support. We believe
                that everyone deserves to live with dignity, independence, and
                purpose—whether at home or in the community.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team of dedicated professionals is committed to providing
                personalized care that meets the unique needs of each individual
                we serve. From seniors aging in place to individuals with
                intellectual and developmental disabilities (IDD), we&apos;re
                here to support life&apos;s journey with compassion, expertise,
                and unwavering dedication to improving the quality of life for
                those we care for.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-primary-50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  15+
                </div>
                <div className="text-gray-700 font-semibold">
                  Years Experience
                </div>
              </div>
              <div className="bg-secondary-50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-secondary-600 mb-2">
                  500+
                </div>
                <div className="text-gray-700 font-semibold">
                  Clients Served
                </div>
              </div>
              <div className="bg-green-50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">
                  100+
                </div>
                <div className="text-gray-700 font-semibold">
                  Care Professionals
                </div>
              </div>
              <div className="bg-orange-50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">
                  24/7
                </div>
                <div className="text-gray-700 font-semibold">
                  Support Available
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Our Mission and Vision
                </h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                The mission of Transformation Home Health LLC is to administer
                care, support and resources to our clients in the comfort of
                their homes and also to assist persons with Intellectual and
                developmental disability (IDD) to be healthy, safe and active
                members of their community.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be a trusted and respected provider of home health and
                community-based support services, recognized for our commitment
                to quality, compassion, and person-centered care. We envision a
                future where every individual we serve is empowered to live
                independently, safely, and with dignity in their chosen
                environment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl overflow-hidden shadow-xl relative h-96"
            >
              <Image
                src="/images/cooking.jpg"
                alt="Caregiver providing compassionate support to client"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Join Our Family
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Experience the Transformation Home Health difference. Let us
              support you or your loved ones today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/appointments"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-50 transform hover:scale-105 transition-all duration-200 shadow-xl text-center"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary-600 transform hover:scale-105 transition-all duration-200 text-center"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
