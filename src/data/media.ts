export type MediaType = "video" | "audio" | "external-link" | "pending";

export type MediaItem = {
  id: string;
  title: string;
  outlet: string;
  date?: string;
  description: string;
  type: MediaType;
  image?: string;
  imageAlt?: string;
  href?: string;
  embedUrl?: string;
  featured?: boolean;
};

export const rtvParkstadYoutubeUrl =
  "https://youtu.be/RqO8ZozJM5M?si=NkOGMugdkSo7xEUm";

export const rtvParkstadEmbedUrl =
  "https://www.youtube-nocookie.com/embed/RqO8ZozJM5M";

export const mediaItems = [
  {
    id: "rtv-parkstad-interview",
    title: "Roger Chappin bij RTV Parkstad",
    outlet: "RTV Parkstad",
    date: "2026-05-13",
    description:
      "RTV Parkstad-interview waarin Roger te gast was om over zijn Alpe d'HuZes-campagne te vertellen.",
    type: "video",
    image: "/images/media/roger-rtv-parkstad-studio.jpg",
    imageAlt: "Roger Chappin tijdens zijn bezoek aan RTV Parkstad.",
    href: rtvParkstadYoutubeUrl,
    embedUrl: rtvParkstadEmbedUrl,
    featured: true,
  },
] satisfies MediaItem[];

export const featuredMediaItem = mediaItems.find((item) => item.featured);
