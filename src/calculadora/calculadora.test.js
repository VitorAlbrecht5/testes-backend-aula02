import {
  somar,
  subtrair,
  multiplicar,
  dividir,
  ehPar,
  potencia,
  mediaDeTres,
  porcentagem,
} from "./calculadora";

describe("Operações matemáticas", () => {
  // it
  test("Deve somar dois números", () => {
    // Arrange
    const a = 2;
    const b = 3;
    const esperadoSomar = 5;

    // Act
    const resultado = somar(a, b);

    // Assert
    expect(resultado).toBe(esperadoSomar);
  });

  test("Deve somar dois números negativos", () => {
    // Arrange
    const a = -2;
    const b = -3;
    const esperadoSomarNegativo = -5;

    // Act
    const resultado = somar(a, b);

    // Assert
    expect(resultado).toBe(esperadoSomarNegativo);
  });

  test("Deve somar números decimais", () => {
    const resultado = somar(0.1, 0.2);
    Math.round(resultado * 100) / 100;
  });

  test("deve subtrair dois números", () => {
    // Arrange
    const a = 10;
    const b = 4;
    const esperadoSubtrair = 6;

    // Act
    const resultado = subtrair(a, b);

    // Assert
    expect(resultado).toBe(esperadoSubtrair);
  });

  test("deve multiplicar dois números", () => {
    // Arrange
    const a = 3;
    const b = 4;
    const esperadoMultiplicar = 12;

    // Act
    const resultado = multiplicar(a, b);

    // Assert
    expect(resultado).toBe(esperadoMultiplicar);
  });

  test("deve dividir dois números", () => {
    // Arrange
    const a = 10;
    const b = 2;
    const esperadoDividir = 5;

    // Act
    const resultado = dividir(a, b);

    // Assert
    expect(resultado).toBe(esperadoDividir);
  });

  test("Deve retornar null ao dividir por zero", () => {
    // Arrange
    const a = 10;
    const b = 0;
    const esperadoDividirZero = null;

    // Act
    const resultado = dividir(a, b);

    // Assert
    expect(resultado).toBe(esperadoDividirZero);
  });

  test("Deve reconhecer 4 como par", () => {
    expect(ehPar(4)).toBe(true);
  });

  test("Deve reconhecer 7 como ímpar", () => {
    expect(ehPar(7)).toBe(false);
  });

  test("Deve calcular potência", () => {
    expect(potencia(2, 3)).toBe(8);
  });

  test("Deve calcular porcentagem", () => {
    expect(porcentagem(200, 10)).toBe(20);
  });

  test("Deve calcular média de três números", () => {
    expect(mediaDeTres(6, 7, 8)).toBe(7);
  });
});
