import fs from 'fs/promises'
async function copiar(origen, destino) {
    try {
        const origen2 = await fs.readFile(origen, "utf-8")
        await fs.writeFile(destino, origen2)
        console.log(`Archivo alterado de ${origen} a ${origen2}`)

    }
    catch (error) {
        console.error(`ERROR_XDDDDDD ${error.message}`)
    }
}
export {copiar}