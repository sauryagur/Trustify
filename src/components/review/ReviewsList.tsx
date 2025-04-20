
import { useState } from "react";
import { Star, ThumbsUp, MessageSquare, MoreVertical, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

type Review = {
  id: string;
  productName: string;
  rating: number;
  reviewText: string;
  aiScore: number;
  date: string;
  helpful: number;
  verified: boolean;
};

// Mock data for reviews
const mockReviews: Review[] = [
  {
    id: "1",
    productName: "Wireless Earbuds",
    rating: 5,
    reviewText: "These are the best earbuds I've ever owned! The sound quality is amazing and the battery lasts all day. I can't believe the noise cancellation at this price point.",
    aiScore: 92,
    date: "2023-04-12",
    helpful: 24,
    verified: true
  },
  {
    id: "2",
    productName: "Smart Watch Pro",
    rating: 4,
    reviewText: "Great watch with lots of features. The battery life could be better, but overall I'm satisfied with my purchase. The sleep tracking is surprisingly accurate.",
    aiScore: 87,
    date: "2023-04-10",
    helpful: 18,
    verified: true
  },
  {
    id: "3",
    productName: "Bluetooth Speaker",
    rating: 3,
    reviewText: "Decent sound for the price. It's not as loud as I expected and the bass is a bit weak. Good for casual listening but not for parties.",
    aiScore: 75,
    date: "2023-04-05",
    helpful: 12,
    verified: true
  }
];

interface ReviewsListProps {
  productId?: string;
  loading?: boolean;
}

const ReviewsList = ({ productId, loading = false }: ReviewsListProps) => {
  const [likedReviews, setLikedReviews] = useState<Set<string>>(new Set());
  
  const handleLikeReview = (reviewId: string) => {
    setLikedReviews(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(reviewId)) {
        newLiked.delete(reviewId);
      } else {
        newLiked.add(reviewId);
      }
      return newLiked;
    });
  };

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="border-gray-200/50 dark:border-gray-700/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-32" />
                </div>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Skeleton key={star} className="h-4 w-4 mr-1" />
                  ))}
                </div>
                <Skeleton className="h-20 w-full" />
                <div className="flex justify-between items-center">
                  <Skeleton className="h-8 w-20" />
                  <Skeleton className="h-8 w-20" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  const reviews = productId 
    ? mockReviews.filter(r => r.productName.toLowerCase().includes(productId.toLowerCase()))
    : mockReviews;

  return (
    <div className="space-y-4">
      {reviews.length > 0 ? (
        reviews.map(review => (
          <Card key={review.id} className="border-gray-200/50 dark:border-gray-700/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium">{review.productName}</h3>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <span>{new Date(review.date).toLocaleDateString()}</span>
                  {review.verified && (
                    <div className="flex items-center text-green-500">
                      <Shield className="h-3.5 w-3.5 mr-1" />
                      <span>Verified</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">{review.reviewText}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className={`flex items-center ${likedReviews.has(review.id) ? 'text-green-500' : ''}`}
                    onClick={() => handleLikeReview(review.id)}
                  >
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    <span>{likedReviews.has(review.id) ? review.helpful + 1 : review.helpful}</span>
                  </Button>
                  
                  <Button variant="ghost" size="sm" className="flex items-center">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    <span>Reply</span>
                  </Button>
                </div>
                
                <div className="flex items-center">
                  <div className="mr-2">
                    <div className="text-xs text-gray-500">AI Score</div>
                    <div className="font-medium text-green-500">{review.aiScore}%</div>
                  </div>
                  <Button variant="ghost" size="sm" className="p-1">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))
      ) : (
        <div className="text-center py-12">
          <div className="text-gray-500">No reviews found</div>
          <Button variant="outline" className="mt-4">Be the first to review</Button>
        </div>
      )}
      
      {reviews.length > 0 && (
        <div className="flex justify-center mt-8">
          <Button variant="outline">Load more reviews</Button>
        </div>
      )}
    </div>
  );
};

export default ReviewsList;
