const express = require('express');
const router = express.Router();

const route = router.get('/', (req, res, next) => {
    res.status(200).json({
        title: 'Hello Word, MegaHack',
        message: 'Aplicação Node.js rodadando.',
        version: '0.0.2',
        routes:[
            '/corretores',
            '/corretores/corretor',
            '/contatos',
            '/certificacoes',
            '/empresas',
        ]
    })
});

module.exports = route;