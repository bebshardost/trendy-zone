import { notFound } from 'next/navigation'
import { allProducts } from '@/data/products-data'
import { reviews } from '@/data/reviews-data'
import { 
  ProductImages, 
  ProductDetails, 
  ProductReviews, 
  RelatedProducts 
} from '@/components/products'
import { Star, Users, Zap, Truck } from 'lucide-react'

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = allProducts.find(p => p.id === parseInt(params.id))

  if (!product) {
    notFound()
  }

  // Simulate multiple product images
  const productImages = [
    product.imageUrl,
    product.imageUrl, // In real app, these would be different images
    product.imageUrl,
    product.imageUrl,
  ]

  // Filter reviews for this product (simulated)
  const productReviews = reviews.slice(0, 3)

  return (
    <div className="min-h-screen bg-white">
      {/* Trust Banner */}
      <div className="bg-gradient-to-r from-primary-500 to-accent-coral-500 text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm font-medium">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4" />
              <span>Free delivery across Bangladesh</span>
            </div>
            <div className="hidden md:block">•</div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-accent-gold-400" />
              <span>200+ people are viewing this right now</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-neutral-600 mb-8">
          <a href="/" className="hover:text-primary-500 transition-colors">Home</a>
          <span>›</span>
          <a href="/categories/hoodies" className="hover:text-primary-500 transition-colors capitalize">{product.category}</a>
          <span>›</span>
          <span className="text-neutral-400">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <ProductImages 
            images={productImages} 
            productName={product.name} 
          />

          {/* Product Details */}
          <ProductDetails product={product} />
        </div>

        {/* Social Proof Stats */}
        <div className="bg-neutral-50 rounded-2xl p-8 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-6 h-6 text-primary-500" />
                <div className="text-2xl font-black text-neutral-800">{product.soldCount}+</div>
              </div>
              <div className="text-sm text-neutral-600">Happy Customers</div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="w-6 h-6 text-accent-gold-400 fill-accent-gold-400" />
                <div className="text-2xl font-black text-neutral-800">{product.rating}</div>
              </div>
              <div className="text-sm text-neutral-600">Average Rating</div>
            </div>
            <div>
              <div className="text-2xl font-black text-neutral-800 mb-2">2-3</div>
              <div className="text-sm text-neutral-600">Delivery Days</div>
            </div>
            <div>
              <div className="text-2xl font-black text-neutral-800 mb-2">7</div>
              <div className="text-sm text-neutral-600">Easy Returns</div>
            </div>
          </div>
        </div>

        {/* Product Reviews */}
        <div className="mb-16">
          <ProductReviews 
            reviews={productReviews}
            averageRating={product.rating}
            totalReviews={productReviews.length}
          />
        </div>

        {/* Related Products */}
        <RelatedProducts 
          currentProduct={product}
          category={product.category}
        />
      </div>

      {/* Floating Trust Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 shadow-2xl z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="hidden md:block w-16 h-16 bg-neutral-100 rounded-xl overflow-hidden">
                <img 
                  src={product.imageUrl} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-bold text-neutral-800 line-clamp-1">{product.name}</div>
                <div className="text-2xl font-black text-primary-500">৳{product.price}</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 text-sm text-neutral-600">
                <Zap className="w-4 h-4 text-accent-gold-400" />
                <span>12 people added this today</span>
              </div>
              
              <div className="flex gap-3">
                <button className="border-2 border-primary-500 text-primary-500 px-6 py-3 rounded-xl font-bold hover:bg-primary-500 hover:text-white transition-all duration-300">
                  Add to Cart
                </button>
                <button className="bg-primary-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-primary-600 transition-colors shadow-lg">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Generate static paths for SSG
export async function generateStaticParams() {
  return allProducts.map((product) => ({
    id: product.id.toString(),
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ProductPageProps) {
  const product = allProducts.find(p => p.id === parseInt(params.id))

  if (!product) {
    return {
      title: 'Product Not Found',
    }
  }

  return {
    title: `${product.name} - Trendy Zone | Bangladeshi Winter Fashion`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.imageUrl],
    },
  }
}