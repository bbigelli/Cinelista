import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Title from "./index";

test("Renderiza o titulo com o texto correto", async () => {
  const titulo = "titulo";

  render(<Title title={titulo} />);

  const elemento = await screen.findByText(titulo);

  expect(elemento).toBeInTheDocument();
});
