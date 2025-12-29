"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  BookOpen,
  FileText,
  ExternalLink,
  Phone,
  Mail,
  HelpCircle,
} from "lucide-react";

export default function ResourcesPage() {
  const faqs = [
    {
      question: "How do I get started with your services?",
      answer:
        "Contact us at (720) 668-1225 or email Transformationhomehealth@gmail.com to schedule a free consultation. We'll discuss your needs and create a personalized care plan.",
    },
    {
      question: "What is the difference between IHSS and IRSS?",
      answer:
        "IHSS (In-Home Support Services) provides support for individuals with IDD to maintain independence in their homes. IRSS (Individual Residential Services & Support) offers residential support in community settings for persons with IDD.",
    },
    {
      question: "What areas of Colorado do you serve?",
      answer:
        "We serve Arapahoe, Douglas, Elbert, Denver, Adams, and Jefferson Counties. Our CMA catchment areas include the Denver Metro Area and surrounding Front Range communities.",
    },
    {
      question: "Do you accept Medicaid?",
      answer:
        "Yes, we work with Colorado Medicaid programs, Community Centered Boards (CCBs), and Regional Accountability Entities (RAEs). Contact us to discuss your specific coverage and eligibility.",
    },
    {
      question: "What are your office hours?",
      answer:
        "Our office is open Monday through Friday, 8:00 AM to 5:00 PM. You can reach us at (720) 668-1225 during business hours or email us anytime at Transformationhomehealth@gmail.com.",
    },
    {
      question: "What services do you provide for individuals with IDD?",
      answer:
        "We provide IHSS, IRSS, Community Connector, Supported Community Connections, mentorship, life skills development, and person-centered care services designed to promote independence, safety, and community integration.",
    },
  ];

  const externalResources = [
    {
      title: "Developmental Pathway",
      description: "CMA serving Arapahoe, Douglas, and Elbert Counties",
      url: "https://www.dpcolo.org",
    },
    {
      title: "Rocky Mountain Human Services",
      description: "CMA serving Adams and Denver Counties",
      url: "https://www.rmhumanservices.org",
    },
    {
      title: "Developmental Disability Resource Center (DDRC)",
      description: "Colorado developmental disability resource center",
      url: "https://www.ddrcco.com",
    },
    {
      title: "Mental Health America",
      description: "Mental health resources and advocacy",
      url: "https://www.nmha.org",
    },
    {
      title: "Community Centered Boards (CCBs)",
      description:
        "Colorado network of organizations providing services to individuals with IDD",
      url: "https://www.ccbcolorado.org",
    },
    {
      title: "Regional Accountability Entities (RAEs)",
      description:
        "Colorado Health First RAE overseeing Medicaid services coordination",
      url: "https://www.colorado.gov/hcpf",
    },
    {
      title: "Colorado Department of Health Care Policy & Financing",
      description:
        "State agency administering Medicaid and other health programs",
      url: "https://hcpf.colorado.gov",
    },
    {
      title: "Arc of Colorado",
      description:
        "Advocacy and support for individuals with intellectual and developmental disabilities",
      url: "https://www.thearcofco.org",
    },
    {
      title: "Colorado Cross-Disability Coalition",
      description: "Advocacy and resources for people with disabilities",
      url: "https://ccdconline.org",
    },
    {
      title: "Aging and Disability Resources for Colorado (ADRC)",
      description:
        "Information and assistance for older adults and people with disabilities",
      url: "https://www.colorado.gov/adrc",
    },
  ];

  const cmaAreas = [
    {
      organization: "Developmental Pathway",
      counties: ["Arapahoe County", "Douglas County", "Elbert County"],
      color: "border-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      organization: "Rocky Mountain Human Services",
      counties: ["Adams County", "Denver County"],
      color: "border-green-500",
      bgColor: "bg-green-50",
    },
    {
      organization: "Jefferson County CMA",
      counties: ["Clear Creek County", "Jefferson County"],
      color: "border-purple-500",
      bgColor: "bg-purple-50",
    },
    {
      organization: "Adult Care Management Inc.",
      counties: ["Boulder County", "Broomfield County", "Gilpin County"],
      color: "border-orange-500",
      bgColor: "bg-orange-50",
    },
    {
      organization: "Resource Exchange",
      counties: ["El Paso County", "Park County", "Teller County"],
      color: "border-red-500",
      bgColor: "bg-red-50",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Resources</h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
              Educational resources, partner organizations, and service
              information for Colorado families
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Resources</h2>
            <p className="text-xl text-gray-600">
              Colorado developmental pathway organizations and resources
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: ExternalLink,
                title: "Developmental Pathway",
                description: "Colorado developmental pathway organization",
                url: "https://www.dpcolo.org",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: ExternalLink,
                title: "Developmental Disability Resource Center",
                description: "DDRC - Developmental disability resource center",
                url: "https://www.ddrcco.com",
                color: "from-green-500 to-green-600",
              },
              {
                icon: ExternalLink,
                title: "Mental Health America",
                description: "Mental health resources and advocacy",
                url: "https://www.nmha.org",
                color: "from-purple-500 to-purple-600",
              },
              {
                icon: ExternalLink,
                title: "Rocky Mountain Human Services",
                description: "Developmental pathway and community services",
                url: "https://www.rmhumanservices.org",
                color: "from-orange-500 to-orange-600",
              },
            ].map((resource, index) => (
              <motion.a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="card group cursor-pointer"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${resource.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <resource.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600">{resource.description}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-primary-600 flex-shrink-0 transition-colors" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 bg-secondary-100 rounded-full mb-4">
              <HelpCircle className="w-7 h-7 text-secondary-500" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start gap-3">
                  <span className="text-primary-600 flex-shrink-0">Q:</span>
                  <span>{faq.question}</span>
                </h3>
                <p className="text-gray-600 pl-7">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* External Resources */}

      {/* Service Coverage Areas */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Service Coverage Areas
            </h2>
            <p className="text-xl text-gray-600">
              CMA Catchment Areas Across Colorado
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {cmaAreas.map((cma, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 ${cma.color}`}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {cma.organization}
                </h3>
                <div className={`${cma.bgColor} rounded-lg p-4`}>
                  <p className="text-sm font-semibold text-gray-700 mb-2">
                    CMA Catchment Area:
                  </p>
                  <ul className="space-y-1">
                    {cma.counties.map((county, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                        {county}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 card bg-secondary-50 border-2 border-secondary-200 text-center"
          >
            <p className="text-secondary-900 text-lg">
              <strong>Comprehensive Coverage:</strong> Through our network of
              partner CMAs, we help connect individuals with IDD services across
              Colorado&apos;s Front Range and surrounding counties.
            </p>
            <p className="text-secondary-800 mt-3">
              Contact us to confirm service availability in your specific
              location or to get connected with the appropriate CMA for your
              area.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Our team is here to help. Reach out anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-primary-200">Call Us</div>
                  <a
                    href="tel:+17206681225"
                    className="text-lg font-bold hover:text-primary-100"
                  >
                    +1 (720) 668-1225
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-primary-200">Email Us</div>
                  <a
                    href="mailto:Transformationhomehealth@gmail.com"
                    className="text-lg font-bold hover:text-primary-100"
                  >
                    Transformationhomehealth@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-50 transform hover:scale-105 transition-all duration-200 shadow-xl"
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
