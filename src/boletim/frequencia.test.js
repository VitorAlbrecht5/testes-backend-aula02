import {
  percentualPresenca,
  reprovadoPorFalta,
} from "./frequencia.js";

describe("Teste de Frequência", () => {
  test("Deve calcular 90% de presença", () => {
    // Arrange
    const aulas = 40;
    const faltas = 4;

    // Act
    const resultado = percentualPresenca(aulas, faltas);

    // Assert
    expect(resultado).toBe(90);
  });

  test("Deve calcular 100% de presença", () => {
    // Arrange
    const aulas = 40;
    const faltas = 0;

    // Act
    const resultado = percentualPresenca(aulas, faltas);

    // Assert
    expect(resultado).toBe(100);
  });

  test("Não deve reprovar com 90% de presença", () => {
    // Arrange
    const aulas = 40;
    const faltas = 4;

    // Act
    const resultado = reprovadoPorFalta(aulas, faltas);

    // Assert
    expect(resultado).toBe(false);
  });

  test("Deve reprovar com 70% de presença", () => {
    // Arrange
    const aulas = 40;
    const faltas = 12;

    // Act
    const resultado = reprovadoPorFalta(aulas, faltas);

    // Assert
    expect(resultado).toBe(true);
  });

  test("Não deve reprovar com exatamente 75% de presença", () => {
    // Arrange
    const aulas = 40;
    const faltas = 10;

    // Act
    const resultado = reprovadoPorFalta(aulas, faltas);

    // Assert
    expect(resultado).toBe(false);
  });
});