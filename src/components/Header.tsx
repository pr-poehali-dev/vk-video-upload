import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { useState } from "react";

interface HeaderProps {
  onAddVideo: () => void;
}

export const Header = ({ onAddVideo }: HeaderProps) => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Video" size={20} className="text-white" />
            </div>
            VK Video
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/">
              <Button
                variant={location.pathname === "/" ? "default" : "ghost"}
                className="gap-2"
              >
                <Icon name="Home" size={18} />
                Главная
              </Button>
            </Link>
            <Link to="/live">
              <Button
                variant={location.pathname === "/live" ? "default" : "ghost"}
                className="gap-2"
              >
                <Icon name="Radio" size={18} />
                Трансляции
              </Button>
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden md:block w-64">
            <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Поиск видео..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <Button onClick={onAddVideo} className="gap-2">
            <Icon name="Plus" size={18} />
            <span className="hidden sm:inline">Добавить видео</span>
          </Button>
        </div>
      </div>
    </header>
  );
};
