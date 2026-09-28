import {
  calcularMedia,
  situacao,
  estaAprovado,
  maiorNota,
  quantidadeAcimaDe,
} from "./boletim.js";

describe("Calculo de Boletim", () => {
  test("Deve calcular a média das notas", () => {
    // Arrange
    const notas = [6, 6];

    // Act
    const resultado = calcularMedia(notas);

    // Assert
    expect(resultado).toBe(6);
  });

  test("Deve retornar Reprovado para média 4.9", () => {
    // Arrange
    const media = 4.9;

    // Act
    const resultado = situacao(media);

    // Assert
    expect(resultado).toBe("Reprovado");
  });

  test("Deve retornar false para média 1", () => {
    // Arrange
    const media = 1;

    // Act
    const resultado = estaAprovado(media);

    // Assert
    expect(resultado).toBe(false);
  });

  test("Deve retornar a maior nota", () => {
    // Arrange
    const notas = [6, 9.5, 8];

    // Act
    const resultado = maiorNota(notas);

    // Assert
    expect(resultado).toBe(9.5);
  });

  test("Deve contar notas maiores ou iguais ao corte", () => {
    // Arrange
    const notas = [4, 7, 8.5, 6.9];
    const corte = 7;

    // Act
    const resultado = quantidadeAcimaDe(notas, corte);

    // Assert
    expect(resultado).toBe(2);
  });
});