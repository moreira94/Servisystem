import fs1 from 'fs'

const fs = fs1.promises;

export default class ManagerPedidos {
    constructor() {
        this.pedidos = [];
        this.PATH = './data/pedidos.JSON';
        this.id = 0;
    };

    jsonSave = async (arrayAGuardar) => {
        return await fs.writeFile(this.PATH, JSON.stringify(arrayAGuardar), "utf8")
    }

    getPedidos = async () => {
        const data = await fs.readFile(this.PATH, "utf8");
        try {
            const pedidos = JSON.parse(data);
            return pedidos;
        } catch (error) {
            return [];
        }
    };

    agregarPedido = async ({ direccion, telefono, estado, presupuesto, artefacto, marca }) => {
        try {
            let pedidos = await this.getPedidos();
            let fileExists = await fs.stat(this.PATH);
            if (!fileExists) {
                await fs.writeFile(this.PATH, JSON.stringify([]));
            }
            if (!direccion || !telefono || !estado || !presupuesto || !artefacto || !marca) {
                return await console.log("Asegurate de incluir todas las propiedades en el objeto!");
            }

            let iDGenerator = pedidos.at(-1).id;
            this.id = iDGenerator + 1;
            let nuevoPedido = { direccion, telefono, estado, presupuesto, artefacto, marca, id: this.id };
            const arrayModificado = [...pedidos, nuevoPedido];
            this.jsonSave(arrayModificado);
            console.log("Se agrego el siguiente pedido: ", nuevoPedido);
        }
        catch (error) {
            console.log(error);
        }


    };
}