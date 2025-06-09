"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Search, Filter } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SocialMediaIcons } from "@/components/social-media-icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// Define service categories and their services
const serviceCategories = [
  {
    name: "Personal Astrology",
    description: "Personalized astrological readings and analyses based on your birth chart",
    services: [
      {
        title: "PERSONAL HOROSCOPE",
        description: "Detailed analysis of your birth chart revealing your unique cosmic blueprint",
      },
      {
        title: "JANAMPATRI",
        description: "Traditional Vedic birth chart analysis with detailed predictions",
      },
      {
        title: "FULL ASTROLOGICAL REPORT",
        description: "Comprehensive analysis covering all aspects of your life and future",
      },
    ],
  },
  {
    name: "Timing & Forecasts",
    description: "Predictions and analyses for specific time periods in your life",
    services: [
      {
        title: "BEST MONTH OF THE YEAR",
        description: "Discover the most favorable month for important decisions and new beginnings",
      },
      {
        title: "BEST YEAR IN NEXT 10 YEARS",
        description: "Identify the most auspicious year in the coming decade for major life events",
      },
      {
        title: "ANNUAL PERSONALIZED TRANSIT REPORT",
        description: "Detailed analysis of planetary transits and their effects on your life for the coming year",
      },
      {
        title: "GOOD DAYS OF THE MONTH REPORT",
        description: "Identification of the most favorable days each month for important activities",
      },
    ],
  },
  {
    name: "Relationship Astrology",
    description: "Astrological insights into relationships and compatibility",
    services: [
      {
        title: "RELATIONSHIP COMPATIBILITY",
        description: "Detailed analysis of compatibility between you and your partner",
      },
      {
        title: "MARRIAGE TIME CALCULATION",
        description: "Determination of the most auspicious time for marriage based on your birth chart",
      },
    ],
  },
  {
    name: "Career & Finance",
    description: "Astrological guidance for professional and financial decisions",
    services: [
      {
        title: "CAREER GUIDANCE",
        description: "Insights into your professional path based on your birth chart",
      },
      {
        title: "LUCK IN SPECULATION REPORT",
        description: "Analysis of favorable periods for investments and financial decisions",
      },
    ],
  },
  {
    name: "Planetary Periods (Dashas)",
    description: "Analysis of major planetary periods and their influences on your life",
    services: [
      {
        title: "SHANI MAHADASHA REPORT",
        description: "Detailed analysis of Saturn's major period and its effects on your life",
      },
      {
        title: "RAHU MAHADASHA REPORT",
        description: "Insights into Rahu's major period and its transformative influences",
      },
      {
        title: "JUPITER MAHADASHA REPORT",
        description: "Analysis of Jupiter's major period and its expansive effects",
      },
      {
        title: "VENUS MAHADASHA REPORT",
        description: "Exploration of Venus's major period and its influences on relationships and comforts",
      },
      {
        title: "MERCURY MAHADASHA REPORT",
        description: "Analysis of Mercury's major period and its effects on communication and intellect",
      },
      {
        title: "MOON MAHADASHA REPORT",
        description: "Insights into Moon's major period and its emotional and intuitive influences",
      },
      {
        title: "KETU MAHADASHA REPORT",
        description: "Exploration of Ketu's major period and its spiritual and detachment effects",
      },
      {
        title: "SUN MAHADASHA REPORT",
        description: "Analysis of Sun's major period and its influences on authority and vitality",
      },
      {
        title: "MARS MAHADASHA REPORT",
        description: "Insights into Mars's major period and its energetic and assertive influences",
      },
    ],
  },
  {
    name: "Special Reports",
    description: "Specialized astrological analyses for specific concerns",
    services: [
      {
        title: "RAJ YOGA REPORT",
        description: "Analysis of royal combinations in your birth chart indicating success and prosperity",
      },
      {
        title: "SHANI SADE SAATI REPORT",
        description: "Detailed guidance for navigating Saturn's 7.5 year transit period",
      },
      {
        title: "QUESTION",
        description: "Astrological insights for specific questions using Prashna technique",
      },
    ],
  },
 
]

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  // Filter services based on search query and selected category
  const filteredServices = serviceCategories
    .filter((category) => selectedCategory === "All" || category.name === selectedCategory)
    .flatMap((category) =>
      category.services.filter(
        (service) =>
          service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          service.description.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    )

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-purple-50 dark:from-gray-900 dark:to-purple-950">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 overflow-hidden">
          {/* Clean gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-sky-50/70 to-purple-50/70 dark:from-gray-900/80 dark:to-purple-950/80"></div>

          {/* Subtle animated elements */}
          <div className="absolute inset-0 opacity-20 dark:opacity-30">
            <div className="absolute -right-[30%] -top-[20%] w-[80%] h-[80%] animate-[spin_240s_linear_infinite]">
              <div className="w-full h-full rounded-full border-2 border-amber-300/30 dark:border-amber-500/30"></div>
            </div>
            <div className="absolute -left-[10%] -bottom-[10%] w-[40%] h-[40%] animate-[spin_180s_linear_infinite_reverse]">
              <div className="w-full h-full rounded-full border-2 border-purple-300/30 dark:border-purple-500/30"></div>
            </div>
          </div>
        </div>

        <div className="container relative px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-purple-900 dark:text-purple-100 md:text-5xl">
                Our Astrological Services
              </h1>
              <p className="mb-8 text-lg text-purple-700 dark:text-purple-300">
                Discover our comprehensive range of astrological services designed to provide guidance, clarity, and
                insights for your life's journey
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white/50 dark:bg-gray-900/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-1/3">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
              <Input
                type="search"
                placeholder="Search services..."
                className="pl-10 border-purple-100 dark:border-purple-800 focus:border-purple-300 dark:focus:border-purple-700"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <Filter className="h-4 w-4 text-purple-700 dark:text-purple-300" />
              <span className="text-sm text-purple-700 dark:text-purple-300">Filter by:</span>
              <select
                className="rounded-md border border-purple-100 dark:border-purple-800 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-purple-900 dark:text-purple-100"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="All">All Categories</option>
                {serviceCategories.map((category) => (
                  <option key={category.name} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          {selectedCategory === "All" ? (
            // Show all categories
            serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-purple-900 dark:text-purple-100 md:text-3xl">
                    {category.name}
                  </h2>
                  <p className="mt-2 text-purple-700 dark:text-purple-300">{category.description}</p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: serviceIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="group rounded-lg border border-purple-100 dark:border-purple-800 bg-white dark:bg-gray-900 p-6 shadow-sm transition-all hover:shadow-md"
                    >
                      <h3 className="mb-2 text-xl font-medium text-purple-900 dark:text-purple-100">{service.title}</h3>
                      <p className="mb-4 text-purple-700 dark:text-purple-300">{service.description}</p>
                      <div className="flex justify-end">
                        <Link
                          href="/consultation"
                          className="inline-flex items-center text-sm rounded-full bg-gradient-to-r from-purple-500 to-purple-700 dark:from-purple-600 dark:to-purple-900 px-4 py-1 text-white transition-colors hover:from-purple-600 hover:to-purple-800"
                        >
                          Book Consultation
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))
          ) : (
            // Show filtered results
            <div>
              <h2 className="mb-8 text-2xl font-bold text-purple-900 dark:text-purple-100 md:text-3xl">
                {selectedCategory === "All" ? "All Services" : selectedCategory}
              </h2>

              {filteredServices.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredServices.map((service, index) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="group rounded-lg border border-purple-100 dark:border-purple-800 bg-white dark:bg-gray-900 p-6 shadow-sm transition-all hover:shadow-md"
                    >
                      <h3 className="mb-2 text-xl font-medium text-purple-900 dark:text-purple-100">{service.title}</h3>
                      <p className="mb-4 text-purple-700 dark:text-purple-300">{service.description}</p>
                      <div className="flex justify-end">
                        <Link
                          href="/consultation"
                          className="inline-flex items-center text-sm rounded-full bg-gradient-to-r from-purple-500 to-purple-700 dark:from-purple-600 dark:to-purple-900 px-4 py-1 text-white transition-colors hover:from-purple-600 hover:to-purple-800"
                        >
                          Book Consultation
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-purple-700 dark:text-purple-300 text-lg">
                    No services found matching your search criteria.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4 border-purple-300 text-purple-700 dark:border-purple-700 dark:text-purple-300"
                    onClick={() => {
                      setSearchQuery("")
                      setSelectedCategory("All")
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-white/50 dark:bg-gray-900/50">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-lg border border-purple-100 dark:border-purple-800 bg-white dark:bg-gray-900 shadow-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-amber-50 dark:from-purple-900/20 dark:to-amber-900/20 opacity-50"></div>
            <div className="relative p-8 md:p-12">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-purple-900 dark:text-purple-100 md:text-4xl">
                  Not Sure Which Service You Need?
                </h2>
                <p className="mb-8 text-purple-700 dark:text-purple-300 md:text-lg">
                  Book a consultation with our expert astrologers who will guide you to the most suitable services based
                  on your unique situation and concerns.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link href="/consultation">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-purple-500 to-purple-700 text-white hover:from-purple-600 hover:to-purple-800 dark:from-purple-600 dark:to-purple-900 text-base"
                    >
                      Book a Consultation
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-purple-300 text-purple-700 dark:border-purple-700 dark:text-purple-300"
                    >
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
      <SocialMediaIcons />
    </div>
  )
}
