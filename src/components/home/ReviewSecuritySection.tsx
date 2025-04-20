
import { motion } from "framer-motion";
import { useRef } from "react";
import { fadeIn } from "@/lib/animation";

// Sample product images for the marquee
const productImages = [
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  "https://images.unsplash.com/photo-1560343090-f0409e92791a",
  "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  "https://images.unsplash.com/photo-1572635196237-14b3f281503f",
  "https://images.unsplash.com/photo-1560393464-5c69a73c5770",
  "https://images.unsplash.com/photo-1560343776-e0a8534375e9",
];

export const ReviewSecuritySection = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 px-4 bg-gray-900">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Are your reviews secure?
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Product reviews can easily be manipulated and cannot be trusted.
          </p>
        </motion.div>

        {/* Marquee section */}
        <div className="relative overflow-hidden py-8">
          <div className="flex gap-8 marquee-container" ref={marqueeRef}>
            <motion.div
              className="flex gap-8 min-w-full"
              animate={{ x: [0, -1920] }}
              transition={{
                repeat: Infinity,
                duration: 50,
                ease: "linear",
              }}
            >
              {[...productImages, ...productImages].map((src, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex-shrink-0"
                >
                  <div className="w-40 h-40 relative rounded-2xl overflow-hidden border border-gray-800 shadow-lg hover:shadow-[0_0_15px_rgba(215,153,33,0.2)] transition-shadow">
                    <img
                      src={src}
                      alt={`Product ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
