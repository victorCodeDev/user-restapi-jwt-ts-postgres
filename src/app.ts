import express from 'express'
import morgan from 'morgan'
import authRoutes from './routes/auth.routes'
import specialRoutes from './routes/special.routes';
import passport from 'passport';
import passportMiddlewars from './middlewares/passport';


//inicializaciones
const app = express();


//configuraciones
app.set('port', process.env.PORT || 3000);


//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());
passport.use(passportMiddlewars);


//rutas
app.get('/', (req, res) => {
    res.send(`La api está en http://localhost:${app.get('port')}`);
});

app.use(authRoutes);
app.use(specialRoutes);

export default app;