const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || '8000';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const indexRouter = require('./routes/index');
app.use('/', indexRouter);

app.listen(port, ()=>{
    console.log('Servidor rodando...')
})