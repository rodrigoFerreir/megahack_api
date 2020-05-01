const Empresa = require('../models/Empresa')
const Corretor = require('../models/Corretor');

module.exports = {
    async post(req, res, next) {
        const {
            telefone,
            email,
            site
        } = req.body;

        const empresa = await Empresa.create({
                telefone,
                email,
                site
            })
            .then(() => {
                res.status(201).send({
                    message: 'Empresa cadastrada com sucesso.'
                });
            }).catch((err) => {
                res.status(400).send({
                    message: 'Empresa não cadastrada.',
                    data: err
                });
            });
        return res.json(empresa);
    },

    async get(req, res, next) {
        Empresa.findAll()
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
            telefone,
            email,
            site
        } = req.body;

        const empresa = Empresa.findByPk(id)
        if (empresa) {
            Empresa.update({
                telefone,
                email,
                site
            }, {
                where: {
                    telefone,
                    email,
                    site
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
        const empresa = Empresa.findByPk(id)
        if (empresa) {
            Corretor.destroy({
                where: {
                    id
                }
            });
            res.status(200).json({
                message: 'Empresa excluida!'
            })
        }
        res.status(200).json({
            message: 'Empresa não foi excluida'
        });
    }
}