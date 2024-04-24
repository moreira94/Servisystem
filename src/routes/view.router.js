import { Router } from "express";
import ManagerPedidos from "../managerPedidos/managerPedidos.js";

const router = Router();
const pedidosManager = new ManagerPedidos();

router.get('/', async (req, res) => {
    res.render('home', {

    })
}); 

router.get('/historial', async (req, res) => {
    res.render('historial', {

    })
})

router.get('/cargaDatos', async (req, res) => {
    res.render('cargaDatos', {
        
    })
})

router.get('/analisis', async (req, res) => {
    res.render('analisis', {
        
    })
})


export default router; 