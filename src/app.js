import ManagerPedidos from "./managerPedidos/managerPedidos.js";
import express from 'express';
import { __dirname } from "./utils.js";
import handlebars from 'express-handlebars';
import viewsRouter from "./routes/view.router.js";

const managerPedidos = new ManagerPedidos();
const app = express();
const PORT = process.env.PORT || 3030;
const httpServer = app.listen(PORT, err => {
    if (err) console.log(err);
    console.log('Server escuchando en puerto 3030');
})
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.engine('hbs', handlebars.engine({
    extname: '.hbs',
}));

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.use('/', viewsRouter);
