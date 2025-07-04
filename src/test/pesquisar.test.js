const {pesquisarPessoas} = require('../pesquisaPessoas.js');
const {strictEqual, deepStrictEqual} = require('node:assert');
const { describe, it } = require('node:test');

describe('pesquisarPessoas', () => {
    it('deve retornar todos os dados da pessoa com o CPF 123.456.789-00', () => {
        const cpfParaBuscar = '123.456.789-00';
        const pessoaEsperada = {
            nome: "Julio",
            idade: 30,
            cpf: '123.456.789-00',
            frutasFavoritas: ["maçã", "banana", "laranja"],
        };
        const resultado = pesquisarPessoas(cpfParaBuscar);
        deepStrictEqual(resultado, pessoaEsperada);
        console.log('Dados retornados pela função:', pessoaEsperada);
    });
    it("ao informar um cpf inexistente, deve retornar CPF não encontrado", () => {
        const cpfInexistente = '000.000.000-00';
        const errorMessage = 'CPF não encontrado';
        const resultado = pesquisarPessoas(cpfInexistente);
        strictEqual(resultado, errorMessage);
    });
});
