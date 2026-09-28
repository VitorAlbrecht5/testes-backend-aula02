export const calcularMedia = (notas) => {
  if (notas.length === 0) {
    return 0;
  }

  const soma = notas.reduce((total, nota) => total + nota, 0);
  return soma / notas.length;
};

export const situacao = (media) => {
    if (media >= 7) {
        return "Aprovado";
    } else if (media >= 5) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
};

export const estaAprovado = (media) => {
    return media >= 7;
};

export const maiorNota = (notas) => {
    return Math.max(...notas);
};

export const quantidadeAcimaDe = (notas, corte) => {
    return notas.filter(nota => nota >= corte).length;
};