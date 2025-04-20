
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { navItemHover } from "@/lib/animation";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "backdrop-blur-xl bg-gray-900/80 border-b border-gray-800 shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div whileHover={navItemHover}>
            <Link to="/" className="text-2xl font-bold text-gradient">
              Trustify
            </Link>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            {[
              ["Home", "/"],
              ["View Reviews", "/view-reviews"],
              ["Dashboard", "/dashboard"],
              ["Docs", "/docs"]
            ].map(([label, path]) => (
              <motion.div key={path} whileHover={navItemHover}>
                <Link
                  to={path}
                  className={`transition-colors ${
                    isActive(path)
                      ? "text-blue-400 font-medium"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl text-white">
              Authenticate
            </Button>
          </div>
          
          <motion.button
            whileHover={navItemHover}
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-300 hover:text-white"
          >
            <Menu className="h-6 w-6" />
          </motion.button>
        </div>
        
        <motion.div
          initial={false}
          animate={{ height: mobileMenuOpen ? "auto" : 0, opacity: mobileMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          {mobileMenuOpen && (
            <div className="backdrop-blur-xl bg-gray-900/90 p-4 rounded-b-lg border border-gray-800">
              <div className="flex flex-col space-y-4">
                <Link 
                  to="/"
                  className={`transition-colors ${
                    isActive("/") ? "text-blue-400" : "text-gray-300"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/add-review"
                  className={`transition-colors ${
                    isActive("/add-review") ? "text-blue-400" : "text-gray-300"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Add Review
                </Link>
                <Link 
                  to="/view-reviews"
                  className={`transition-colors ${
                    isActive("/view-reviews") ? "text-blue-400" : "text-gray-300"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  View Reviews
                </Link>
                <Link 
                  to="/dashboard"
                  className={`transition-colors ${
                    isActive("/dashboard") ? "text-blue-400" : "text-gray-300"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link 
                  to="/docs"
                  className={`transition-colors ${
                    isActive("/docs") ? "text-blue-400" : "text-gray-300"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Docs
                </Link>
                <div className="pt-4 flex flex-col space-y-2">
                  <Button variant="outline" className="w-full rounded-xl">Log In</Button>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl">Sign Up</Button>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
