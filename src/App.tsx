import { useQueryCall, useUpdateCall } from '@ic-reactor/react';

import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Docs from "./pages/Docs";
import Dashboard from "./pages/Dashboard";
import Embed from "./pages/Embed";
import WriteReview from "./pages/WriteReview";
import Reviews from "./pages/Reviews";
import AddReview from "./pages/AddReview";
import ViewReviews from "./pages/ViewReviews";

const queryClient = new QueryClient();

const App: React.FC = () => {
  React.useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);


  const { data: count, refetch } = useQueryCall({
    functionName: 'get',
  });

  const { call: increment, loading } = useUpdateCall({
    functionName: 'inc',
    onSuccess: refetch,
  });

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="dark bg-gradient-to-br from-gray-900 via-[#0f172a] to-gray-900 min-h-screen">
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/docs" element={<Docs />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/embed" element={<Embed />} />
              <Route path="/write-review" element={<WriteReview />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/add-review" element={<AddReview />} />
              <Route path="/view-reviews" element={<ViewReviews />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App
