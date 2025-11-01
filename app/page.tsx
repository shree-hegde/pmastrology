"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { MoonStar, Star, ChevronRight, Calendar, Users, Sparkles, ArrowRight } from "lucide-react"
import { SocialMediaIcons } from "@/components/social-media-icons"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Home() {
  const [currentZodiac, setCurrentZodiac] = useState(0)
  const zodiacSigns = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentZodiac((prev) => (prev + 1) % zodiacSigns.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [zodiacSigns.length])

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-purple-50 dark:from-gray-900 dark:to-purple-950">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {/* Clean gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-sky-50/70 to-purple-50/70 dark:from-gray-900/80 dark:to-purple-950/80"></div>

          {/* Subtle animated elements */}
          <div className="absolute inset-0 opacity-20 dark:opacity-30">
            <div className="absolute -right-[20%] -top-[10%] w-[60%] h-[60%] animate-[spin_240s_linear_infinite]">
              <div className="w-full h-full rounded-full border-2 border-amber-300/30 dark:border-amber-500/30"></div>
            </div>
            <div className="absolute -left-[10%] -bottom-[10%] w-[40%] h-[40%] animate-[spin_180s_linear_infinite_reverse]">
              <div className="w-full h-full rounded-full border-2 border-purple-300/30 dark:border-purple-500/30"></div>
            </div>
          </div>
        </div>

        <div className="container relative px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-6 flex justify-center">
              <div className="relative h-20 w-20">
                <MoonStar className="h-20 w-20 text-purple-600 dark:text-purple-400" />
                <div className="absolute -inset-1 animate-pulse rounded-full bg-purple-400/20 dark:bg-purple-400/10 blur-lg"></div>
              </div>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-purple-900 dark:text-purple-100 md:text-6xl lg:text-7xl">
              Discover Your <span className="text-amber-500 dark:text-amber-400">Cosmic Path</span>
            </h1>
            <p className="mb-8 text-lg text-purple-700 dark:text-purple-300 md:text-xl">
              Expert astrological guidance to illuminate your journey and reveal the possibilities that await you
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/consultation">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-purple-700 text-white hover:from-purple-600 hover:to-purple-800 dark:from-purple-600 dark:to-purple-900 text-base px-8 py-6"
                >
                  Book a Consultation
                </Button>
              </Link>
               <Link href="/Kundali">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-purple-700 text-white hover:from-purple-600 hover:to-purple-800 dark:from-purple-600 dark:to-purple-900 text-base px-8 py-6"
                >
                  Order Kundali
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-purple-300 text-purple-700 dark:border-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/30 text-base px-8 py-6 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
                >
                  Explore Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating zodiac sign */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          <motion.div
            key={currentZodiac}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-2 rounded-full shadow-lg"
          >
            <p className="text-purple-800 dark:text-purple-200 font-medium">
              {zodiacSigns[currentZodiac]} • {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric" })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-16 md:py-24 bg-white/50 dark:bg-gray-900/50">
        <div className="container px-4 md:px-6">
          <div className="mb-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-purple-900 dark:text-purple-100 md:text-4xl">
                Premium Astrological Services
              </h2>
              <p className="mt-4 text-purple-700 dark:text-purple-300 md:text-lg">
                Discover clarity and guidance through our expert astrological services
              </p>
            </motion.div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Personal Horoscope",
                description: "Detailed analysis of your birth chart revealing your unique cosmic blueprint",
                icon: <Sparkles className="h-8 w-8 text-amber-500" />,
                link: "/services",
              },
              {
                title: "Relationship Compatibility",
                description: "Discover the celestial dynamics between you and your partner",
                icon: <Users className="h-8 w-8 text-amber-500" />,
                link: "/services",
              },
              {
                title: "Career Guidance",
                description: "Navigate your professional path with cosmic insights and timing",
                icon: <Calendar className="h-8 w-8 text-amber-500" />,
                link: "/services",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-lg border border-purple-100 dark:border-purple-800 bg-white dark:bg-gray-900 p-6 shadow-sm transition-all hover:border-purple-200 dark:hover:border-purple-700 hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30">
                  {service.icon}
                </div>
                <h3 className="mb-2 text-xl font-medium text-purple-900 dark:text-purple-100">{service.title}</h3>
                <p className="mb-4 text-purple-700 dark:text-purple-300">{service.description}</p>
                <Link
                  href={service.link}
                  className="inline-flex items-center text-amber-600 dark:text-amber-400 hover:underline"
                >
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Zodiac Signs Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-purple-50 to-sky-50 dark:from-gray-900 dark:to-purple-950">
        <div className="container px-4 md:px-6">
          <div className="mb-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-purple-900 dark:text-purple-100 md:text-4xl">
                Explore Your Zodiac Sign
              </h2>
              <p className="mt-4 text-purple-700 dark:text-purple-300 md:text-lg">
                Discover the unique traits and cosmic influences of your astrological sign
              </p>
            </motion.div>
          </div>

          <div className="relative mb-12 overflow-hidden rounded-xl border border-purple-100 dark:border-purple-800 bg-white/80 dark:bg-gray-900/80 p-6 shadow-md">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-amber-200 to-amber-400 opacity-20 blur-3xl dark:from-amber-700 dark:to-amber-900"></div>
            <div className="relative z-10 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
              {zodiacSigns.map((sign, index) => (
                <motion.div
                  key={sign}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center"
                >
                  <div className="flex flex-col items-center group">
                    <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30 p-3 group-hover:bg-amber-200 dark:group-hover:bg-amber-900/50 transition-colors">
                      <span className="text-2xl">{getZodiacEmoji(sign)}</span>
                    </div>
                    <span className="text-center text-sm font-medium text-purple-900 dark:text-purple-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                      {sign}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center">
          
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="detailed-services" className="py-16 md:py-24 bg-white/50 dark:bg-gray-900/50">
        <div className="container px-4 md:px-6">
          <div className="mb-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-purple-900 dark:text-purple-100 md:text-4xl">
                Our Services
              </h2>
              <p className="mt-4 text-purple-700 dark:text-purple-300 md:text-lg">
                Comprehensive astrological reports and calculations to guide your journey
              </p>
            </motion.div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "BEST MONTH OF THE YEAR",
              "BEST YEAR IN NEXT 10 YEARS",
              "ANNUAL PERSONALIZED TRANSIT REPORT",
              "MARRIAGE TIME CALCULATION",
              "SHANI MAHADASHA REPORT",
              "RAHU MAHADASHA REPORT",
              "JUPITER MAHADASHA REPORT",
              "VENUS MAHADASHA REPORT",
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="group relative overflow-hidden rounded-md bg-amber-100 dark:bg-amber-900/30 p-6 text-center transition-transform hover:shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900/40 dark:to-amber-800/20 opacity-50"></div>
                <h3 className="relative z-10 font-medium text-red-800 dark:text-amber-300">{service}</h3>
                <div className="relative z-10 mt-4">
                  <Link
                    href="/services"
                    className="inline-block rounded-full bg-gradient-to-r from-red-700 to-red-900 dark:from-red-800 dark:to-red-950 px-4 py-1 text-xs text-white transition-colors hover:from-red-800 hover:to-red-950 dark:hover:from-red-700 dark:hover:to-red-900"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/services">
              <Button
                variant="outline"
                className="border-purple-300 text-purple-700 dark:border-purple-700 dark:text-purple-300"
              >
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section - Redesigned without image */}
      <section
        id="about"
        className="py-16 md:py-24 bg-gradient-to-b from-sky-50 to-purple-50 dark:from-gray-900 dark:to-purple-950"
      >
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-purple-900 dark:text-purple-100 md:text-4xl">
              Guiding You Through Life's Journey
            </h2>

            <div className="mb-8 p-6 rounded-lg bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm border border-purple-100 dark:border-purple-800 shadow-sm">
              <p className="mb-6 text-purple-700 dark:text-purple-300 md:text-lg">
                Going through a rough phase in life? Facing challenges that seem insurmountable? The difficulties you
                experience are often influenced by the positioning of celestial bodies.
              </p>
              <p className="text-purple-700 dark:text-purple-300 md:text-lg">
                Our expert astrologers can help you understand the root causes of your challenges and illuminate the
                path forward. With personalized guidance based on your unique cosmic blueprint, you'll gain clarity and
                confidence to navigate life's journey.
              </p>
            </div>

            <Link href="/about">
              <Button className="bg-gradient-to-r from-purple-500 to-purple-700 text-white hover:from-purple-600 hover:to-purple-800 dark:from-purple-600 dark:to-purple-900">
                Learn More About Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-white/50 dark:bg-gray-900/50">
        <div className="container px-4 md:px-6">
          <div className="mb-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-purple-900 dark:text-purple-100 md:text-4xl">
                Why Choose PM Astrology
              </h2>
              <p className="mt-4 text-purple-700 dark:text-purple-300 md:text-lg">
                Experience the difference with our expert astrological guidance
              </p>
            </motion.div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Expert Astrologers",
                description: "Our team consists of highly experienced astrologers with decades of practice",
                icon: <Star className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
              },
              {
                title: "Personalized Approach",
                description: "Every consultation is tailored to your unique birth chart and specific concerns",
                icon: <Star className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
              },
              {
                title: "Accurate Predictions",
                description: "Our predictions are based on ancient wisdom combined with modern astrological techniques",
                icon: <Star className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
              },
              {
                title: "Practical Solutions",
                description: "We provide actionable guidance to help you navigate life's challenges",
                icon: <Star className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
              },
              {
                title: "Confidentiality",
                description: "Your personal information and consultations are kept strictly confidential",
                icon: <Star className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
              },
              {
                title: "Ongoing Support",
                description: "We're here to support you throughout your journey with follow-up consultations",
                icon: <Star className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 rounded-lg border border-purple-100 dark:border-purple-800 bg-white dark:bg-gray-900 p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/50">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-medium text-purple-900 dark:text-purple-100">{feature.title}</h3>
                  <p className="text-purple-700 dark:text-purple-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-16 md:py-24 bg-gradient-to-b from-purple-50 to-sky-50 dark:from-gray-900 dark:to-purple-950"
      >
        <div className="container px-4 md:px-6">
          <div className="mb-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-purple-900 dark:text-purple-100 md:text-4xl">
                Transformative Experiences
              </h2>
              <p className="mt-4 text-purple-700 dark:text-purple-300 md:text-lg">
                Hear from those whose lives have been illuminated by our astrological guidance
              </p>
            </motion.div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Priya Sharma",
                location: "Mumbai, India",
                image: "/client-1.png",
                testimonial:
                  "The insights provided by PM Astrology were incredibly accurate and helped me navigate a challenging period in my life. I'm truly grateful for the guidance.",
              },
              {
                name: "Rahul Mehta",
                location: "Delhi, India",
                image: "/client-2.png",
                testimonial:
                  "I was skeptical at first, but the career guidance I received was spot on. The remedies suggested have made a significant difference in my professional life.",
              },
              {
                name: "Ananya Patel",
                location: "Bangalore, India",
                image: "/client-3.png",
                testimonial:
                  "The relationship compatibility analysis helped me understand my partner better. We've been able to work through our differences with the insights provided.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-lg border border-purple-100 dark:border-purple-800 bg-white dark:bg-gray-900 p-6 shadow-sm"
              >
                <div className="mb-4 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-amber-500 dark:text-amber-400"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="mb-6 text-purple-700 dark:text-purple-300">"{testimonial.testimonial}"</p>
                <div className="flex items-center">
                  <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-purple-900 dark:text-purple-100">{testimonial.name}</div>
                    <div className="text-sm text-purple-600 dark:text-purple-400">{testimonial.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-16 md:py-24 bg-white/50 dark:bg-gray-900/50">
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
                  Begin Your Cosmic Journey Today
                </h2>
                <p className="mb-8 text-purple-700 dark:text-purple-300 md:text-lg">
                  Discover the insights and guidance that await you through personalized astrological consultation
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link href="/consultation">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-purple-500 to-purple-700 text-white hover:from-purple-600 hover:to-purple-800 dark:from-purple-600 dark:to-purple-900 text-base"
                    >
                      Book Your Consultation
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

// Helper function to get zodiac emoji
function getZodiacEmoji(sign: string): string {
  const emojis: Record<string, string> = {
    Aries: "♈",
    Taurus: "♉",
    Gemini: "♊",
    Cancer: "♋",
    Leo: "♌",
    Virgo: "♍",
    Libra: "♎",
    Scorpio: "♏",
    Sagittarius: "♐",
    Capricorn: "♑",
    Aquarius: "♒",
    Pisces: "♓",
  }
  return emojis[sign] || "✨"
}
