export interface Movie {
  Title: string;
  Year: number;
  imdbID: string;
  Type: string;
  Poster?: string;
  Rated?: string;
  Released?: string;
  Runtime?: string;
  Genre?: string;
  Director?: string;
  Writer?: string;
  Actors?: string;
  Plot?: string;
  Language?: string;
  Country?: string;
  Awards?: string;
  Ratings?: { Source: string, Value: string}[];
  Metascore?: number;
  imdbRating?: number;
  imdbVotes?: string;
  DVD?: string;
  BoxOffice?: string;
  Production?: string;
  Website?: string;
  totalSeasons?: number;
  Response?: boolean;
}
