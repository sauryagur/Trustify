
import { motion } from "framer-motion";
import { Cover } from "@/components/ui/cover";
import { FlipWords } from "@/components/ui/flip-words";
import { wrongReviewData } from "@/components/home/WrongReviews";
import { staggerContainer, fadeIn } from "@/lib/animation";

export const ProblemSection = () => {
  return (
    <>
    <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="container mx-auto"
      >
        <Cover className="p-8 md:p-12">
          <motion.div variants={fadeIn} className="space-y-12">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
              <span className="text-white">
                <FlipWords 
                  words={["Trust is broken.", "Reviews are rigged.", "Let's fix this."]} 
                  className="h-12 md:h-16 inline-block min-w-60 md:min-w-80"
                />
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wrongReviewData.map((item, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: index * 0.1 + 0.2 }
                    }
                  }}
                  className="flex items-start gap-4 bg-gray-800/10 p-5 rounded-lg"
                >
                  <div className="bg-gray-800/50 p-3 rounded-full">
                    <item.icon className="h-6 w-6 text-[#d79921]" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-white">{item.title}</h3>
                    <p className="text-gray-400">{item.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Cover>
      </motion.div>
    </section>
    </>
  );
};
