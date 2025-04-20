
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import EmbedFrame from "@/components/embed/EmbedFrame";

const Embed = () => {
  const location = useLocation();
  
  const searchParams = new URLSearchParams(location.search);
  const productId = searchParams.get("product") || undefined;
  const merchantId = searchParams.get("merchant") || undefined;
  const theme = (searchParams.get("theme") as "light" | "dark") || "light";
  const showAllReviews = searchParams.get("showAllReviews") !== "false";
  
  useEffect(() => {
    // Communicate with parent window (for iframe messaging)
    const handleMessage = (event: MessageEvent) => {
      // Handle any messages from parent window
      if (event.data?.type === "init") {
        // Initialize the frame
        console.log("Embed initialized with:", event.data);
      }
    };
    
    window.addEventListener("message", handleMessage);
    
    // Notify parent that iframe is ready
    if (window !== window.parent) {
      window.parent.postMessage({ type: "iframe-ready" }, "*");
    }
    
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);
  
  return (
    <div className="min-h-screen">
      <EmbedFrame 
        productId={productId}
        merchantId={merchantId}
        theme={theme}
        showAllReviews={showAllReviews}
      />
    </div>
  );
};

export default Embed;
