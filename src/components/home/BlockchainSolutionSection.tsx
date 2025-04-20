
import { motion } from "framer-motion";
import { Shield, Lock, UserCheck, BarChart4, Globe, Code } from "lucide-react";
import { staggerContainer, fadeIn } from "@/lib/animation";
import { MotionButton } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface FeatureCardProps {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-[#d79921]/50 transition-colors hover:shadow-[0_0_15px_rgba(215,153,33,0.2)]"
    >
      <div className="bg-[#d79921]/20 p-3 rounded-lg w-fit mb-4">
        <Icon className="h-6 w-6 text-[#d79921]" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

export const BlockchainSolutionSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Immutable Reviews",
      description: "Once published, reviews cannot be altered or deleted, ensuring transparency."
    },
    {
      icon: Lock,
      title: "Anonymous Auth",
      description: "Users can leave honest feedback without exposing their identity."
    },
    {
      icon: BarChart4,
      title: "On-chain Reputation",
      description: "Build a trustworthy reputation score through verified actions."
    },
    {
      icon: UserCheck,
      title: "Verified Purchases",
      description: "Only customers who actually bought products can leave reviews."
    },
    {
      icon: Globe,
      title: "Decentralized Storage",
      description: "No central authority can manipulate or delete review data."
    },
    {
      icon: Code,
      title: "Embed Anywhere",
      description: "Easy integration with Shopify, WooCommerce, and custom sites."
    },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="container mx-auto"
      >
        <motion.h2
          variants={fadeIn}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          <span className="bg-gradient-to-r from-[#d79921] to-yellow-300 bg-clip-text text-transparent">
            How Trustify solves this.
          </span>
        </motion.h2>

        <motion.div 
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: index * 0.1 }
                }
              }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeIn}
          className="flex justify-center"
        >
          <MotionButton 
            size="lg" 
            className="gap-2 bg-[#d79921] hover:bg-yellow-600 text-black group"
          >
            Try Trustify Now
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </MotionButton>
        </motion.div>
      </motion.div>
    </section>
  );
};
