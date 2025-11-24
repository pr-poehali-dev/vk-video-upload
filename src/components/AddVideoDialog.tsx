import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

interface AddVideoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAddVideo: (video: any) => void;
}

export const AddVideoDialog = ({ open, onOpenChange, onAddVideo }: AddVideoDialogProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    videoUrl: "",
    title: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.videoUrl || !formData.title) {
      toast({
        title: "Ошибка",
        description: "Заполните все обязательные поля",
        variant: "destructive",
      });
      return;
    }

    const newVideo = {
      id: Date.now(),
      title: formData.title,
      author: "Вы",
      authorAvatar: "",
      views: 0,
      likes: 0,
      videoUrl: formData.videoUrl,
      isLive: false,
      thumbnail: "",
    };

    onAddVideo(newVideo);
    
    toast({
      title: "Успешно!",
      description: "Видео добавлено на платформу",
    });

    setFormData({ videoUrl: "", title: "", description: "" });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Icon name="Plus" size={24} className="text-primary" />
            Добавить видео с VK
          </DialogTitle>
          <DialogDescription>
            Вставьте ссылку на видео из ВКонтакте и заполните информацию
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="videoUrl">
              Ссылка на видео VK <span className="text-destructive">*</span>
            </Label>
            <Input
              id="videoUrl"
              placeholder="https://vk.com/video..."
              value={formData.videoUrl}
              onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">
              Название видео <span className="text-destructive">*</span>
            </Label>
            <Input
              id="title"
              placeholder="Введите название"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Описание</Label>
            <Textarea
              id="description"
              placeholder="Краткое описание видео"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={3}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="flex-1">
              Отмена
            </Button>
            <Button type="submit" className="flex-1 gap-2">
              <Icon name="Check" size={18} />
              Добавить
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
