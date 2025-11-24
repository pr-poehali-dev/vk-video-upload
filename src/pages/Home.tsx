import { VideoCard } from "@/components/VideoCard";
import Icon from "@/components/ui/icon";

interface HomeProps {
  videos?: any[];
}

export const Home = ({ videos = [] }: HomeProps) => {
  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Рекомендации</h1>
        <p className="text-muted-foreground">Популярные видео на платформе</p>
      </div>

      {videos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {videos.map((video, index) => (
            <div
              key={video.id}
              style={{ animationDelay: `${index * 0.1}s` }}
              className="animate-scale-in"
            >
              <VideoCard {...video} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-4">
            <Icon name="Video" size={48} className="text-muted-foreground" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Нет видео</h3>
          <p className="text-muted-foreground max-w-md">
            Пока здесь пусто. Нажмите кнопку "Добавить видео" чтобы добавить первое видео с VK!
          </p>
        </div>
      )}
    </div>
  );
};