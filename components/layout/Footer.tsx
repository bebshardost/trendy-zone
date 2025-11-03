import Link from 'next/link'
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  Shield,
  Truck,
  Clock,
  Heart
} from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      {/* Trust Bar */}
      <div className="border-b border-neutral-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 py-6">
            {trustFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="text-green-400">
                  {feature.icon}
                </div>
                <div>
                  <div className="font-semibold text-sm">{feature.title}</div>
                  <div className="text-xs text-neutral-400">{feature.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-coral-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">TZ</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Trendy Zone</h3>
                <p className="text-xs text-neutral-400 -mt-1">Urban Winter Fashion</p>
              </div>
            </Link>
            
            <p className="text-neutral-400 mb-6 leading-relaxed">
              Bangladesh's #1 destination for premium winter fashion. We blend global trends with local understanding to bring you the perfect winter wardrobe.
            </p>
            
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-neutral-800 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Shop Categories</h4>
            <div className="space-y-3">
              {shopLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="block text-neutral-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-bold text-lg mb-6">Customer Care</h4>
            <div className="space-y-3">
              {customerLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="block text-neutral-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-6">Stay Updated</h4>
            
            {/* Newsletter */}
            <div className="mb-6">
              <p className="text-neutral-400 mb-4">
                Get exclusive deals and winter fashion tips
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-primary-500 transition-colors"
                />
                <button
                  type="submit"
                  className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Join
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-neutral-400">
                <Phone className="w-4 h-4" />
                <span>+880 1XXX-XXXXXX</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-400">
                <Mail className="w-4 h-4" />
                <span>support@trendyzone.com</span>
              </div>
              <div className="flex items-start gap-3 text-neutral-400">
                <MapPin className="w-4 h-4 mt-1" />
                <span>Dhaka, Bangladesh<br />Delivery across BD</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="border-t border-neutral-700 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-neutral-400 text-sm">We Accept:</span>
              <div className="flex gap-2">
                {paymentMethods.map((method, index) => (
                  <div
                    key={index}
                    className="bg-neutral-800 px-3 py-1 rounded-lg text-xs font-medium text-neutral-300"
                  >
                    {method}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-neutral-400 text-sm">
              © 2024 Trendy Zone. Made with <Heart className="w-4 h-4 inline fill-red-500 text-red-500" /> for Bangladesh
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

const trustFeatures = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Secure Payment",
    subtitle: "bKash, Nagad, Cards"
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: "Free Delivery",
    subtitle: "Across Bangladesh"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "7-Day Returns",
    subtitle: "Hassle-free"
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "24/7 Support",
    subtitle: "We're here to help"
  }
]

const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com/trendyzone",
    icon: <Facebook className="w-5 h-5" />
  },
  {
    name: "Instagram",
    href: "https://instagram.com/trendyzone",
    icon: <Instagram className="w-5 h-5" />
  },
  {
    name: "Twitter",
    href: "https://twitter.com/trendyzone",
    icon: <Twitter className="w-5 h-5" />
  },
  {
    name: "YouTube",
    href: "https://youtube.com/trendyzone",
    icon: <Youtube className="w-5 h-5" />
  }
]

const shopLinks = [
  { name: "Winter Hoodies", href: "/categories/hoodies" },
  { name: "Jackets & Coats", href: "/categories/jackets" },
  { name: "Shoes & Footwear", href: "/categories/shoes" },
  { name: "New Arrivals", href: "/new-arrivals" },
  { name: "Best Sellers", href: "/best-sellers" },
  { name: "Sale & Offers", href: "/sale" }
]

const customerLinks = [
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  { name: "Shipping Policy", href: "/shipping" },
  { name: "Returns & Exchange", href: "/returns" },
  { name: "Size Guide", href: "/size-guide" },
  { name: "FAQ", href: "/faq" }
]

const paymentMethods = [
  "bKash", "Nagad", "Rocket", "Visa", "MasterCard", "COD"
]