import { Mail, Phone, MapPin } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SocialMediaIcons } from "@/components/social-media-icons"
import { HeroBackground } from "@/components/hero-background"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <SiteHeader />

      <HeroBackground
        title="CONTACT US"
        description="Get in touch with our expert astrologers for personalized guidance"
      />

      <main className="container px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-semibold text-purple-900 dark:text-purple-100">
              We want to hear from you.
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-3xl mx-auto">
              Want to get top-quality astrological services at affordable prices? Or want to learn more about how
              astrology can guide your life decisions? Contact us today using any of the methods below.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 mb-12">
            <div className="flex flex-col items-center p-6 rounded-lg border border-purple-100 dark:border-purple-800 bg-white dark:bg-gray-900 shadow-sm">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30 mb-4">
                <MapPin className="h-8 w-8 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-medium text-purple-900 dark:text-purple-100 mb-2">Address</h3>
              <address className="not-italic text-center text-gray-700 dark:text-gray-300">
                
                <p className="mb-1">Jaipur, Rajasthan</p>
                <p>India</p>
              </address>
            </div>

            <div className="flex flex-col items-center p-6 rounded-lg border border-purple-100 dark:border-purple-800 bg-white dark:bg-gray-900 shadow-sm">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30 mb-4">
                <Mail className="h-8 w-8 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-medium text-purple-900 dark:text-purple-100 mb-2">Email</h3>
              <p className="text-center text-gray-700 dark:text-gray-300">
                
              </p>
              <p className="text-center text-gray-700 dark:text-gray-300 mt-2">
                <a href="mailto:pmhoroscope@gmail.com" className="hover:text-amber-600 dark:hover:text-amber-400">
                  pmhoroscope@gmail.com
                </a>
              </p>
            </div>

            <div className="flex flex-col items-center p-6 rounded-lg border border-purple-100 dark:border-purple-800 bg-white dark:bg-gray-900 shadow-sm">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30 mb-4">
                <Phone className="h-8 w-8 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-medium text-purple-900 dark:text-purple-100 mb-2">Phone</h3>
              <p className="text-center text-gray-700 dark:text-gray-300">
                <a href="tel:+919784777424" className="hover:text-amber-600 dark:hover:text-amber-400">
                  +91 9784777424
                </a>
              </p>
              <p className="text-center text-gray-700 dark:text-gray-300 mt-2">
                <span className="block text-sm text-purple-600 dark:text-purple-400">Available Hours:</span>
                10:00 AM - 7:00 PM IST
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-lg overflow-hidden h-[400px] border border-purple-100 dark:border-purple-800">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.99973450298!2d75.65047177620793!3d26.88514167956319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1621499837662!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="PM Astrology Location"
            ></iframe>
          </div>
        </div>
      </main>

      <SiteFooter />
      <SocialMediaIcons />
    </div>
  )
}
