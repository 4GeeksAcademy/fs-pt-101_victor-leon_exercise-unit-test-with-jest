// Declaramos una función con el nombre exacto "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

console.log("Hello World");

// Esta es mi función que suma dos números
const sum = (a, b) => {
    return a + b;
}

// Solo un registro en consola para nosotros
console.log(sum(7, 3));

// One euro is:
const oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07,  // us dollar
    "GBP": 0.87,  // british pound
};

const fromEurotoDollar = (eur) => {
    return eur * oneEuroIs["USD"];
};

const fromYenToPound = (yen) => {
    return (yen / oneEuroIs["JPY"]) * oneEuroIs["GBP"];
};

const fromDollarToYen = (dollar) => {
    return (dollar / oneEuroIs["USD"]) * oneEuroIs["JPY"];
};

console.log(fromEurotoDollar(1));
console.log(fromDollarToYen(1));
console.log(fromYenToPound(1));

// Exporta las funciones y la variable oneEuroIs para usarlas en otros archivos
module.exports = { sum, fromEuroToDollar, fromYenToPound, fromDollarToYen, oneEuroIs };
