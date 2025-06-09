"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Star, Heart, Briefcase, Users, Calendar, Sparkles } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SocialMediaIcons } from "@/components/social-media-icons"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

// Zodiac sign data
const zodiacData = {
  aries: {
    name: "Aries",
    symbol: "♈",
    element: "Fire",
    quality: "Cardinal",
    rulingPlanet: "Mars",
    dates: "March 21 - April 19",
    description:
      "Aries is the first sign of the zodiac, symbolizing new beginnings, leadership, and pioneering spirit. Known for their courage, enthusiasm, and determination.",
    traits: {
      positive: ["Courageous", "Determined", "Confident", "Enthusiastic", "Optimistic", "Honest", "Passionate"],
      negative: ["Impatient", "Moody", "Short-tempered", "Impulsive", "Aggressive"],
    },
    personality:
      "Aries individuals are natural-born leaders who love to be first in everything they do. They are energetic, dynamic, and always ready to take on new challenges. Their pioneering spirit makes them excellent at starting new projects, though they may struggle with follow-through. Aries people are direct, honest, and passionate about their beliefs.",
    love: "In relationships, Aries are passionate and intense lovers. They fall in love quickly and aren't afraid to make the first move. They need partners who can match their energy and independence. Aries value honesty and directness in relationships and can be very protective of their loved ones.",
    career:
      "Aries excel in careers that allow them to lead and take initiative. They thrive in competitive environments and are natural entrepreneurs. Ideal careers include business leadership, sports, military, emergency services, and any field that requires quick decision-making and courage.",
    compatibility: {
      best: ["Leo", "Sagittarius", "Gemini", "Aquarius"],
      challenging: ["Cancer", "Capricorn"],
    },
    luckyNumbers: [1, 8, 17],
    luckyColors: ["Red", "Orange", "Yellow"],
    birthstone: "Diamond",
  },
  taurus: {
    name: "Taurus",
    symbol: "♉",
    element: "Earth",
    quality: "Fixed",
    rulingPlanet: "Venus",
    dates: "April 20 - May 20",
    description:
      "Taurus is known for stability, reliability, and a love for the finer things in life. They are practical, determined, and have a strong appreciation for beauty and comfort.",
    traits: {
      positive: ["Reliable", "Patient", "Practical", "Devoted", "Responsible", "Stable"],
      negative: ["Stubborn", "Possessive", "Uncompromising", "Materialistic"],
    },
    personality:
      "Taurus individuals are known for their steady, reliable nature. They value security and stability above all else and work hard to create a comfortable life. They have excellent taste and appreciate beauty in all forms. While they can be stubborn, this also makes them incredibly determined and persistent.",
    love: "Taurus are loyal and devoted partners who value long-term relationships. They express love through physical affection and acts of service. They need security and stability in relationships and can be possessive of their partners. They appreciate romantic gestures and enjoy creating beautiful, comfortable homes.",
    career:
      "Taurus excel in careers that offer stability and allow them to work with their hands or create beautiful things. They are excellent with money and make great financial advisors, bankers, or accountants. Other suitable careers include agriculture, cooking, art, music, and real estate.",
    compatibility: {
      best: ["Virgo", "Capricorn", "Cancer", "Pisces"],
      challenging: ["Leo", "Aquarius"],
    },
    luckyNumbers: [2, 6, 9, 12, 24],
    luckyColors: ["Green", "Pink", "Blue"],
    birthstone: "Emerald",
  },
  gemini: {
    name: "Gemini",
    symbol: "♊",
    element: "Air",
    quality: "Mutable",
    rulingPlanet: "Mercury",
    dates: "May 21 - June 20",
    description:
      "Gemini is the sign of communication, curiosity, and adaptability. They are quick-witted, versatile, and always eager to learn something new.",
    traits: {
      positive: ["Adaptable", "Outgoing", "Intelligent", "Curious", "Witty", "Charming"],
      negative: ["Inconsistent", "Superficial", "Indecisive", "Anxious", "Restless"],
    },
    personality:
      "Gemini individuals are the social butterflies of the zodiac. They are curious about everything and everyone, making them excellent conversationalists. They have quick minds and can adapt to almost any situation. However, they can sometimes struggle with consistency and may have difficulty making decisions.",
    love: "In relationships, Gemini need mental stimulation and variety. They are attracted to intelligent, witty partners who can keep up with their quick minds. They express love through communication and shared experiences. Gemini need freedom in relationships and don't like to feel tied down.",
    career:
      "Gemini excel in careers that involve communication, writing, teaching, or working with people. They make excellent journalists, teachers, salespeople, translators, and social media managers. They thrive in dynamic environments where they can use their versatility and quick thinking.",
    compatibility: {
      best: ["Libra", "Aquarius", "Aries", "Leo"],
      challenging: ["Virgo", "Pisces"],
    },
    luckyNumbers: [5, 7, 14, 23],
    luckyColors: ["Yellow", "Silver", "Green"],
    birthstone: "Pearl",
  },
  cancer: {
    name: "Cancer",
    symbol: "♋",
    element: "Water",
    quality: "Cardinal",
    rulingPlanet: "Moon",
    dates: "June 21 - July 22",
    description:
      "Cancer is the nurturer of the zodiac, known for their emotional depth, intuition, and strong connection to home and family.",
    traits: {
      positive: ["Loyal", "Emotional", "Sympathetic", "Persuasive", "Intuitive", "Caring"],
      negative: ["Moody", "Pessimistic", "Suspicious", "Manipulative", "Insecure"],
    },
    personality:
      "Cancer individuals are deeply emotional and intuitive. They have strong connections to their family and home, often serving as the caretakers in their relationships. They are highly empathetic and can easily pick up on others' emotions. While they can be moody, they are also incredibly loyal and protective of those they love.",
    love: "Cancer are devoted and nurturing partners who value emotional security in relationships. They are looking for deep, meaningful connections and often seek partners who can provide stability. They express love through caring actions and creating a warm, welcoming home environment.",
    career:
      "Cancer excel in careers that allow them to help and nurture others. They make excellent nurses, teachers, social workers, counselors, and chefs. They also do well in real estate, hospitality, and any career that involves creating comfortable environments for others.",
    compatibility: {
      best: ["Scorpio", "Pisces", "Taurus", "Virgo"],
      challenging: ["Aries", "Libra"],
    },
    luckyNumbers: [2, 7, 11, 16, 20, 25],
    luckyColors: ["White", "Silver", "Sea Green"],
    birthstone: "Ruby",
  },
  leo: {
    name: "Leo",
    symbol: "♌",
    element: "Fire",
    quality: "Fixed",
    rulingPlanet: "Sun",
    dates: "July 23 - August 22",
    description:
      "Leo is the sign of creativity, leadership, and self-expression. They are confident, generous, and love to be in the spotlight.",
    traits: {
      positive: ["Creative", "Passionate", "Generous", "Warm-hearted", "Cheerful", "Humorous"],
      negative: ["Arrogant", "Stubborn", "Self-centered", "Lazy", "Inflexible"],
    },
    personality:
      "Leo individuals are natural performers who love to be the center of attention. They are confident, charismatic, and have a flair for the dramatic. They are generous with their time and resources and love to make others feel special. However, they can sometimes be overly proud and may struggle with criticism.",
    love: "Leo are passionate and romantic partners who love to shower their loved ones with attention and gifts. They need appreciation and admiration in relationships and enjoy being the center of their partner's world. They are loyal and protective but can be possessive.",
    career:
      "Leo excel in careers that allow them to be creative and take center stage. They make excellent actors, musicians, artists, teachers, and leaders. They thrive in positions where they can inspire and motivate others and are natural entrepreneurs.",
    compatibility: {
      best: ["Aries", "Sagittarius", "Gemini", "Libra"],
      challenging: ["Taurus", "Scorpio"],
    },
    luckyNumbers: [1, 3, 10, 19],
    luckyColors: ["Gold", "Orange", "Red"],
    birthstone: "Peridot",
  },
  virgo: {
    name: "Virgo",
    symbol: "♍",
    element: "Earth",
    quality: "Mutable",
    rulingPlanet: "Mercury",
    dates: "August 23 - September 22",
    description:
      "Virgo is known for their attention to detail, analytical mind, and desire to help others. They are practical, organized, and strive for perfection.",
    traits: {
      positive: ["Loyal", "Analytical", "Kind", "Hardworking", "Practical", "Reliable"],
      negative: ["Shyness", "Worry", "Overly critical", "Perfectionist", "Conservative"],
    },
    personality:
      "Virgo individuals are detail-oriented perfectionists who strive for excellence in everything they do. They are practical, analytical, and have a strong desire to help others. They can be shy and reserved but are incredibly loyal friends and partners. They may struggle with self-criticism and worry.",
    love: "Virgo are devoted and caring partners who express love through acts of service. They may be slow to open up emotionally but are incredibly loyal once committed. They appreciate partners who are reliable and share their values of hard work and dedication.",
    career:
      "Virgo excel in careers that require attention to detail and helping others. They make excellent doctors, nurses, teachers, accountants, editors, and researchers. They thrive in organized environments where they can use their analytical skills to solve problems.",
    compatibility: {
      best: ["Taurus", "Capricorn", "Cancer", "Scorpio"],
      challenging: ["Gemini", "Sagittarius"],
    },
    luckyNumbers: [3, 27],
    luckyColors: ["Grey", "Beige", "Pale Yellow"],
    birthstone: "Sapphire",
  },
  libra: {
    name: "Libra",
    symbol: "♎",
    element: "Air",
    quality: "Cardinal",
    rulingPlanet: "Venus",
    dates: "September 23 - October 22",
    description:
      "Libra is the sign of balance, harmony, and relationships. They are diplomatic, charming, and have a strong sense of justice.",
    traits: {
      positive: ["Diplomatic", "Graceful", "Peaceful", "Idealistic", "Hospitable", "Fair-minded"],
      negative: ["Indecisive", "Avoids confrontations", "Self-pity", "Unreliable"],
    },
    personality:
      "Libra individuals are natural peacemakers who strive for harmony in all aspects of life. They are charming, diplomatic, and have excellent social skills. They have a strong sense of justice and fairness but can struggle with decision-making due to their desire to see all sides of a situation.",
    love: "Libra are romantic and charming partners who value harmony in relationships. They are natural flirts and enjoy the courtship phase of romance. They need balance and equality in partnerships and will go to great lengths to avoid conflict.",
    career:
      "Libra excel in careers that involve working with people and creating harmony. They make excellent diplomats, lawyers, counselors, artists, and designers. They thrive in collaborative environments where they can use their social skills and sense of fairness.",
    compatibility: {
      best: ["Gemini", "Aquarius", "Leo", "Sagittarius"],
      challenging: ["Cancer", "Capricorn"],
    },
    luckyNumbers: [4, 6, 13, 15, 24],
    luckyColors: ["Blue", "Green", "Pink"],
    birthstone: "Opal",
  },
  scorpio: {
    name: "Scorpio",
    symbol: "♏",
    element: "Water",
    quality: "Fixed",
    rulingPlanet: "Pluto",
    dates: "October 23 - November 21",
    description:
      "Scorpio is known for their intensity, passion, and mysterious nature. They are determined, brave, and have incredible emotional depth.",
    traits: {
      positive: ["Resourceful", "Brave", "Passionate", "Stubborn", "True friend", "Determined"],
      negative: ["Distrusting", "Jealous", "Secretive", "Violent", "Manipulative"],
    },
    personality:
      "Scorpio individuals are intense and passionate people who feel everything deeply. They are mysterious and often keep their true feelings hidden. They are incredibly loyal to those they trust but can be suspicious of others. They have strong willpower and determination.",
    love: "Scorpio are passionate and intense partners who seek deep, transformative relationships. They are incredibly loyal but can be possessive and jealous. They need emotional intimacy and honesty in relationships and have the ability to love deeply and completely.",
    career:
      "Scorpio excel in careers that allow them to investigate, transform, or heal. They make excellent detectives, psychologists, surgeons, researchers, and therapists. They thrive in challenging environments where they can use their determination and intuition.",
    compatibility: {
      best: ["Cancer", "Pisces", "Virgo", "Capricorn"],
      challenging: ["Leo", "Aquarius"],
    },
    luckyNumbers: [8, 11, 18, 22],
    luckyColors: ["Deep Red", "Maroon", "Black"],
    birthstone: "Topaz",
  },
  sagittarius: {
    name: "Sagittarius",
    symbol: "♐",
    element: "Fire",
    quality: "Mutable",
    rulingPlanet: "Jupiter",
    dates: "November 22 - December 21",
    description:
      "Sagittarius is the sign of adventure, philosophy, and freedom. They are optimistic, honest, and always seeking new experiences.",
    traits: {
      positive: ["Generous", "Idealistic", "Great sense of humor", "Adventurous", "Honest", "Optimistic"],
      negative: ["Promises more than can deliver", "Impatient", "Tactless", "Restless"],
    },
    personality:
      "Sagittarius individuals are free-spirited adventurers who love to explore new places and ideas. They are optimistic, honest, and have a great sense of humor. They value freedom above all else and can become restless if they feel confined. They are natural philosophers who love to learn and share knowledge.",
    love: "Sagittarius are fun-loving and adventurous partners who need freedom in relationships. They are honest and direct but may struggle with commitment. They need partners who share their love of adventure and can give them space to explore and grow.",
    career:
      "Sagittarius excel in careers that involve travel, teaching, or exploring new ideas. They make excellent teachers, travel guides, philosophers, writers, and international business professionals. They thrive in environments that offer variety and opportunities for growth.",
    compatibility: {
      best: ["Aries", "Leo", "Libra", "Aquarius"],
      challenging: ["Virgo", "Pisces"],
    },
    luckyNumbers: [3, 9, 15, 21, 24],
    luckyColors: ["Turquoise", "Purple", "Orange"],
    birthstone: "Turquoise",
  },
  capricorn: {
    name: "Capricorn",
    symbol: "♑",
    element: "Earth",
    quality: "Cardinal",
    rulingPlanet: "Saturn",
    dates: "December 22 - January 19",
    description:
      "Capricorn is known for their ambition, discipline, and practical approach to life. They are responsible, patient, and natural leaders.",
    traits: {
      positive: ["Responsible", "Disciplined", "Self-control", "Good managers", "Patient", "Ambitious"],
      negative: ["Know-it-all", "Unforgiving", "Condescending", "Pessimistic", "Stubborn"],
    },
    personality:
      "Capricorn individuals are ambitious and disciplined people who work hard to achieve their goals. They are practical, responsible, and have excellent self-control. They may appear serious or reserved but have a dry sense of humor. They value tradition and stability.",
    love: "Capricorn are loyal and committed partners who take relationships seriously. They may be slow to open up emotionally but are incredibly devoted once committed. They value stability and security in relationships and are willing to work hard to build a strong foundation.",
    career:
      "Capricorn excel in careers that offer opportunities for advancement and recognition. They make excellent managers, executives, politicians, and entrepreneurs. They thrive in structured environments where they can use their organizational skills and ambition to climb the ladder of success.",
    compatibility: {
      best: ["Taurus", "Virgo", "Scorpio", "Pisces"],
      challenging: ["Aries", "Libra"],
    },
    luckyNumbers: [4, 8, 13, 22],
    luckyColors: ["Brown", "Black", "Dark Green"],
    birthstone: "Garnet",
  },
  aquarius: {
    name: "Aquarius",
    symbol: "♒",
    element: "Air",
    quality: "Fixed",
    rulingPlanet: "Uranus",
    dates: "January 20 - February 18",
    description:
      "Aquarius is the sign of innovation, independence, and humanitarian ideals. They are progressive, original, and march to the beat of their own drum.",
    traits: {
      positive: ["Progressive", "Original", "Independent", "Humanitarian", "Inventive", "Friendly"],
      negative: ["Runs from emotional expression", "Temperamental", "Uncompromising", "Aloof"],
    },
    personality:
      "Aquarius individuals are independent and original thinkers who value freedom and innovation. They are humanitarian by nature and often work to make the world a better place. They can be emotionally detached and may struggle with expressing their feelings, but they are loyal friends who value intellectual connections.",
    love: "Aquarius are independent partners who need freedom in relationships. They are attracted to unique, intelligent people who share their progressive ideals. They may struggle with emotional intimacy but are loyal and committed once they find the right person.",
    career:
      "Aquarius excel in careers that involve innovation, technology, or humanitarian work. They make excellent scientists, inventors, social workers, and activists. They thrive in progressive environments where they can use their creativity and original thinking to make a difference.",
    compatibility: {
      best: ["Gemini", "Libra", "Aries", "Sagittarius"],
      challenging: ["Taurus", "Scorpio"],
    },
    luckyNumbers: [4, 7, 11, 22, 29],
    luckyColors: ["Light Blue", "Silver", "Turquoise"],
    birthstone: "Amethyst",
  },
  pisces: {
    name: "Pisces",
    symbol: "♓",
    element: "Water",
    quality: "Mutable",
    rulingPlanet: "Neptune",
    dates: "February 19 - March 20",
    description:
      "Pisces is the sign of intuition, compassion, and creativity. They are empathetic, artistic, and deeply connected to their emotions and spirituality.",
    traits: {
      positive: ["Compassionate", "Artistic", "Intuitive", "Gentle", "Wise", "Musical"],
      negative: ["Fearful", "Overly trusting", "Sad", "Desire to escape reality", "Victim mentality"],
    },
    personality:
      "Pisces individuals are compassionate and intuitive people who feel deeply connected to others and the world around them. They are artistic and creative, often expressing themselves through art, music, or writing. They can be overly sensitive and may struggle with boundaries, but they have incredible empathy and wisdom.",
    love: "Pisces are romantic and compassionate partners who love deeply and completely. They are intuitive about their partner's needs and are willing to sacrifice for love. They need emotional connection and understanding in relationships and can be hurt easily by criticism or rejection.",
    career:
      "Pisces excel in careers that allow them to help others or express their creativity. They make excellent artists, musicians, therapists, nurses, and spiritual advisors. They thrive in environments where they can use their intuition and compassion to make a positive impact.",
    compatibility: {
      best: ["Cancer", "Scorpio", "Taurus", "Capricorn"],
      challenging: ["Gemini", "Sagittarius"],
    },
    luckyNumbers: [3, 9, 12, 15, 18, 24],
    luckyColors: ["Sea Green", "Lavender", "Purple"],
    birthstone: "Aquamarine",
  },
}

