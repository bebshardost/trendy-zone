import Image from 'next/image'
import { Instagram, Heart, MessageCircle } from 'lucide-react'

export default function InstagramSection() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Instagram className="w-4 h-4" />
            @TRENDYZONEBD
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-neutral-800 mb-4">
            Join Our <span className="text-primary-500">Instagram</span> Family
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            See how our community styles their Trendy Zone pieces and get featured!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {instagramPosts.map((post, index) => (
            <div key={index} className="group relative aspect-square bg-neutral-200 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>{post.comments}</span>
                  </div>
                </div>
              </div>

              {/* Placeholder for images */}
              <div className="w-full h-full bg-gradient-to-br from-primary-500 to-accent-coral-400 flex items-center justify-center text-white text-2xl">
                📸
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://instagram.com/trendyzonebd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-2xl"
          >
            <Instagram className="w-5 h-5" />
            Follow @trendyzonebd
          </a>
        </div>
      </div>
    </section>
  )
}

const instagramPosts = [
  { likes: 234, comments: 45 },
  { likes: 189, comments: 32 },
  { likes: 312, comments: 67 },
  { likes: 156, comments: 28 },
  { likes: 278, comments: 51 },
  { likes: 198, comments: 39 },
  { likes: 345, comments: 72 },
  { likes: 267, comments: 48 }
]