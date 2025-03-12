import { Platform } from "@/entities/Platform";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  description_raw: string;
  slug: string;
}
