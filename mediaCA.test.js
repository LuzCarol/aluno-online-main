// função mediaCA()
function mediaCA(nota) {
  if (nota >= 9.0 && nota <= 10) {
    return 'SS - Superior';
  } else if (nota >= 7.0 && nota <= 8.9) {
    return 'MS - Médio Superior';
  } else if (nota >= 5.0 && nota <= 6.9) {
    return 'MM - Médio';
  } else if (nota >= 3.0 && nota <= 4.9) {
    return 'MI - Médio Inferior';
  } else if (nota >= 0.1 && nota <= 2.9) {
    return 'II - Inferior';
  } else if (nota === 0.0) {
    return 'SR - Sem rendimento';
  } else {
    throw new Error('Nota inválida');
  }
}

// Testes unitários
describe('Testes para a função mediaCA()', () => {
  it('Deve retornar "SS - Superior" quando a nota for 9.0', () => {
    expect(mediaCA(9.0)).toBe('SS - Superior');
  });

  it('Deve retornar "MS - Médio Superior" quando a nota for 7.5', () => {
    expect(mediaCA(7.5)).toBe('MS - Médio Superior');
  });

  it('Deve retornar "MM - Médio" quando a nota for 5.5', () => {
    expect(mediaCA(5.5)).toBe('MM - Médio');
  });

  it('Deve retornar "MI - Médio Inferior" quando a nota for 4.0', () => {
    expect(mediaCA(4.0)).toBe('MI - Médio Inferior');
  });

  it('Deve retornar "II - Inferior" quando a nota for 2.5', () => {
    expect(mediaCA(2.5)).toBe('II - Inferior');
  });

  it('Deve retornar "SR - Sem rendimento" quando a nota for 0.0', () => {
    expect(mediaCA(0.0)).toBe('SR - Sem rendimento');
  });

  it('Deve lançar um erro quando a nota for inválida (menor que 0)', () => {
    expect(() => mediaCA(-1.0)).toThrow('Nota inválida');
  });

  it('Deve lançar um erro quando a nota for inválida (maior que 10)', () => {
    expect(() => mediaCA(11.0)).toThrow('Nota inválida');
  });
});