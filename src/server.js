const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

//conectando banco de dados
require('./database/data');

const port = process.env.PORT || '8000';

const app = express();
app.use(cors());//configurando cors para todas as requisçoes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const indexRouter = require('./routes/index');
const certificacaoRouter = require('./routes/routes-certificacao');
const contatoRouter = require('./routes/routes-contato');
const corretorRouter = require('./routes/routes-corretor');
const empresaRouter = require('./routes/routes-empresa');

//iniciando as Rotas
app.use('/', indexRouter);
app.use('/certificacoes', certificacaoRouter);
app.use('/corretores', corretorRouter);
app.use('/contatos', contatoRouter);
app.use('/empresas', empresaRouter);

app.listen(port, ()=>{
    console.log(`Servidor rodando...${port}`)
})