export default function ZodiacSignPage() {
  const params = useParams()
  const sign = params.sign as string
  const data = zodiacData[sign as keyof typeof zodiacData]

  if (!data) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-sky-50 to-purple-50 dark:from-gray-900 dark:to-purple-950">
        <SiteHeader />
        <div className="container px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-purple-900 dark:text-purple-100">Zodiac Sign Not Found</h1>
          <Link href="/">
            <Button className="mt-4">Return Home</Button>
          </Link>
        </div>
        <SiteFooter />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-purple-50 dark:from-gray-900 dark:to-purple-950">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-amber-100 dark:from-purple-900/30 dark:to-amber-900/30 opacity-50"></div>
          <div className="absolute inset-0 opacity-20 dark:opacity-30">
            <div className="absolute -right-[20%] -top-[10%] w-[60%] h-[60%] animate-[spin_240s_linear_infinite]">
              <div className="w-full h-full rounded-full border-2 border-amber-300/30 dark:border-amber-500/30"></div>
            </div>
          </div>
        </div>

        <div className="container relative px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl"
          >
            <Link
              href="/"
              className="inline-flex items-center text-purple-700 dark:text-purple-300 hover:text-amber-600 dark:hover:text-amber-400 mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>

            <div className="text-center mb-12">
              <div className="mb-6 flex justify-center">
                <div className="relative h-24 w-24 flex items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30">
                  <span className="text-6xl">{data.symbol}</span>
                </div>
              </div>
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-purple-900 dark:text-purple-100 md:text-6xl">
                {data.name}
              </h1>
              <p className="text-lg text-purple-700 dark:text-purple-300 md:text-xl">{data.dates}</p>
              <p className="mt-4 text-purple-700 dark:text-purple-300 max-w-2xl mx-auto">{data.description}</p>
            </div>

            {/* Quick Facts */}
            <div className="grid gap-4 md:grid-cols-4 mb-12">
              {[
                { label: "Element", value: data.element, icon: <Sparkles className="h-5 w-5" /> },
                { label: "Quality", value: data.quality, icon: <Star className="h-5 w-5" /> },
                { label: "Ruling Planet", value: data.rulingPlanet, icon: <Calendar className="h-5 w-5" /> },
                { label: "Birthstone", value: data.birthstone, icon: <Star className="h-5 w-5" /> },
              ].map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 text-center border border-purple-100 dark:border-purple-800"
                >
                  <div className="flex justify-center mb-2 text-amber-500">{fact.icon}</div>
                  <div className="text-sm text-purple-600 dark:text-purple-400">{fact.label}</div>
                  <div className="font-semibold text-purple-900 dark:text-purple-100">{fact.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white/50 dark:bg-gray-900/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Personality */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-lg p-8 border border-purple-100 dark:border-purple-800"
            >
              <div className="flex items-center mb-6">
                <Users className="h-6 w-6 text-amber-500 mr-3" />
                <h2 className="text-2xl font-bold text-purple-900 dark:text-purple-100">Personality</h2>
              </div>
              <p className="text-purple-700 dark:text-purple-300 leading-relaxed">{data.personality}</p>
            </motion.div>

            {/* Traits */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-lg p-8 border border-purple-100 dark:border-purple-800"
            >
              <div className="flex items-center mb-6">
                <Star className="h-6 w-6 text-amber-500 mr-3" />
                <h2 className="text-2xl font-bold text-purple-900 dark:text-purple-100">Key Traits</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-green-600 dark:text-green-400 mb-3">Positive Traits</h3>
                  <div className="flex flex-wrap gap-2">
                    {data.traits.positive.map((trait, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-red-600 dark:text-red-400 mb-3">Areas for Growth</h3>
                  <div className="flex flex-wrap gap-2">
                    {data.traits.negative.map((trait, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-full text-sm"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Love & Relationships */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-lg p-8 border border-purple-100 dark:border-purple-800"
            >
              <div className="flex items-center mb-6">
                <Heart className="h-6 w-6 text-amber-500 mr-3" />
                <h2 className="text-2xl font-bold text-purple-900 dark:text-purple-100">Love & Relationships</h2>
              </div>
              <p className="text-purple-700 dark:text-purple-300 leading-relaxed">{data.love}</p>
            </motion.div>

            {/* Career */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-lg p-8 border border-purple-100 dark:border-purple-800"
            >
              <div className="flex items-center mb-6">
                <Briefcase className="h-6 w-6 text-amber-500 mr-3" />
                <h2 className="text-2xl font-bold text-purple-900 dark:text-purple-100">Career & Work</h2>
              </div>
              <p className="text-purple-700 dark:text-purple-300 leading-relaxed">{data.career}</p>
            </motion.div>
          </div>

          {/* Compatibility & Lucky Elements */}
          <div className="grid gap-8 md:grid-cols-2 mt-12">
            {/* Compatibility */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-lg p-8 border border-purple-100 dark:border-purple-800"
            >
              <h2 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-6">Compatibility</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-green-600 dark:text-green-400 mb-2">Most Compatible</h3>
                  <div className="flex flex-wrap gap-2">
                    {data.compatibility.best.map((sign, index) => (
                      <Link
                        key={index}
                        href={`/zodiac/${sign.toLowerCase()}`}
                        className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors"
                      >
                        {sign}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">Challenging Matches</h3>
                  <div className="flex flex-wrap gap-2">
                    {data.compatibility.challenging.map((sign, index) => (
                      <Link
                        key={index}
                        href={`/zodiac/${sign.toLowerCase()}`}
                        className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-full text-sm hover:bg-orange-200 dark:hover:bg-orange-900/50 transition-colors"
                      >
                        {sign}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Lucky Elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-lg p-8 border border-purple-100 dark:border-purple-800"
            >
              <h2 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-6">Lucky Elements</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">Lucky Numbers</h3>
                  <div className="flex flex-wrap gap-2">
                    {data.luckyNumbers.map((number, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm"
                      >
                        {number}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">Lucky Colors</h3>
                  <div className="flex flex-wrap gap-2">
                    {data.luckyColors.map((color, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-purple-50 to-sky-50 dark:from-gray-900 dark:to-purple-950">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-purple-900 dark:text-purple-100 md:text-4xl">
              Want a Personalized Reading?
            </h2>
            <p className="mb-8 text-purple-700 dark:text-purple-300 md:text-lg max-w-2xl mx-auto">
              Discover deeper insights about your {data.name} nature with a personalized astrological consultation
              tailored specifically to your birth chart.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/consultation">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-purple-700 text-white hover:from-purple-600 hover:to-purple-800 dark:from-purple-600 dark:to-purple-900"
                >
                  Book Personal Consultation
                </Button>
              </Link>
              <Link href="/kundli">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-300 text-purple-700 dark:border-purple-700 dark:text-purple-300"
                >
                  Create Your Kundli
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
      <SocialMediaIcons />
    </div>
  )
}
