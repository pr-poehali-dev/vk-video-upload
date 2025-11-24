import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";

interface VideoPlayerDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  video: {
    title: string;
    author: string;
    authorAvatar?: string;
    views: number;
    likes: number;
    videoUrl: string;
  } | null;
}

export const VideoPlayerDialog = ({ open, onOpenChange, video }: VideoPlayerDialogProps) => {
  const [liked, setLiked] = useState(false);

  if (!video) return null;

  const extractVKVideoId = (url: string) => {
    let match = url.match(/video(-?\d+)_(\d+)/);
    if (match) {
      return { oid: match[1], id: match[2] };
    }
    
    match = url.match(/wall(-?\d+)_(\d+)/);
    if (match) {
      return { oid: match[1], id: match[2] };
    }
    
    return null;
  };

  const videoId = extractVKVideoId(video.videoUrl);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-0">
        <div className="bg-card">
          <div className="relative aspect-video bg-black">
            {videoId ? (
              <iframe
                src={`https://vk.com/video_ext.php?oid=${videoId.oid}&id=${videoId.id}&hd=2`}
                width="100%"
                height="100%"
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
                frameBorder="0"
                allowFullScreen
                className="absolute inset-0"
              ></iframe>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Icon name="AlertCircle" size={48} className="text-muted-foreground mb-4 mx-auto" />
                  <p className="text-muted-foreground">Неверный формат ссылки VK</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Используйте ссылку формата: vk.com/video-123_456
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="p-6">
            <DialogHeader className="mb-4">
              <DialogTitle className="text-2xl">{video.title}</DialogTitle>
            </DialogHeader>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={video.authorAvatar} />
                  <AvatarFallback>{video.author.charAt(0).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{video.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {video.views.toLocaleString()} просмотров
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant={liked ? "default" : "outline"}
                  onClick={() => setLiked(!liked)}
                  className="gap-2"
                >
                  <Icon name={liked ? "Heart" : "Heart"} size={18} className={liked ? "fill-current" : ""} />
                  {(video.likes + (liked ? 1 : 0)).toLocaleString()}
                </Button>
                <Button variant="outline" className="gap-2">
                  <Icon name="Share2" size={18} />
                  Поделиться
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};