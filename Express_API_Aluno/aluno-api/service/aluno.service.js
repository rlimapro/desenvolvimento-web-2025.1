// service/aluno.service.js
const AlunoModel = require("../model/aluno.model")
const alunos = require("../data/aluno")

let id = 3;

class AlunoService {
    static listar() {
        return alunos;
    }

    static criar(alunoJson) {
        const novoAluno = new AlunoModel(
            ++id, 
            alunoJson.nome,
            alunoJson.curso,
            parseFloat(alunoJson.ira)
        )
        alunos.push(novoAluno)
        return novoAluno
    }

    static recuperar(id) {
        for(let i = 0; i < alunos.length; i++) {
            if(alunos[i].id == id) {
                return alunos[i]
            }
        }
        return null
    }

    static atualizar(id, alunoJson) {
        for(let i = 0; i < alunos.length; i++) {
            if(alunos[i].id == id) {
                alunos[i].nome = alunoJson.nome
                alunos[i].curso = alunoJson.curso
                alunos[i].ira = parseFloat(alunoJson.ira)
                return alunos[i]
            }
        }
        return null
    }

    static deletar(id) {
        for(let i = 0; i < alunos.length; i++) {
            if(alunos[i].id == id) {
                const alunoRemovido = alunos[i]
                alunos.splice(i, 1)
                return alunoRemovido
            }
        }
        return null
    }
}

module.exports = AlunoService;