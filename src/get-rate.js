function getRate(rates, initialCurrency, targetCurrency) {
    return rates[initialCurrency][targetCurrency];
}

module.exports = {
    getRate,
};