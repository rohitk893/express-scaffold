import express from 'express';
import dotenv from 'dotenv'
import router from './src/routes/routes';

dotenv.config();

const app = express();

function startServer(){
    app.use(express.json());

    app.use(router);

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
        console.log(`Started at http://localhost:${PORT}`);
    })
}

startServer();