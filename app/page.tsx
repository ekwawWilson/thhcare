"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, Users, Home, Shield, Clock, Award } from "lucide-react";
import HeroSlider from "@/components/ui/HeroSlider";
import PictureGallery from "@/components/ui/PictureGallery";
import { image } from "framer-motion/client";

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
        "Comprehensive assistance with feeding, bathing, toileting, medication reminders, and meal preparation in the comfort of your home.",
    },
    {
      type: "image" as const,
      src: "/images/disability.jpg",
      title: "Support for IDD Individuals",
      description:
        "Specialized services for persons with intellectual and developmental disabilities to be healthy, safe, and active community members.",
    },
    {
      type: "image" as const,
      src: "/images/developmental.jpeg",
      title: "Community Integration",
      description:
        "Community Connector and Supported Community Connections helping individuals discover resources and build meaningful social connections.",
    },
    {
      type: "image" as const,
      src: "/images/home-health.webp",
      title: "Person-Centered Approach",
      description:
        "Individualized support plans that respect personal choices, preferences, and goals for independent living.",
    },
    {
      type: "image" as const,
      src: "/images/caregiver-assisting.webp",
      title: "Adults Home Care",
      description: "Companionship, conversation, and emotional support.",
    },
  ];

  // Gallery images data
  const galleryImages = [
    {
      src: "/images/Community.jpg",
      alt: "Caregiver helping senior with daily activities",
      title: "Daily Living Support",
    },
    {
      src: "/images/Caregiver1.jpg",
      alt: "Home health nurse checking vitals",
      title: "Professional Health Monitoring",
    },
    {
      src: "/images/seniors.jpg",
      alt: "Senior enjoying outdoor activities with caregiver",
      title: "Outdoor Activities & Companionship",
    },
    {
      src: "/images/bigstock-Senior.jpg",
      alt: "Caregiver and senior cooking together",
      title: "Meal Preparation & Nutrition",
    },
    {
      src: "/images/physical.avif",
      alt: "Physical therapy session at home",
      title: "Rehabilitation Services",
    },
    {
      src: "/images/Care-Coordination.jpg",
      alt: "Family meeting with care coordinator",
      title: "Family Consultation",
    },
    {
      src: "/images/fun-activities-elderly.jpg",
      alt: "Senior participating in group activities",
      title: "Community Engagement",
    },
    {
      src: "/images/tips_for_choosing.jpg",
      alt: "Caregiver reading with senior",
      title: "Cognitive Stimulation",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-secondary-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              A House of Care
              <br />
              <span className="text-secondary-300">
                A Home of Transformation
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto"
            >
              Administering care, support and resources to clients in the
              comfort of their homes. Assisting persons with IDD to be healthy,
              safe and active members of their community.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-2 justify-center mb-8 relative z-10"
            >
              <Link
                href="/appointments"
                className="inline-block bg-white text-primary-600 px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-primary-50 transform hover:scale-105 transition-all duration-200 shadow-xl cursor-pointer"
              >
                Book an Appointment
              </Link>
              <Link
                href="/services"
                className="inline-block bg-transparent border-2 border-white text-white px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-white hover:text-primary-600 transform hover:scale-105 transition-all duration-200 cursor-pointer"
              >
                Explore Our Services
              </Link>
            </motion.div>
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
              { icon: Shield, text: "Licensed & Trained Professionals" },
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
                title: "Personal Care & Homemaker Services",
                description:
                  "Comprehensive assistance with feeding, bathing, toileting, incontinence care, medication reminders, meal preparation, housekeeping, laundry, cooking, and shopping.",
                icon: Home,
                image: "/images/Health-Nursing.jpg",
              },
              {
                title: "IHSS & IRSS Support",
                description:
                  "In-Home Support Services and Individual Residential Services for persons with intellectual and developmental disabilities to maintain independence in their homes and communities.",
                icon: Users,
                image: "/images/cooking.jpg",
              },
              {
                title: "Community Connections & Mentorship",
                description:
                  "Community Connector and Supported Community Connections services that help individuals discover resources, build social connections, and participate fully in community life.",
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
                title: "Seniors & Adults Needing Home Care",
                description:
                  "Personal care and homemaker services to help older adults and individuals maintain independence in their own homes throughout the Denver Metro area.",
                image: "/images/img2.jpg",
              },
              {
                title: "Individuals with IDD",
                description:
                  "Comprehensive IHSS, IRSS, and community-based support services for persons with intellectual and developmental disabilities in Arapahoe, Douglas, Elbert, Denver, Adams, and Jefferson Counties.",
                image: "/images/Picture1-2.jpg",
              },
              {
                title: "Colorado Families & Communities",
                description:
                  "Serving families throughout the Front Range with person-centered care, mentorship, and community integration services that promote dignity and inclusion.",
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
