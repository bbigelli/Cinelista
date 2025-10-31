import { renderHook } from "@testing-library/react";
import { useResumoFilme } from "./useResumoFilme";

test("Retorna o resumo correto para filmes com overview maior que o maximo", () => {
  const texto = "Resumo curto";
  const { result } = renderHook(() => useResumoFilme(texto, 256));
  expect(result.current).toBe(texto);
});

test("Retorna o overview cortado e reticiencias se passar do limite", () => {
  const texto =
    "Resumo muito longo do overview do filme porque excede o limite.";
  const { result } = renderHook(() => useResumoFilme(texto, 10));
  expect(result.current).toBe("Resumo mui...");
});
