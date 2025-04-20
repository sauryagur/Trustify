
import { Lock, Award, Shield, TrendingUp, UserPlus, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Lock,
    title: "Anonymous Reviews",
    description: "Users can leave honest reviews without revealing their identity, protected by blockchain technology."
  },
  {
    icon: Award,
    title: "AI-Powered Scoring",
    description: "Machine learning algorithms evaluate reviews for quality and helpfulness, ensuring valuable feedback."
  },
  {
    icon: Shield,
    title: "Immutable Records",
    description: "All reviews are stored on the ICP blockchain, making them tamper-proof and verifiable."
  },
  {
    icon: TrendingUp,
    title: "Reward System",
    description: "Top reviewers receive vouchers and coupons via smart contracts, incentivizing quality feedback."
  },
  {
    icon: UserPlus,
    title: "Easy Integration",
    description: "Embed Trustify on any e-commerce platform with a simple iframe implementation."
  },
  {
    icon: Heart,
    title: "Build Customer Trust",
    description: "Authentic reviews lead to increased customer confidence and higher conversion rates."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-4" id="features">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-green-500">
              Powerful Features
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Trustify combines blockchain security with AI intelligence to create a review system you can trust.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-gray-200/50 dark:border-gray-700/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 h-12 w-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-green-500/20 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
