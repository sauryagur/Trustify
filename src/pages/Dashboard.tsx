
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Star, TrendingUp, Users, ShoppingBag } from "lucide-react";

// Mock data
const reviewData = [
  { month: "Jan", reviews: 65, sentiment: 4.2 },
  { month: "Feb", reviews: 78, sentiment: 4.3 },
  { month: "Mar", reviews: 92, sentiment: 4.1 },
  { month: "Apr", reviews: 120, sentiment: 4.4 },
  { month: "May", reviews: 143, sentiment: 4.5 },
  { month: "Jun", reviews: 165, sentiment: 4.6 },
];

const productData = [
  { name: "Wireless Headphones", reviews: 125, rating: 4.7 },
  { name: "Bluetooth Speaker", reviews: 89, rating: 4.5 },
  { name: "Smart Watch", reviews: 72, rating: 4.2 },
  { name: "Fitness Tracker", reviews: 65, rating: 4.0 },
  { name: "Wireless Charger", reviews: 54, rating: 4.8 },
];

const stats = [
  { 
    title: "Total Reviews", 
    value: "1,248", 
    change: "+12.5%", 
    icon: Star,
    color: "from-purple-600 to-blue-600" 
  },
  { 
    title: "Avg. Sentiment", 
    value: "4.3", 
    change: "+0.2", 
    icon: TrendingUp,
    color: "from-green-500 to-emerald-600" 
  },
  { 
    title: "Active Users", 
    value: "824", 
    change: "+5.3%", 
    icon: Users,
    color: "from-blue-500 to-indigo-600" 
  },
  { 
    title: "Products", 
    value: "37", 
    change: "+2", 
    icon: ShoppingBag,
    color: "from-amber-500 to-orange-600" 
  },
];

const Dashboard = () => {
  const [period, setPeriod] = useState("monthly");
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-green-500">
                Merchant Dashboard
              </span>
            </h1>
            
            <div>
              <select className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2">
                <option>Last 30 days</option>
                <option>Last 90 days</option>
                <option>Last 12 months</option>
                <option>All time</option>
              </select>
            </div>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="border-gray-200/50 dark:border-gray-700/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{stat.title}</p>
                      <h3 className="text-2xl font-bold">{stat.value}</h3>
                      <p className={`text-sm ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                        {stat.change} from previous period
                      </p>
                    </div>
                    <div className={`h-12 w-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card className="border-gray-200/50 dark:border-gray-700/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-lg">
              <CardHeader>
                <CardTitle>Review Volume</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={reviewData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="month" stroke="#6B7280" />
                      <YAxis stroke="#6B7280" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1F2937', 
                          border: 'none', 
                          borderRadius: '0.375rem',
                          color: '#F9FAFB' 
                        }} 
                      />
                      <Bar dataKey="reviews" fill="#8884d8" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-gray-200/50 dark:border-gray-700/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-lg">
              <CardHeader>
                <CardTitle>Sentiment Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={reviewData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="month" stroke="#6B7280" />
                      <YAxis domain={[0, 5]} stroke="#6B7280" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1F2937', 
                          border: 'none', 
                          borderRadius: '0.375rem',
                          color: '#F9FAFB' 
                        }} 
                      />
                      <Line 
                        type="monotone" 
                        dataKey="sentiment" 
                        stroke="#10B981" 
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Top Products Table */}
          <Card className="border-gray-200/50 dark:border-gray-700/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-lg">
            <CardHeader>
              <CardTitle>Top Products by Reviews</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 px-4">Product</th>
                      <th className="text-left py-3 px-4">Reviews</th>
                      <th className="text-left py-3 px-4">Rating</th>
                      <th className="text-left py-3 px-4">Trend</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productData.map((product, index) => (
                      <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                        <td className="py-3 px-4">{product.name}</td>
                        <td className="py-3 px-4">{product.reviews}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <span className="mr-2">{product.rating}</span>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                                />
                              ))}
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                            <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${(product.rating / 5) * 100}%` }}></div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
