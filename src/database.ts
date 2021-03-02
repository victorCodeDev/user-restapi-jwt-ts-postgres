import mongoose, { ConnectOptions } from 'mongoose';
import config from './config/config'

const dbOptions: ConnectOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(config.db.uri, dbOptions);

const conn = mongoose.connection;

conn.once('open', () => {
    console.log("Mongodb Conexión Establecida")
});

conn.once('error', (err) => {
    console.log(err);
    process.exit(0);
})