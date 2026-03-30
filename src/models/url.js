import { URL } from 'url'
function parsearUrl(url) {
    try {
        const newUrl = new URL(url)
        return {
            host: newUrl.host,              //Host: "localhost:8080"
            pathname: newUrl.pathname,      //pathname: "/productos/ver"
            parametros: newUrl.search       //parametros "?id=123&color=rojo"
        }
    }
    catch (error) {
        console.error(`Exepción ${error.message}`)
    }
}
export { parsearUrl }