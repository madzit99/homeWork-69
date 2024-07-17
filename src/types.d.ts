export interface ShowInterface {
  score: number;
  show: {
    id: number;
    name: string;
  };
}

export interface ShowInfo {
  name: string;
  genres: string[];
  image: {
    medium: string;
  };
  summary: string;
}
