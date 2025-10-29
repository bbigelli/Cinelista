import { Filme } from '@/types/types';
import tmdbApi from './axios';

type Data = {
  results: Filme[];
};

export const getTrendingMovies = async () => {
  const res = await tmdbApi.get<Data>('/trending/movie/week?language=pt-BR');

  return res.data.results;
};

export const getMovieDetails = async (
  id: number,
): Promise<Filme | undefined> => {
  const res = await tmdbApi.get<Filme>(`/movie/${id}?language=pt-BR`);

  return res.data;
};

export const getNowPlaying = async () => {
  const res = await tmdbApi.get<Data>('/movie/now_playing?language=pt-BR');

  return res.data.results;
};

export const getPopular = async () => {
  const res = await tmdbApi.get<Data>('/movie/popular?language=pt-BR');

  return res.data.results;
};

export const getTopMovies = async () => {
  const res = await tmdbApi.get<Data>('/movie/top_rated?language=pt-BR');

  return res.data.results;
};
