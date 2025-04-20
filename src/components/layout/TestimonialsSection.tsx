
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    content: "Trustify has completely changed how customers interact with our products. The anonymous review system has increased our review count by 320% and our conversion rate by 28%.",
    author: "Alex Morgan",
    role: "E-commerce Manager",
    company: "StyleHouse",
    rating: 5
  },
  {
    content: "The blockchain verification gives our customers confidence that our reviews are legitimate. This technology is the future of e-commerce trust systems.",
    author: "Jamie Chen",
    role: "CTO",
    company: "TechGear",
    rating: 5
  },
  {
    content: "Our customers love the reward system for quality reviews. It's created a positive feedback loop that benefits both our business and our community.",
    author: "Sam Rodriguez",
    role: "Marketing Director",
    company: "FitLife",
    rating: 4
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4" id="testimonials">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-green-500">
              What Merchants Say
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Trusted by hundreds of e-commerce businesses around the world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-gray-200/50 dark:border-gray-700/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{testimonial.content}</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-green-500"></div>
                  <div className="ml-3">
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
