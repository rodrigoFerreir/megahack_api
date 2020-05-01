const Contato = require('../models/Contato')
const Corretor = require('../models/Corretor');

module.exports = {
    async post(req, res, next) {
        const {
            id_consultor
        } = req.body;
        const {
            telefone,
            email
        } = req.body;

        const corretor = await Corretor.findByPk(id_consultor);


        if (!corretor) {
            res.status(400).send({
                message: 'Corretor não encotrado'
            })
        }

        const contato = await Contato.create({
                telefone,
                email,
                id_consultor,
            })
            .then(() => {
                res.status(201).send({
                    message: 'Contato cadastrado com sucesso.'
                });
            }).catch((err) => {
                res.status(400).send({
                    message: 'Contato não cadastrado.',
                    data: err
                });
            });
        return res.json(contato);
    },

    async get(req, res, next) {
        Contato.findAll()
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
        const id = req.params.id;
        res.status(201).send({
            id,
            itens: req.body
        });
    },

    async delete(req, res, next) {
        const {
            id
        } = req.body;
        const contato = Contato.findByPk(id)
        if (corretor) {
            Contato.destroy({
                where: {
                    id
                }
            });
            res.status(200).json({
                message: 'Contato excluido!'
            })
        }
        res.status(200).json({
            message: 'Contato não foi excluido'
        });
    }
};