export const percentualPresenca = (aulasDadas, faltas) => {
  const presencas = aulasDadas - faltas;
  return (presencas / aulasDadas) * 100;
};

export const reprovadoPorFalta = (aulasDadas, faltas) => {
  const presenca = percentualPresenca(aulasDadas, faltas);
  return presenca < 75;
};
