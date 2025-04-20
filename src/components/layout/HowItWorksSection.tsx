
import { CircleUser, PenLine, ShieldCheck, Award } from "lucide-react";

const steps = [
  {
    icon: CircleUser,
    title: "Anonymous Authentication",
    description: "Users authenticate via Internet Identity or anonymous wallet without revealing personal details."
  },
  {
    icon: PenLine,
    title: "Write Review",
    description: "Customers write honest product reviews directly in the embedded Trustify iframe."
  },
  {
    icon: ShieldCheck,
    title: "Blockchain Storage",
    description: "The review is processed and immutably stored on the Internet Computer Protocol blockchain."
  },
  {
    icon: Award,
    title: "Get Rewarded",
    description: "Quality reviewers receive rewards directly to their anonymous wallet address."
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-50/50 dark:bg-gray-800/50" id="how-it-works">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-green-500">
              How Trustify Works
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our decentralized review system preserves anonymity while rewarding quality.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-green-500 hidden md:block"></div>
          
          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-8">
                {/* For even items, swap order on desktop */}
                <div className={`md:w-1/2 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg p-6">
                    <div className="md:hidden mb-4 h-12 w-12 rounded-full bg-gradient-to-br from-purple-500 to-green-500 flex items-center justify-center mx-auto">
                      <step.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 md:text-left text-center">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 md:text-left text-center">{step.description}</p>
                  </div>
                </div>
                
                {/* Timeline node - visible only on desktop */}
                <div className={`hidden md:flex h-12 w-12 rounded-full bg-gradient-to-br from-purple-500 to-green-500 items-center justify-center z-10`}>
                  <step.icon className="h-6 w-6 text-white" />
                </div>
                
                {/* Empty div for layout on odd items */}
                <div className={`hidden md:block md:w-1/2 ${index % 2 === 1 ? 'md:order-1' : ''}`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
