import express from 'express'
import morgan from 'morgan'

//inicializaciones
const app = express();


//configuraciones
app.set('port', process.env.PORT || 3000);


//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//rutas
app.get('/', (req, res)=>{
    res.send('hello');
});

export default app;