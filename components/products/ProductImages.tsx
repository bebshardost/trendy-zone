'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ZoomIn, Heart, Share2 } from 'lucide-react'

interface ProductImagesProps {
  images: string[]
  productName: string
}

export default function ProductImages({ images, productName }: ProductImagesProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div 
        className="relative aspect-square bg-neutral-100 rounded-2xl overflow-hidden cursor-zoom-in group"
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
      >
        <Image
          src={images[selectedImage]}
          alt={productName}
          fill
          className={`object-cover transition-transform duration-500 ${
            isZoomed ? 'scale-110' : 'scale-100'
          }`}
        />
        
        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2">
          <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:scale-110 transition-all duration-300">
            <Heart className="w-5 h-5 text-neutral-600" />
          </button>
          <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:scale-110 transition-all duration-300">
            <Share2 className="w-5 h-5 text-neutral-600" />
          </button>
        </div>

        {/* Zoom Indicator */}
        <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
          <ZoomIn className="w-4 h-4" />
          Hover to zoom
        </div>
      </div>

      {/* Thumbnail Gallery */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`flex-shrink-0 w-20 h-20 bg-neutral-100 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
              selectedImage === index 
                ? 'border-primary-500 scale-105' 
                : 'border-transparent hover:border-neutral-300'
            }`}
          >
            <Image
              src={image}
              alt={`${productName} view ${index + 1}`}
              width={80}
              height={80}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </button>
        ))}
      </div>
    </div>
  )
}