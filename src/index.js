import routes from './routes.js'
import express from 'express';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
;app.use(routes)

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

