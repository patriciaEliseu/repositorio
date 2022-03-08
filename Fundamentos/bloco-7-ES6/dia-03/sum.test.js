const sum = require('./sum');
// 1.Teste se o retorno de sum(4, 5) é 9
test('adds 4 + 5 to equal 9', () => {
    expect(sum(4, 5)).toBe(9);
});