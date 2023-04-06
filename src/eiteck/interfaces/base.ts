import { Character } from "./character";

export interface BaseRest {
  info: Information,
  results: Character[]
}

export interface Information {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}