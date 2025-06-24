// routes/aluno.route.js
var express = require('express');
const AlunoService = require('../service/aluno.service');
const { request, response } = require('../app');
var router = express.Router();

router.get("/listar",
    (request, response, next) => {
        response.json(AlunoService.listar())
    }
)

router.post("/criar",
    (request, response) => {
        const alunoResposta = AlunoService.criar(request.body)
        response.json(alunoResposta)
    }
)

router.get("/recuperar/:id",
    (request, response) => {
        const aluno = AlunoService.recuperar(request.params.id)
        if (aluno) {
            response.json(aluno)
        } else {
            response.status(404).json({ error: "Aluno não encontrado" })
        }
    }
)

router.put("/atualizar/:id",
    (request, response) => {
        const alunoAtualizado = AlunoService.atualizar(request.params.id, request.body)
        if (alunoAtualizado) {
            response.json(alunoAtualizado)
        } else {
            response.status(404).json({ error: "Aluno não encontrado" })
        }
    }
)

router.delete("/deletar/:id",
    (request, response) => {
        const alunoRemovido = AlunoService.deletar(request.params.id)
        if (alunoRemovido) {
            response.json(alunoRemovido)
        } else {
            response.status(404).json({ error: "Aluno não encontrado" })
        }
    }
)

module.exports = router;