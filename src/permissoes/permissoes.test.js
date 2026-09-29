// permissoes.test.js
const { listarPermissoes } = require('./permissoes.js');

describe('listarPermissoes', () => {
  test('CT-01: lista as permissões de um usuário com várias', () => {
    // Arrange
    const email = 'maria@empresa.com';

    // Act
    const resultado = listarPermissoes(email);

    // Assert
    expect(resultado).toEqual([
      'ver_saldo',
      'transferir',
      'exportar_extrato'
    ]);
  });

  test('CT-02: lista a permissão de um usuário com uma só', () => {
    // Arrange
    const email = 'joao@empresa.com';

    // Act
    const resultado = listarPermissoes(email);

    // Assert
    expect(resultado).toEqual(['ver_saldo']);
  });

  test('CT-03: retorna array vazio para e-mail inexistente', () => {
    // Arrange
    const email = 'fantasma@empresa.com';

    // Act
    const resultado = listarPermissoes(email);

    // Assert
    expect(resultado).toEqual([]);
  });
});
