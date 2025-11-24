
import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/Header";
import { Home } from "./pages/Home";
import { Live } from "./pages/Live";
import { AddVideoDialog } from "@/components/AddVideoDialog";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [userVideos, setUserVideos] = useState<any[]>([]);

  const handleAddVideo = (video: any) => {
    setUserVideos([video, ...userVideos]);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-background">
            <Header onAddVideo={() => setIsAddDialogOpen(true)} />
            <Routes>
              <Route path="/" element={<Home videos={userVideos.length > 0 ? userVideos : undefined} />} />
              <Route path="/live" element={<Live />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <AddVideoDialog
              open={isAddDialogOpen}
              onOpenChange={setIsAddDialogOpen}
              onAddVideo={handleAddVideo}
            />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;