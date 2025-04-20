
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

const Docs = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-green-500">
                Documentation
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Learn how to integrate Trustify into your e-commerce platform in minutes.
            </p>
            
            <Tabs defaultValue="quickstart">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="quickstart">Quick Start</TabsTrigger>
                <TabsTrigger value="integration">Integration</TabsTrigger>
                <TabsTrigger value="customization">Customization</TabsTrigger>
              </TabsList>
              
              <TabsContent value="quickstart" className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Getting Started</h2>
                    <p className="mb-4">
                      To get started with Trustify, you'll need to embed our iframe in your product page.
                      Follow these simple steps:
                    </p>
                    
                    <ol className="list-decimal list-inside space-y-4 mb-6">
                      <li>Sign up for a Trustify account</li>
                      <li>Obtain your unique merchant ID</li>
                      <li>Copy the iframe code snippet below</li>
                      <li>Paste it into your product page HTML</li>
                    </ol>
                    
                    <div className="bg-gray-800 rounded-md p-4 relative">
                      <pre className="text-green-400 overflow-x-auto whitespace-pre-wrap">
{`<iframe 
  src="https://trustify.app/embed?merchant=YOUR_MERCHANT_ID&product=YOUR_PRODUCT_ID" 
  width="100%" 
  height="500" 
  frameborder="0">
</iframe>`}
                      </pre>
                      <button 
                        className="absolute top-2 right-2 p-1 rounded-md bg-gray-700 hover:bg-gray-600"
                        onClick={() => copyToClipboard('<iframe src="https://trustify.app/embed?merchant=YOUR_MERCHANT_ID&product=YOUR_PRODUCT_ID" width="100%" height="500" frameborder="0"></iframe>')}
                      >
                        <Copy className="h-4 w-4 text-gray-300" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Video Tutorial</h2>
                    <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-md flex items-center justify-center">
                      <div className="text-gray-400">Video player placeholder</div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="integration" className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Platform-specific Integration</h2>
                    
                    <h3 className="text-lg font-medium mt-6 mb-3">Shopify</h3>
                    <p className="mb-4">
                      To integrate with Shopify, follow these steps:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 mb-6">
                      <li>Go to your Shopify admin panel</li>
                      <li>Navigate to Online Store &gt; Themes</li>
                      <li>Click "Edit code" on your active theme</li>
                      <li>Open the product-template.liquid file</li>
                      <li>Add the Trustify iframe code before the closing &lt;/div&gt; tag</li>
                    </ol>
                    
                    <h3 className="text-lg font-medium mt-6 mb-3">WooCommerce</h3>
                    <p className="mb-4">
                      For WordPress/WooCommerce sites:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 mb-6">
                      <li>Install the Trustify WooCommerce plugin</li>
                      <li>Go to WooCommerce &gt; Settings &gt; Trustify</li>
                      <li>Enter your merchant ID and save settings</li>
                      <li>The review iframe will automatically appear on product pages</li>
                    </ol>
                    
                    <h3 className="text-lg font-medium mt-6 mb-3">Custom Implementation</h3>
                    <p className="mb-4">
                      For custom e-commerce platforms, you can use our JavaScript SDK:
                    </p>
                    <div className="bg-gray-800 rounded-md p-4 mb-4 relative">
                      <pre className="text-green-400 overflow-x-auto whitespace-pre-wrap">
{`<script src="https://cdn.trustify.app/sdk.js"></script>
<div id="trustify-reviews"></div>

<script>
  Trustify.init({
    container: '#trustify-reviews',
    merchantId: 'YOUR_MERCHANT_ID',
    productId: 'YOUR_PRODUCT_ID'
  });
</script>`}
                      </pre>
                      <button 
                        className="absolute top-2 right-2 p-1 rounded-md bg-gray-700 hover:bg-gray-600"
                        onClick={() => copyToClipboard('<script src="https://cdn.trustify.app/sdk.js"></script>\n<div id="trustify-reviews"></div>\n\n<script>\n  Trustify.init({\n    container: \'#trustify-reviews\',\n    merchantId: \'YOUR_MERCHANT_ID\',\n    productId: \'YOUR_PRODUCT_ID\'\n  });\n</script>')}
                      >
                        <Copy className="h-4 w-4 text-gray-300" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="customization" className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Customizing Your Integration</h2>
                    
                    <h3 className="text-lg font-medium mb-3">Theme Options</h3>
                    <p className="mb-4">
                      Customize the look and feel of the Trustify widget to match your brand:
                    </p>
                    <div className="bg-gray-800 rounded-md p-4 mb-6 relative">
                      <pre className="text-green-400 overflow-x-auto whitespace-pre-wrap">
{`<iframe 
  src="https://trustify.app/embed
    ?merchant=YOUR_MERCHANT_ID
    &product=YOUR_PRODUCT_ID
    &theme=light
    &primaryColor=%2341a34f
    &accentColor=%238550e6"
  width="100%" 
  height="500" 
  frameborder="0">
</iframe>`}
                      </pre>
                      <button 
                        className="absolute top-2 right-2 p-1 rounded-md bg-gray-700 hover:bg-gray-600"
                        onClick={() => copyToClipboard('<iframe src="https://trustify.app/embed?merchant=YOUR_MERCHANT_ID&product=YOUR_PRODUCT_ID&theme=light&primaryColor=%2341a34f&accentColor=%238550e6" width="100%" height="500" frameborder="0"></iframe>')}
                      >
                        <Copy className="h-4 w-4 text-gray-300" />
                      </button>
                    </div>
                    
                    <h3 className="text-lg font-medium mb-3">Display Options</h3>
                    <p className="mb-4">
                      Control which features are displayed in your widget:
                    </p>
                    <table className="w-full border-collapse mb-6">
                      <thead>
                        <tr className="bg-gray-100 dark:bg-gray-800">
                          <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Parameter</th>
                          <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Options</th>
                          <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Default</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">showRating</td>
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">true, false</td>
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">true</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">showSubmit</td>
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">true, false</td>
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">true</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">maxReviews</td>
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">number</td>
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">5</td>
                        </tr>
                      </tbody>
                    </table>
                    
                    <Button className="bg-green-500 hover:bg-green-600 text-white">
                      View Full Documentation
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Docs;
