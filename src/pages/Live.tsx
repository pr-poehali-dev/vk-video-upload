import { useState } from "react";
import { VideoCard } from "@/components/VideoCard";
import { VideoPlayerDialog } from "@/components/VideoPlayerDialog";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const mockLiveVideos = [
  {
    id: 101,
    title: "Прямой эфир: Обсуждаем новости технологий",
    author: "Tech News Live",
    authorAvatar: "",
    views: 3400,
    likes: 890,
    videoUrl: "https://vk.com/video101",
    isLive: true,
    thumbnail: "",
  },
  {
    id: 102,
    title: "Стрим: Играем в новую игру",
    author: "ProGamer",
    authorAvatar: "",
    views: 12800,
    likes: 2100,
    videoUrl: "https://vk.com/video102",
    isLive: true,
    thumbnail: "",
  },
  {
    id: 103,
    title: "Живой концерт: Рок музыка",
    author: "Music Live",
    authorAvatar: "",
    views: 8900,
    likes: 1540,
    videoUrl: "https://vk.com/video103",
    isLive: true,
    thumbnail: "",
  },
  {
    id: 104,
    title: "Кулинарный мастер-класс в прямом эфире",
    author: "Chef Online",
    authorAvatar: "",
    views: 2200,
    likes: 450,
    videoUrl: "https://vk.com/video104",
    isLive: true,
    thumbnail: "",
  },
];

export const Live = () => {
  const [selectedVideo, setSelectedVideo] = useState<any>(null);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  const handleVideoClick = (video: any) => {
    setSelectedVideo(video);
    setIsPlayerOpen(true);
  };

  return (
    <div className="container py-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl font-bold">Прямые трансляции</h1>
          <Badge className="bg-destructive text-destructive-foreground px-3 py-1">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              {mockLiveVideos.length} в эфире
            </span>
          </Badge>
        </div>
        <p className="text-muted-foreground">Смотрите прямые эфиры прямо сейчас</p>
      </div>

      {mockLiveVideos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {mockLiveVideos.map((video, index) => (
            <div
              key={video.id}
              style={{ animationDelay: `${index * 0.1}s` }}
              className="animate-scale-in"
            >
              <VideoCard {...video} onClick={() => handleVideoClick(video)} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-4">
            <Icon name="Radio" size={48} className="text-muted-foreground" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Нет активных трансляций</h3>
          <p className="text-muted-foreground max-w-md">
            В данный момент никто не ведёт прямой эфир. Загляните позже или начните свою трансляцию!
          </p>
        </div>
      )}

      <VideoPlayerDialog
        open={isPlayerOpen}
        onOpenChange={setIsPlayerOpen}
        video={selectedVideo}
      />
    </div>
  );
};