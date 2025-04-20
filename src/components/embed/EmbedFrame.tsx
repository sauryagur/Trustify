
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReviewForm from "@/components/review/ReviewForm";
import ReviewsList from "@/components/review/ReviewsList";
import { Star } from "lucide-react";

interface EmbedFrameProps {
  productId?: string;
  merchantId?: string;
  theme?: "light" | "dark";
  showAllReviews?: boolean;
}

const EmbedFrame = ({
  productId = "demo-product",
  merchantId = "demo-merchant",
  theme = "light",
  showAllReviews = true
}: EmbedFrameProps) => {
  const [averageRating] = useState(4.2);
  const [totalReviews] = useState(42);
  
  // Rating distribution (for demo purposes)
  const ratingDistribution = [
    { stars: 5, percentage: 62 },
    { stars: 4, percentage: 24 },
    { stars: 3, percentage: 8 },
    { stars: 2, percentage: 4 },
    { stars: 1, percentage: 2 },
  ];

  return (
    <div className={`w-full h-full bg-white/95 dark:bg-gray-900/95 p-4 rounded-lg ${theme === "dark" ? "dark" : ""}`}>
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="mr-3">
              <div className="text-3xl font-bold">{averageRating.toFixed(1)}</div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < Math.round(averageRating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-500">{totalReviews} reviews</div>
              <div className="text-xs text-green-500">Blockchain Verified</div>
            </div>
          </div>
          
          <div className="hidden md:block">
            {ratingDistribution.map((dist) => (
              <div key={dist.stars} className="flex items-center text-sm">
                <span className="w-3">{dist.stars}</span>
                <Star className="w-3 h-3 mx-1 text-gray-400" />
                <div className="w-32 bg-gray-200 rounded-full h-1.5 ml-1">
                  <div 
                    className="bg-yellow-400 h-1.5 rounded-full" 
                    style={{ width: `${dist.percentage}%` }}
                  ></div>
                </div>
                <span className="ml-2 text-gray-500 text-xs">{dist.percentage}%</span>
              </div>
            ))}
          </div>
        </div>

        <Tabs defaultValue="reviews">
          <TabsList className="grid grid-cols-2 w-full">
            <TabsTrigger value="reviews">Read Reviews</TabsTrigger>
            <TabsTrigger value="write">Write a Review</TabsTrigger>
          </TabsList>
          
          <TabsContent value="reviews" className="mt-4">
            {showAllReviews ? (
              <ReviewsList productId={productId} />
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 mb-4">Sign in to read reviews for this product</p>
                <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
                  Connect Wallet
                </button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="write" className="mt-4">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-sm p-6">
              <ReviewForm />
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="text-center mt-6 text-xs text-gray-500">
          <p>Powered by Trustify • Blockchain-verified reviews</p>
        </div>
      </div>
    </div>
  );
};

export default EmbedFrame;
