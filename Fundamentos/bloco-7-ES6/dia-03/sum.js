function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('parameters must be numbers'); /* os parametros devem ser numeros */
    }

    return a + b;
}

module.exports = sum;