import { render, screen } from "@testing-library/react";
import { getTrendingMovies } from "./../lib/api/tmdb";
import Home from "./page";
import "@testing-library/jest-dom";

jest.mock("./../lib/api/tmdb", () => ({
  getTrendingMovies: jest.fn(),
}));

test("Exibe o titulo 'Filmes em destaque' na pagina inicial corretamente", async () => {
  const titulo = "Filmes em destaque";

  render(await Home());

  expect(screen.getByText(titulo)).toBeInTheDocument();
});

test("Renderiza os filmes em destaque corretamente", async () => {
  (getTrendingMovies as jest.Mock).mockResolvedValue([
    {
      id: 1,
      title: "Filme teste",
      overview: "Resumo teste",
      poster_path: "public/next.svg",
      vote_average: 8.0,
    },
  ]);

  render(await Home());
  expect(screen.getByText("Filme teste")).toBeInTheDocument();
});

test("Exibe uma mensagem quando nao houver filmes disponíveis", async () => {
  (getTrendingMovies as jest.Mock).mockResolvedValue([]);

  render(await Home());

  expect(screen.getByText("Nenhum filme encontrado.")).toBeInTheDocument();
});
