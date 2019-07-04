export class Curso {

    id: number;
    nome: string;
    descricao: string;
    duracao: number;

    constructor (id: number, nome: string, descricao: string, duracao: number) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.duracao = duracao;
    }
}