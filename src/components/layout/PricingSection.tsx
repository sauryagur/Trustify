
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const plans = [
  {
    name: "Startup",
    price: 29,
    description: "Perfect for small e-commerce businesses",
    features: [
      "Up to 100 reviews per month",
      "AI scoring system",
      "Basic analytics",
      "Standard support",
      "1 store integration"
    ],
    popular: false,
    buttonText: "Start Free Trial"
  },
  {
    name: "Growth",
    price: 79,
    description: "Great for growing businesses",
    features: [
      "Up to 1000 reviews per month",
      "Advanced AI scoring system",
      "Comprehensive analytics",
      "Priority support",
      "5 store integrations",
      "Customizable review form"
    ],
    popular: true,
    buttonText: "Start Free Trial"
  },
  {
    name: "Enterprise",
    price: 199,
    description: "For large-scale operations",
    features: [
      "Unlimited reviews",
      "Enterprise AI scoring system",
      "Advanced analytics & reporting",
      "24/7 dedicated support",
      "Unlimited store integrations",
      "Fully customizable system",
      "API access",
      "Custom reward system"
    ],
    popular: false,
    buttonText: "Contact Sales"
  }
];

const PricingSection = () => {
  return (
    <section className="py-20 px-4" id="pricing">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-green-500">
              Simple, Transparent Pricing
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose a plan that works for your business needs and scale as you grow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`border-gray-200/50 dark:border-gray-700/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-lg ${
                plan.popular ? 'ring-2 ring-purple-500 dark:ring-purple-400' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 -mt-2 -mr-2 px-3 py-1 bg-gradient-to-r from-purple-600 to-green-500 text-white text-xs font-semibold rounded-full">
                  Most Popular
                </div>
              )}
              <CardHeader className="pt-6 px-6">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent className="px-6">
                <div className="flex items-baseline mt-4 mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="ml-1 text-gray-500 dark:text-gray-400">/month</span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="px-6 pb-6">
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-purple-600 to-green-500 hover:from-purple-700 hover:to-green-600' 
                      : ''
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
