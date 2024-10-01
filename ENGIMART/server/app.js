import express from 'express';
import conectaNaDb from './db.js';
import cors from 'cors';
import artistas from './models/login.js';

const app = express();
app.use(cors());
const conexao = await conectaNaDb();

conexao.on('error', (erro) => { 
    console.error('Erro ao conectar no MongoDB', erro);
});

conexao.once('open', () => {
    console.log('Conectado no MongoDB');
});

app.post('/app.js', async (req, res) => {
    const logindados = await login.find({});
    res.status(200).json(logindados);
});


app.listen(5173, () => {
    console.log('Servidor rodando na porta 5173');
});