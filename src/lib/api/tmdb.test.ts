import { getTrendingMovies } from "./tmdb";
import tmdbApi from "./axios";

jest.mock("./axios");
test("Retorna Filmes em destaque", async () => {
  const mockResults = [{ id: 1, title: "Filme 1" }];
  (tmdbApi.get as jest.Mock).mockResolvedValue({
    data: { results: mockResults },
  });

  const filmes = await getTrendingMovies();

  expect(filmes).toEqual(mockResults);
});
