"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Heart, Users, Home, Shield } from "lucide-react";
import HeroSlider from "@/components/ui/HeroSlider";
import PictureGallery from "@/components/ui/PictureGallery";

export default function HomePage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Slider slides data
  const sliderSlides = [
    {
      type: "image" as const,
      src: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1920&h=1080&fit=crop",
      title: "Personal Care Services",
      description:
        "Transformation home health provides individuals with assistance they need to complete their activities of daily living including feeding, bathing, mouth care, dressing, medication reminders, and more.",
    },
    {
      type: "image" as const,
      src: "/images/disability.jpg",
      title: "In-Home Support Services (IHSS)",
      description:
        "In-Home Support Services allows family members to get paid for providing care to loved ones with physical or mental disabilities.",
    },
    {
      type: "image" as const,
      src: "/images/individulasupport.jpg",
      title: "Individual Residential Services and Support (IRSS)",
      description:
        "Transformation home health has series of plan and arrangements put together to meet the unique needs for support and care of individuals interested in residential Support.",
    },
    {
      type: "image" as const,
      src: "/images/Caregivers-Cover-Slide.jpg",
      title: "Community Connector",
      description:
        "Transformation home health through Community Connection provides individuals under 18 years a program designed to help them access the community and its resources.",
    },
    {
      type: "image" as const,
      src: "/images/caregiving-featured.jpg",
      title: "Supported Community Connections",
      description:
        "Transformation Home health through Supported community Connections provides individuals with IDD the Support they need to live and participate in the Community safely.",
    },
  ];

  // Gallery images data
  const galleryImages = [
    {
      src: "/images/nailcare.jpg",
      alt: "Caregiver helping senior with daily activities",
      title: "Nail Care",
    },
    {
      src: "/images/Caregiver1.jpg",
      alt: "Home health nurse checking vitals",
      title: "Ostomy/Stoma Care",
    },
    {
      src: "/images/gocerycgare.jpg",
      alt: "Senior enjoying outdoor activities with caregiver",
      title: "Grocery Shopping",
    },
    {
      src: "/images/𝐊𝐢𝐭𝐜𝐡𝐞𝐧-𝐂𝐥𝐞𝐚𝐧𝐢𝐧𝐠-1.webp",
      alt: "Caregiver and senior cooking together",
      title: "Kitchen Cleaning",
    },
    {
      src: "/images/physical.avif",
      alt: "Physical therapy session at home",
      title: "Positioning",
    },
    {
      src: "/images/baseball.jpg",
      alt: "Family meeting with care coordinator",
      title: "Mentorship",
    },
    {
      src: "/images/BP.jpeg",
      alt: "Senior participating in group activities",
      title: "Monitoring of Chronic conditions",
    },
    {
      src: "/images/feedinf.jpeg",
      alt: "Caregiver reading with senior",
      title: "Feeding Assistance",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <Image
          src="/images/care11.png"
          alt="Home Care Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-4xl hidden lg:block"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            ></motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl"
            ></motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-row gap-4 relative z-10"
            >
              <Link
                href="/appointments"
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-50  hover:text-primary-600 transform hover:scale-105 transition-all duration-200 shadow-xl cursor-pointer text-center"
              >
                Book an Appointment
              </Link>
              <Link
                href="/services"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary-600 transform hover:scale-105 transition-all duration-200 cursor-pointer text-center"
              >
                Explore Our Services
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile CTA Buttons - Bottom positioned */}
        <div className="lg:hidden absolute bottom-24 left-0 right-0 px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-between gap-3"
          >
            <Link
              href="/appointments"
              className="flex-1 border-2 border-primary-600 text-primary-600 px-4 py-3 bg-white/60 rounded-md font-semibold text-xs hover:bg-primary-50 transition-all duration-200 shadow-lg text-center"
            >
              Book Appointment
            </Link>
            <Link
              href="/services"
              className="flex-1 border-2 border-primary-600 text-primary-600 px-4 py-3 bg-white/60 rounded-md font-semibold text-xs hover:bg-primary-50 transition-all duration-200 shadow-lg text-center"
            >
              Our Services
            </Link>
          </motion.div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0 -mb-1">
          <svg viewBox="0 0 1440 120" className="w-full h-auto block">
            <path
              fill="#ffffff"
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Image/Video Slider */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              See Our Care in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we support individuals and families in living their
              best lives
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full"
        >
          <HeroSlider slides={sliderSlides} autoPlayInterval={6000} />
        </motion.div>
      </section>

      {/* Trust Indicators */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
        className="py-16 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Shield, text: "Trained Professionals" },
              { icon: Heart, text: "Personalized Care Plans" },
              { icon: Home, text: "Home & Community Support" },
              { icon: Users, text: "Family-Centered Approach" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-100 rounded-full mb-4">
                  <item.icon className="w-8 h-8 text-secondary-500" />
                </div>
                <p className="text-gray-700 font-semibold">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* What We Do */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Care designed around individual needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Personal Care Services",
                description:
                  "Transformation home health provides individuals with assistance they need to complete their activities of daily living including feeding, bathing, mouth care, dressing, shaving, nail care, medication reminders, bowel/bladder care, hair care, transferring, positioning, and ambulation.",
                icon: Home,
                image: "/images/Health-Nursing.jpg",
              },
              {
                title: "In-Home Support Services (IHSS)",
                description:
                  "In-Home Support Services allows family members to get paid for providing care to loved ones with physical or mental disabilities. Transformation Home health provides training and support Client and families need to make them feel at their best.",
                icon: Users,
                image: "/images/cooking.jpg",
              },
              {
                title: "Community Connector & Supported Community Connections",
                description:
                  "Transformation home health through Community Connection provides individuals under 18 years a program designed to help them access the community and its resources.",
                icon: Heart,
                image: "/images/parkcare.png",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="card overflow-hidden group cursor-pointer p-0"
              >
                {/* Image Section */}
                <div className="h-48 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-300"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                </div>
                {/* Content Section */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-secondary-500" />
                    </div>
                    <h3 className="text-xl font-bold text-secondary-500">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Who We Serve */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Who We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Dedicated support for diverse needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Individuals Needing Assistance with Daily Living",
                description:
                  "Transformation home health provides individuals with assistance they need to complete their activities of daily living through Personal Care Services including feeding, bathing, dressing, medication reminders, and Homemaker Services including light housekeeping, laundry, and meal preparation.",
                image: "/images/img2.jpg",
              },
              {
                title:
                  "Persons with Intellectual and Developmental Disability (IDD)",
                description:
                  "We assist persons with Intellectual and developmental disability (IDD) to be healthy, safe and active members of their community through IHSS, IRSS (Host Home, Independent Living, Family Caregiver model), Community Connector for individuals under 18, and Supported Community Connections.",
                image: "/images/Picture1-2.jpg",
              },
              {
                title:
                  "Families Caring for Loved Ones with Physical or Mental Disabilities",
                description:
                  "In-Home Support Services (IHSS) allows family members to get paid for providing care to loved ones with physical or mental disabilities. We provide training and support families need including medication reminders, grocery shopping, bathing, dressing, meal preparation, and planning daily schedules.",
                image: "/images/community-health.jpg",
              },
            ].map((audience, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Image Section */}
                <div className="h-48 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transform hover:scale-105 transition-transform duration-300"
                    style={{ backgroundImage: `url(${audience.image})` }}
                  />
                </div>
                {/* Card Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-secondary-500 mb-4">
                    {audience.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {audience.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl mb-8 text-primary-100"
          >
            Let us help you or your loved ones receive the compassionate care
            they deserve.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/appointments"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-50 transform hover:scale-105 transition-all duration-200 shadow-xl"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary-600 transform hover:scale-105 transition-all duration-200"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Picture Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Care in Pictures
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the difference compassionate, professional care makes in the
              lives of those we serve
            </p>
          </motion.div>

          <PictureGallery images={galleryImages} />
        </div>
      </section>
    </div>
  );
}
