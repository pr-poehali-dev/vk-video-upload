import { VideoCard } from "@/components/VideoCard";

const mockVideos = [
  {
    id: 1,
    title: "Топ 10 мест для путешествий в 2024",
    author: "Путешествия с Максом",
    authorAvatar: "",
    views: 12500,
    likes: 890,
    videoUrl: "https://vk.com/video1",
    isLive: false,
    thumbnail: "",
  },
  {
    id: 2,
    title: "Как приготовить идеальный стейк",
    author: "Кулинарный блог",
    authorAvatar: "",
    views: 8900,
    likes: 654,
    videoUrl: "https://vk.com/video2",
    isLive: false,
    thumbnail: "",
  },
  {
    id: 3,
    title: "Обзор нового iPhone 15 Pro",
    author: "Tech Review",
    authorAvatar: "",
    views: 45000,
    likes: 3200,
    videoUrl: "https://vk.com/video3",
    isLive: false,
    thumbnail: "",
  },
  {
    id: 4,
    title: "Тренировка для начинающих",
    author: "Фитнес с Анной",
    authorAvatar: "",
    views: 6700,
    likes: 420,
    videoUrl: "https://vk.com/video4",
    isLive: false,
    thumbnail: "",
  },
  {
    id: 5,
    title: "Лучшие игры 2024 года",
    author: "Gaming Zone",
    authorAvatar: "",
    views: 23400,
    likes: 1800,
    videoUrl: "https://vk.com/video5",
    isLive: false,
    thumbnail: "",
  },
  {
    id: 6,
    title: "Уроки фотографии для новичков",
    author: "Фото мастер",
    authorAvatar: "",
    views: 5600,
    likes: 340,
    videoUrl: "https://vk.com/video6",
    isLive: false,
    thumbnail: "",
  },
];

interface HomeProps {
  videos?: any[];
}

export const Home = ({ videos = mockVideos }: HomeProps) => {
  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Рекомендации</h1>
        <p className="text-muted-foreground">Популярные видео на платформе</p>
      </div>

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
    </div>
  );
};
