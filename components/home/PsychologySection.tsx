import Image from 'next/image'
import { Award } from 'lucide-react'
import { psychologyPoints, socialProofImages } from '@/data/home-data'

export default function PsychologySection() {
  return (
    <section className="py-20 bg-gradient-to-br from-neutral-800 to-neutral-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              WHY WE'RE DIFFERENT
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Not Just Clothes.<br />
              Your <span className="text-accent-gold-400">Winter Identity</span>
            </h2>
            
            <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
              In a country where winter is short but style is forever, we don't just sell products - 
              we deliver confidence, attention, and that second look you've been craving.
            </p>

            {/* Psychology Points */}
            <div className="space-y-4">
              {psychologyPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{point.title}</h4>
                    <p className="text-neutral-400">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Social Proof Gallery */}
          <div className="grid grid-cols-2 gap-4">
            {socialProofImages.map((image, index) => (
              <div 
                key={index}
                className={`relative h-64 rounded-2xl overflow-hidden group ${
                  index === 0 ? 'row-span-2' : ''
                }`}
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-white text-sm font-medium">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}