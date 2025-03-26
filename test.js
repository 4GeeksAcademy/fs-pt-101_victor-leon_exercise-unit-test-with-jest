// Importar las funciones y la tasa de conversión desde app.js
const { sum, fromEuroToDollar, fromYenToPound, fromDollarToYen, oneEuroIs } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    // Llamamos a la función sum con 2 números
    let total = sum(14, 9);
    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Uso la función fromEuroToDollar
    const dollars = fromEuroToDollar(3.5);
    // Si 1 euro son 1.07 dólares, entonces 3.5 euros deben ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;
    expect(dollars).toBe(expected);
});

test("Convierte de yenes a libras", () => {
    const yen = 30000;
    const expected = (yen / oneEuroIs["JPY"]) * oneEuroIs["GBP"];
    expect(fromYenToPound(yen)).toBe(expected);
});

test("Convierte de dolares a yenes", () => {
    const dollar = 499;
    const expected = (dollar / oneEuroIs["USD"]) * oneEuroIs["JPY"];
    expect(fromDollarToYen(dollar)).toBe(expected);
});
