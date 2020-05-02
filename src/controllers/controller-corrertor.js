const Corretor = require('../models/Corretor');

module.exports = {
    async post(req, res, next) {
        console.log(req.body)
        const {
            nome,
            cpf,
            sexo,
            idade,
            tempo_atuacao,
            descricao,
            id_empresa
        } = req.body;
        const corretor = await Corretor.create({
                nome,
                cpf,
                sexo,
                idade,
                tempo_atuacao,
                descricao,
                id_empresa
            })
            .then(() => {
                res.status(201).json({
                    message: 'Corretor cadastrado com sucesso.'
                });
            }).catch((err) => {
                res.status(400).json({
                    message: 'Corretor não cadastrado.',
                    data: err
                }, console.log(err));
            });
        res.json(corretor);
    },

    async geByName(req, res, next) {
        const { nome } = req.body
        Corretor.findAll({
            where: {
                nome
            },
            attributes: ['nome', 'sexo', 'idade', 'tempo_atuacao', 'descricao'],
            include: [{
                    association: 'empresa',
                    attributes: ['telefone', 'email', 'site']
                },
                {
                    association: 'contato',
                    attributes: ['telefone', 'email']
                },
                {
                    association: 'certificacao',
                    attributes: ['nome', 'orgao_regulador', 'numeracao']
                }
            ]
        }).then((data) => {
            if (data)
                res.status(200).json(data)
            else
                res.status(400).json({
                    message: 'Nenhum dado encontrado!'
                })
        }).catch((err) => {
            res.status(400).json(err);
        })

    },

    async get(req, res, next) {
        Corretor.findAll()
            .then((data) => {
                if (data) {
                    res.status(200).json(data);
                } else {
                    res.status(400).json({
                        message: 'Nenhum dado encontrado!'
                    })
                }
            }).catch((err) => {
                console.log(err)
                res.status(400).json(err);
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