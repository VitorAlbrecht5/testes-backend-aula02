# Aula 02 — Testes Unitários no Node.js

## Identificação

**Nome:** Vitor e Cibely
**Turma:** Full Stack

---

## Como rodar

### Projeto Calculadora

Dentro da pasta do projeto:

```bash
npm install
npm test
```

### Projeto Boletim Escolar

Dentro da pasta do projeto:

```bash
npm install
npm test
```

---

# Parte A — Calculadora

## Exercício 1 — Operações matemáticas

| Caso | Função | Entrada | Esperado | Obtido |
|---|---|---|---|---|
| CT-01 | subtrair | 10, 4 | 6 | Passou |
| CT-02 | multiplicar | 3, 4 | 12 | Passou |
| CT-03 | dividir | 10, 2 | 5 | Passou |

## Exercício 2 — Casos de borda

### Números negativos

```js
expect(somar(-2, -3)).toBe(-5);
```

**Resultado:** Passou

### Divisão por zero

```js
expect(dividir(10, 0)).toBe(null);
```

**Resultado:** Passou

### Números decimais

```js
expect(somar(0.1, 0.2)).toBe(0.3);
```

**Resultado:** Falhou

**Resposta:** Na forma como o computador guarda números.

## Exercício 4 — Novos cálculos

| Caso | Função | Entrada | Esperado | Obtido |
|---|---|---|---|---|
| CT-04 | potencia | 2, 3 | 8 | Passou |
| CT-05 | porcentagem | 200, 10 | 20 | Passou |
| CT-06 | mediaDeTres | 6, 7, 8 | 7 | Passou |

---

# Parte B — Boletim Escolar

## Plano de testes

| Caso | Função | Entrada | Esperado | Obtido |
|---|---|---|---|---|
| CT-01 | calcularMedia | [5, 6] | 5.5 | Passou |
| CT-02 | situacao | 7 | "Aprovado" | Passou |
| CT-03 | situacao | 4.9 | "Reprovado" | Passou |
| CT-04 | estaAprovado | 6 | false | Passou |
| CT-05 | quantidadeAcimaDe | [4, 7, 8.5, 6.9], 7 | 2 | Passou |
| CT-06 | estaAprovado | 1 | false | Passou |
| CT-07 | calcularMedia | [6, 6] | 6 | Passou |

---

# Parte C — Frequência

## Tabela de casos

| Caso | Função | Entrada (aulas, faltas) | Esperado | Obtido |
|---|---|---|---|---|
| CT-01 | percentualPresenca | 40, 4 | 90 | Passou |
| CT-02 | percentualPresenca | 40, 0 | 100 | Passou |
| CT-03 | reprovadoPorFalta | 40, 4 | false | Passou |
| CT-04 | reprovadoPorFalta | 40, 12 | true | Passou |
| CT-05 | reprovadoPorFalta | 40, 10 (75%) | false | Falhou |

## Relato de bug

**Caso que falhou:**  
CT-05 — `reprovadoPorFalta(40, 10)`

**Passos para reproduzir:**  
Executar o teste `reprovadoPorFalta(40, 10)` no Jest.

**Resultado esperado:**  
`false`

**Resultado obtido (Received):**  
`true`

**Erro (o engano humano):**  
Foi usado `<= 75` em vez de `< 75` na condição de reprovação.

**Defeito (onde está no código):**  
Arquivo `frequencia.js`, na função `reprovadoPorFalta`:

```js
return presenca <= 75;
```

**Falha (o que o usuário perceberia):**  
Um aluno com exatamente 75% de presença seria reprovado por falta.

**Correção proposta:**

Alterar:

```js
return presenca <= 75;
```

Para:

```js
return presenca < 75;
```

---

# Resultado final

## Projeto Calculadora

```text
Operações matemáticas:

    √ Deve somar dois números
    √ Deve somar dois números negativos (1 ms)
    √ Deve somar números decimais
    √ deve subtrair dois números (1 ms)
    √ deve multiplicar dois números
    √ deve dividir dois números
    √ Deve retornar null ao dividir por zero
    √ Deve reconhecer 4 como par
    √ Deve reconhecer 7 como ímpar
    √ Deve calcular potência
    √ Deve calcular porcentagem
    √ Deve calcular média de três números
```

## Projeto Boletim Escolar

```text
 Teste de Frequência:

    √ Deve calcular 90% de presença (2 ms)
    √ Deve calcular 100% de presença (1 ms)
    √ Não deve reprovar com 90% de presença
    √ Deve reprovar com 70% de presença
    √ Não deve reprovar com exatamente 75% de presença (1 ms)


Calculo de Boletim:

    √ Deve calcular a média das notas
    √ Deve retornar Reprovado para média 4.9
    √ Deve retornar false para média 1
    √ Deve retornar a maior nota
    √ Deve contar notas maiores ou iguais ao corte
```
