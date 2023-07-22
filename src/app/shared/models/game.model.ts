export interface Game {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  short_description: string;
  game_url: string;
  publisher: string;
  release_date: Date;
  platform: string;
  genre: string;
  screenshots: Screenshot[];
}

export interface Screenshot {
  id: number;
  image: string;
}
