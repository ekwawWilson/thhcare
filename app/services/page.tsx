"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Home,
  Heart,
  Stethoscope,
  Users,
  Calendar,
  Lightbulb,
  Shield,
  HandHeart,
} from "lucide-react";

export default function ServicesPage() {
  const homeServices = [
    {
      icon: Heart,
      title: "Personal Care Services",
      description:
        "Transformation home health provides individuals with assistance they need to complete their activities of daily living. Services include feeding, bathing, mouth care, dressing, shaving, nail care, medication reminders, bowel/bladder care, hair care, transferring, positioning, and ambulation.",
      image: "/images/childcaregiver.webp",
    },
    {
      icon: Home,
      title: "Homemaker Services",
      description:
        "Transformation home health provides individuals with assistance of homemaker services to keep your home in order. Services include light house keeping, laundry, trash removal, bathroom cleaning, kitchen cleaning, sweeping, dish washing, shopping/errands, vacuuming, and bed making.",
      image: "/images/homemaker.avif",
    },
    {
      icon: Stethoscope,
      title: "In-Home Support Services (IHSS)",
      description:
        "In-Home Support Services allows family members to get paid for providing care to loved ones with physical or mental disabilities. Transformation Home health provides training and support Client and families need to make them feel at their best. Services include medication reminders, grocery shopping, bathing, dressing, laundry, light house keeping, planning daily schedule, watering house plants, meal preparation, and vacuuming.",
      image: "/images/ihss.jpg",
    },
    {
      icon: Users,
      title: "Individual Residential Services and Support (IRSS)",
      description:
        "Transformation home health has series of plan and arrangements put together to meet the unique needs for support and care of individuals in Service interested in residential Support. Services under IRSS includes Host Home, Independent Living, and Family Caregiver model.",
      image: "/images/adultpark.jpg",
    },
    {
      icon: Lightbulb,
      title: "Community Connector",
      description:
        "Transformation home health through Community Connection provides individuals under 18 years a program designed to help them access the community and its resources.",
      image: "/images/playground.jpeg",
    },
    {
      icon: HandHeart,
      title: "Supported Community Connections",
      description:
        "Transformation Home health through Supported community Connections provides individuals with Intellectual and developmental disability (IDD) the Support they need to live and participate in the Community safely.",
      image: "/images/community.webp",
    },
  ];

  const skilledServices = [
    {
      title: "Mentorship",
      description:
        "Transformation home health through mentorship program provides guidance to individuals interested in engaging and achieving a particular task through consistent training, teaching, mentoring and supervision.",
    },
    {
      title: "Skilled Nursing",
      description:
        "Our team of licensed nurses provides expert care. Transformation Home health provides patients with access to an on-call 24/7 Registered Nurse. Our Skilled nursing Services include but not limited to wound care management, ostomy/stoma care, pre and post surgery care, monitoring of chronic conditions, IV therapy, tube feeding, catheter care, drainage tube care, pain management, and medication management.",
    },
  ];

  const developmentalServices = [
    {
      icon: Home,
      title: "Host Home",
      description: "",
    },
    {
      icon: Users,
      title: "Independent Living",
      description: "",
    },
    {
      icon: HandHeart,
      title: "Family Caregiver Model",
      description: "",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[500px] overflow-hidden">
        <Image
          src="/images/Community.jpg"
          alt="Our Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Core Care Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive support for daily living and independence
            </p>
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
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
                <h3 className="text-xl font-bold text-secondary-900 mb-2">
                  Person-Centered Approach
                </h3>
                <p className="text-secondary-800">
                  All our services are tailored to each individual&apos;s unique
                  needs, preferences, and goals, ensuring personalized care that
                  promotes dignity and independence.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Additional Support Services
            </h2>
            <p className="text-xl text-gray-600">
              Enhanced care and mentorship for personal growth
            </p>
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
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Individual Residential Services and Support (IRSS)
            </h2>
            <p className="text-xl text-gray-600">
              Residential support options for individuals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Care Works
            </h2>
            <p className="text-xl text-gray-600">
              Our simple, personalized process
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Consultation",
                description: "We discuss your needs and preferences",
              },
              {
                step: "2",
                title: "Care Plan",
                description: "A customized plan is created for you",
              },
              {
                step: "3",
                title: "Matching",
                description: "We pair you with the perfect caregiver",
              },
              {
                step: "4",
                title: "Ongoing Support",
                description: "Regular check-ins and adjustments",
              },
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
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
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
