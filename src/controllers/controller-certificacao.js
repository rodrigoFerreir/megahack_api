const Certificacao = require('../models/Certificacao')
const Corretor = require('../models/Corretor');

module.exports = {
    async post(req, res, next) {
        const {
            id_consultor
        } = req.body;
        const {
            nome,
            orgao_regulador,
            numeracao,
        } = req.body;

        const certificacao = await Certificacao.create({
                nome,
                orgao_regulador,
                numeracao,
                id_consultor,
            })
            .then(() => {
                res.status(201).send({
                    message: 'Certificação cadastrada com sucesso.'
                });
            }).catch((err) => {
                res.status(400).send({
                    message: 'Certificação não cadastrada.',
                    data: err
                });
            });
        return res.json(certificacao);
    },

    async get(req, res, next) {
        Certificacao.findAll()
            .then((data) => {
                if (data) {
                    res.status(200).json(data);
                } else {
                    res.status(200).json({
                        message: 'Nenhum dado encontrado!'
                    })
                }

            }).catch((err) => {
                console.log(err)
                res.status(400).send(err);
            })
    },

    async put(req, res, next) {
        const {
            nome,
            orgao_regulador,
            numeracao,
            id_consultor,
        } = req.body;

        const certificacao = Certificacao.findByPk(id)
        if (certificacao) {
            Corretor.update({
                id,
                nome,
                orgao_regulador,
                numeracao,
                id_consultor,
            }, {
                where: {
                    nome,
                    orgao_regulador,
                    numeracao,
                    id_consultor,
                }
            })
            res.status(201).json({
                id,
                message: 'Certificação atualizada com sucesso!'
            });
        } else {
            res.status(201).json({
                id,
                message: 'Certificação não foi atualizada!'
            });
        }
    },

    async delete(req, res, next) {
        const {
            id
        } = req.body;
        const certificacao = Certificacao.findByPk(id)
        if (certificacao) {
            Certificacao.destroy({
                where: {
                    id
                }
            });
            res.status(200).json({
                message: 'Certificação excluida!'
            })
        }
        res.status(200).json({
            message: 'Certificação não foi excluida'
        });
    }
}