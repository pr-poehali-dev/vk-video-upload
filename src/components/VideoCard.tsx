import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface VideoCardProps {
  title: string;
  author: string;
  authorAvatar?: string;
  views: number;
  likes: number;
  videoUrl: string;
  isLive?: boolean;
  thumbnail?: string;
  onClick?: () => void;
}

export const VideoCard = ({
  title,
  author,
  authorAvatar,
  views,
  likes,
  videoUrl,
  isLive = false,
  thumbnail,
  onClick
}: VideoCardProps) => {
  return (
    <Card 
      className="overflow-hidden bg-card hover:scale-105 transition-transform duration-300 cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative aspect-video bg-muted">
        {thumbnail ? (
          <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Icon name="Video" size={48} className="text-muted-foreground" />
          </div>
        )}
        {isLive && (
          <Badge className="absolute top-3 right-3 bg-destructive text-destructive-foreground">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              LIVE
            </span>
          </Badge>
        )}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center">
            <Icon name="Play" size={32} className="text-white ml-1" />
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex gap-3">
          <Avatar className="w-10 h-10">
            <AvatarImage src={authorAvatar} />
            <AvatarFallback>{author.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
          
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-foreground line-clamp-2 mb-1">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground mb-2">{author}</p>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Icon name="Eye" size={16} />
                {views.toLocaleString()}
              </span>
              <span className="flex items-center gap-1">
                <Icon name="Heart" size={16} />
                {likes.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};