
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Star, AlertCircle, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [productName, setProductName] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoverRating, setHoverRating] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (rating === 0) {
      toast.error("Please select a rating before submitting");
      return;
    }
    
    if (!review.trim()) {
      toast.error("Please write a review before submitting");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call to Motoko backend
    setTimeout(() => {
      console.log({ 
        rating, 
        review, 
        productName: productName || "Current Product",
        isAnonymous
      });
      
      toast.success("Review submitted successfully! Your review will earn you rewards if it's rated highly.");
      setIsSubmitting(false);
      setRating(0);
      setReview("");
      setProductName("");
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Input
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Product URL"
          className="bg-gray-50/50 dark:bg-gray-700/50 border-gray-200/50 dark:border-gray-700/50"
        />
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-center space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              className="focus:outline-none transition-transform hover:scale-110"
            >
              <Star
                className={`w-8 h-8 ${
                  star <= (hoverRating || rating)
                    ? "fill-green-400 text-green-400"
                    : "text-gray-300"
                }`}
              />
            </button>
          ))}
        </div>
        {rating > 0 && (
          <p className="text-center text-sm text-gray-500">
            {["", "Poor", "Fair", "Good", "Very Good", "Excellent"][rating]}
          </p>
        )}
      </div>
      
      <Textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Share your honest experience with this product..."
        className="min-h-[120px] bg-gray-50/50 dark:bg-gray-700/50 border-gray-200/50 dark:border-gray-700/50"
        rows={5}
      />
      
      <div className="flex items-center">
        <div className="flex items-center h-5">
          <input
            id="anonymous"
            type="checkbox"
            checked={isAnonymous}
            onChange={(e) => setIsAnonymous(e.target.checked)}
            className="w-4 h-4 text-green-500 border-gray-300 rounded focus:ring-green-500"
          />
        </div>
        <div className="ml-2 text-sm">
          <label htmlFor="anonymous" className="font-medium text-gray-700 dark:text-gray-300">
            Submit anonymously
          </label>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Your review will be stored on the blockchain with no personally identifiable information.
          </p>
        </div>
      </div>
      
      <div className="pt-2">
        <Button 
          type="submit" 
          className="w-full bg-green-500 hover:bg-green-600 text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Review"}
        </Button>
        
        <div className="flex items-center justify-center mt-3 text-xs text-gray-500 dark:text-gray-400">
          <div className="flex items-center">
            <AlertCircle className="w-3 h-3 mr-1" />
            <span>Your review is secured by blockchain</span>
          </div>
          <div className="mx-2">•</div>
          <div className="flex items-center">
            <CheckCircle className="w-3 h-3 mr-1" />
            <span>Quality reviews earn rewards</span>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ReviewForm;
