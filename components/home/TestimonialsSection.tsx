import Image from 'next/image'
import { Star, Quote } from 'lucide-react'

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            ❤️ LOVE FROM BANGLADESH
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-neutral-800 mb-4">
            Trusted by <span className="text-primary-500">5,000+</span><br />
            Bangladeshi Fashion Lovers
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our community has to say about their Trendy Zone experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-neutral-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-500 hover:scale-105 group">
              <Quote className="w-8 h-8 text-primary-500 mb-4 opacity-50 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className="w-4 h-4 fill-accent-gold-400 text-accent-gold-400"
                  />
                ))}
              </div>

              <p className="text-neutral-700 mb-6 leading-relaxed">
                "{testimonial.comment}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-coral-400 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-neutral-800">{testimonial.name}</div>
                  <div className="text-sm text-neutral-600">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Metrics */}
        <div className="mt-16 bg-gradient-to-r from-primary-500 to-accent-coral-500 rounded-2xl p-8 text-white text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustMetrics.map((metric, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-black mb-2">{metric.value}</div>
                <div className="text-white/90 text-sm">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const testimonials = [
  {
    name: "Rahim Khan",
    location: "DU Campus, Dhaka",
    comment: "The quality is amazing! Perfect for Bangladeshi winter. Got so many compliments on campus. Shipping was super fast!",
    rating: 5
  },
  {
    name: "Tania Ahmed",
    location: "Influencer, Chittagong",
    comment: "As a fashion influencer, I'm very picky about quality. Trendy Zone exceeded my expectations. The hoodie material is premium!",
    rating: 5
  },
  {
    name: "Sakib Hasan",
    location: "BUET Student",
    comment: "Best purchase this winter! The fit is perfect and the style is exactly what I wanted. Will definitely order again.",
    rating: 5
  }
]

const trustMetrics = [
  { value: "5,000+", label: "Happy Customers" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "98%", label: "Recommend Us" },
  { value: "2-3", label: "Delivery Days" }
]