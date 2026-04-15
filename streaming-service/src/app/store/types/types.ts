export interface QueryState {
  countries: number[];
  genres: number[];
  order: string;
  type: string;
  page: number;
  year?: number;
}

export interface QuerySearchState extends QueryState {
  keyword: string;
}