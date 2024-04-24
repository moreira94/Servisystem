import { Router } from "express";
import ManagerPedidos from "../managerPedidos/managerPedidos.js";

const router = new Router();
let pedidosManager = new ManagerPedidos();
let pedidos = await pedidosManager.getPedidos();

router.get('/', async (req, res) => {
    
})
