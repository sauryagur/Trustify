
import { Button } from "@/components/ui/button";
import { ChevronRight, Shield, Star, ThumbsUp } from "lucide-react";
import ReviewForm from "@/components/review/ReviewForm";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20">
      {/* Spotify-inspired background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-green-500/20 backdrop-blur-3xl" />
      
      {/* Animated circles in background (Spotify-style) */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Content */}
      <div className="container relative mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 text-left">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-200 bg-purple-50 dark:bg-purple-900/30 dark:border-purple-700/50 text-sm text-purple-600 dark:text-purple-300">
            <Shield className="mr-1 h-3.5 w-3.5" />
            <span>Web3-powered Trust & Reviews</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-green-500">
            Decentralized Trust for E-commerce
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
            AI-powered, anonymous product reviews secured by blockchain technology
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="gap-2 bg-green-500 hover:bg-green-600 text-white">
              Get Started <ChevronRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              View Demo
            </Button>
          </div>
          
          <div className="flex items-center gap-4 pt-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-green-400 border-2 border-white dark:border-gray-900" />
              ))}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <span className="font-medium">500+</span> Merchants Trust Trustify
            </div>
          </div>
        </div>
        
        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-md">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl p-6">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Product Review</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Anonymous & Blockchain Secured</p>
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 text-gray-300" />
                </div>
              </div>
              <ReviewForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
