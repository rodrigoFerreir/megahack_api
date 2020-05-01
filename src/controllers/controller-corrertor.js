const Corretor = require('../models/Corretor');

module.exports = {
    async post(req, res, next) {
        const {
            nome,
            cpf,
            sexo,
            idade,
            tempo_atuacao,
            descricao,
        } = req.body;
        const corretor = await Corretor.create({
                nome,
                cpf,
                sexo,
                idade,
                tempo_atuacao,
                descricao,
            })
            .then(() => {
                res.status(201).send({
                    message: 'Corretor cadastrado com sucesso.'
                });
            }).catch((err) => {
                res.status(400).send({
                    message: 'Corretor não cadastrado.',
                    data: err
                });
            });
        return res.json(corretor);
    },

    async get(req, res, next) {
        Corretor.findAll()
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
            id,
            nome,
            cpf,
            sexo,
            idade,
            tempo_atuacao,
            descricao,
        } = req.body;

        const corretor = Corretor.findByPk(id)
        if (corretor) {
            Corretor.update({
                nome,
                cpf,
                sexo,
                idade,
                tempo_atuacao,
                descricao,
            }, {
                where: {
                    nome,
                    cpf,
                    sexo,
                    idade,
                    tempo_atuacao,
                    descricao,
                }
            })
            res.status(201).json({
                id,
                message: 'Corretor atualizado com sucesso!'
            });
        } else {
            res.status(201).json({
                id,
                message: 'Corretor não foi atualizado!'
            });
        }
    },

    async delete(req, res, next) {
        const {
            id
        } = req.body;
        const corretor = Corretor.findByPk(id)
        if (corretor) {
            Corretor.destroy({
                where: {
                    id
                }
            });
            res.status(200).json({
                message: 'Corretor excluido!'
            })
        }
        res.status(200).json({
            message: 'Corretor não foi excluido'
        });
    }
}