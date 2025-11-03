'use client'

import { useState } from 'react'
import { Review } from '@/data/reviews-data'
import { Star, Heart, ThumbsUp, CheckCircle, Filter } from 'lucide-react'

interface ProductReviewsProps {
  reviews: Review[]
  averageRating: number
  totalReviews: number
}

export default function ProductReviews({ reviews, averageRating, totalReviews }: ProductReviewsProps) {
  const [filter, setFilter] = useState<'all' | '5' | '4' | '3' | '2' | '1'>('all')
  const [likedReviews, setLikedReviews] = useState<number[]>([])

  const filteredReviews = filter === 'all' 
    ? reviews 
    : reviews.filter(review => Math.floor(review.rating) === parseInt(filter))

  const ratingDistribution = {
    5: reviews.filter(r => Math.floor(r.rating) === 5).length,
    4: reviews.filter(r => Math.floor(r.rating) === 4).length,
    3: reviews.filter(r => Math.floor(r.rating) === 3).length,
    2: reviews.filter(r => Math.floor(r.rating) === 2).length,
    1: reviews.filter(r => Math.floor(r.rating) === 1).length,
  }

  const handleLike = (reviewId: number) => {
    setLikedReviews(prev =>
      prev.includes(reviewId)
        ? prev.filter(id => id !== reviewId)
        : [...prev, reviewId]
    )
  }

  return (
    <div className="space-y-8">
      {/* Reviews Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div>
          <h2 className="text-3xl font-black text-neutral-800 mb-2">
            Customer Reviews
          </h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="text-4xl font-black text-neutral-800">{averageRating}</div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(averageRating)
                          ? 'fill-accent-gold-400 text-accent-gold-400'
                          : 'text-neutral-300'
                      }`}
                    />
                  ))}
                </div>
                <div className="text-sm text-neutral-600">
                  Based on {totalReviews} reviews
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Review Filters */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
              filter === 'all'
                ? 'bg-primary-500 text-white'
                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
            }`}
          >
            All ({totalReviews})
          </button>
          {[5, 4, 3, 2, 1].map((rating) => (
            <button
              key={rating}
              onClick={() => setFilter(rating.toString() as any)}
              className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                filter === rating.toString()
                  ? 'bg-primary-500 text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              <span>{rating} ★</span>
              <span>({ratingDistribution[rating as keyof typeof ratingDistribution]})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Rating Distribution */}
      <div className="bg-neutral-50 rounded-2xl p-6">
        <h3 className="font-bold text-neutral-800 mb-4 flex items-center gap-2">
          <Filter className="w-4 h-4" />
          Rating Breakdown
        </h3>
        <div className="space-y-3">
          {[5, 4, 3, 2, 1].map((rating) => {
            const count = ratingDistribution[rating as keyof typeof ratingDistribution]
            const percentage = (count / totalReviews) * 100
            
            return (
              <div key={rating} className="flex items-center gap-3">
                <div className="flex items-center gap-1 w-16">
                  <span className="text-sm font-medium text-neutral-700">{rating}</span>
                  <Star className="w-4 h-4 fill-accent-gold-400 text-accent-gold-400" />
                </div>
                <div className="flex-1 bg-neutral-200 rounded-full h-2">
                  <div
                    className="bg-accent-gold-400 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <div className="text-sm text-neutral-600 w-12 text-right">
                  {count}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {filteredReviews.map((review) => (
          <div key={review.id} className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-coral-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {review.customerName.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-neutral-800">{review.customerName}</h4>
                    {review.verified && (
                      <CheckCircle className="w-4 h-4 text-green-500 fill-green-500" />
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <span>{review.location}</span>
                    <span>•</span>
                    <span>{new Date(review.date).toLocaleDateString('en-BD')}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating
                        ? 'fill-accent-gold-400 text-accent-gold-400'
                        : 'text-neutral-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            <p className="text-neutral-700 mb-4 leading-relaxed">{review.comment}</p>

            <div className="flex items-center justify-between">
              <button
                onClick={() => handleLike(review.id)}
                className={`flex items-center gap-2 px-3 py-1 rounded-full transition-all duration-300 ${
                  likedReviews.includes(review.id)
                    ? 'bg-primary-500 text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                <ThumbsUp className="w-4 h-4" />
                <span className="text-sm font-medium">
                  Helpful ({review.likes + (likedReviews.includes(review.id) ? 1 : 0)})
                </span>
              </button>

              {review.verified && (
                <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
                  <CheckCircle className="w-4 h-4" />
                  Verified Purchase
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Write Review CTA */}
      <div className="bg-gradient-to-r from-primary-500 to-accent-coral-500 rounded-2xl p-8 text-center text-white">
        <h3 className="text-2xl font-black mb-3">
          Love This Product? ❤️
        </h3>
        <p className="text-white/90 mb-6 text-lg">
          Share your experience and help other fashion lovers make the right choice!
        </p>
        <button className="bg-white text-primary-500 px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-2xl">
          Write a Review
        </button>
      </div>
    </div>
  )
}