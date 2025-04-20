
import { motion } from "framer-motion";
import { Button, MotionButton } from "@/components/ui/button";
import { ChevronRight, Shield, Star } from "lucide-react";
import ReviewForm from "@/components/review/ReviewForm";
import { fadeIn, staggerContainer } from "@/lib/animation";

const HeroSection = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="relative min-h-[90vh] flex items-center justify-center h-screen overflow-hidden py-20"
    >
      {/* Spotify-inspired background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-green-500/20 backdrop-blur-3xl" />
      
      {/* Animated circles in background (Spotify-style) */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Content */}
      <div className="container relative mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
        <motion.div 
          variants={fadeIn}
          className="space-y-6 text-left"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-3 py-1 rounded-full border border-blue-200/20 bg-blue-900/30 text-sm text-blue-300"
          >
            <Shield className="mr-1 h-3.5 w-3.5" />
            <span>Web3-powered Trust & Reviews</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-500">
            Decentralized Trust for E-commerce
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
            AI-powered, anonymous product reviews secured by blockchain technology
          </p>
          
          <motion.div 
            variants={fadeIn}
            className="flex flex-wrap gap-4"
          >
            <MotionButton 
              size="lg" 
              className="gap-2 bg-green-500 hover:bg-green-600 text-white group"
            >
              Get Started 
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </MotionButton>
            <MotionButton 
              variant="outline" 
              size="lg"
            >
              View Demo
            </MotionButton>
          </motion.div>
          
          <motion.div 
            variants={fadeIn}
            className="flex items-center gap-4 pt-4"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-900 to-blue-950 border-2 border-white dark:border-gray-900" />
              ))}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <span className="font-medium">500+</span> Merchants Trust Trustify
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          variants={fadeIn}
          className="flex justify-center md:justify-end"
        >
          <div className="w-full max-w-md">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-morphism rounded-xl p-6"
            >
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
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
