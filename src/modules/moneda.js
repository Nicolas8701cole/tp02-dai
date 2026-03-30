import countryCurrencyMap from "country-currency-map"
function money(nombrePais) {
    const datos = countryCurrencyMap.getCountry(nombrePais)
    if (datos) {
        return datos.currency
    }
    else {
        return "Country no encontrado"
    }
}
export {money}