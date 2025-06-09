import Link from "next/link"
import { Twitter, MessageCircle } from 'lucide-react'

export function SocialMediaIcons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <Link
        href="https://x.com/pmastrology_com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white shadow-lg transition-transform hover:scale-110 dark:bg-gray-800 dark:text-gray-100"
        aria-label="Follow us on Twitter/X"
      >
        <Twitter className="h-5 w-5" />
      </Link>
      <Link
        href="https://wa.me/919784777424"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-5 w-5" />
      </Link>
    </div>
  )
}
