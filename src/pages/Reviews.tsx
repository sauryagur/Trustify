
import { motion } from "framer-motion";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import ReviewsList from "@/components/review/ReviewsList";
import { fadeIn } from "@/lib/animation";

const Reviews = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="container mx-auto px-4 py-20"
    >
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search reviews by product name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 rounded-xl bg-gray-800/50 border-gray-700"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        </div>
        
        <ReviewsList productId={searchQuery} />
      </div>
    </motion.div>
  );
};

export default Reviews;
