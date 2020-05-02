const Corretor = require('../models/Corretor');
const Contato = require('../models/Contato');
const Empresa = require('../models/Empresa');
const Certificacao = require('../models/Certificacao');

module.exports = {
    async post(req, res, next){
        const {
            nome,
            sexo,
            idade,
            tempo_atuacao,
            descricao,
            telefone,
            email,
        } = req.body

        const corretor = await Corretor.create({
            nome,
            sexo,
            idade,
            tempo_atuacao,
            descricao
        })
        const contato = await Contato.create({
            telefone,
            email
        })
        
        res.status(200).json({corretor, contato})
    }

}