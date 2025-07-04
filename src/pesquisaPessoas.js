function pesquisarPessoas(cpf) {
    const pessoas = [
    {
        nome: "Julio",
        idade: 30,  
        cpf: "123.456.789-00",
        frutasFavoritas: ["maçã", "banana", "laranja"],
    },
    {
        nome: "Amanda",
        idade: 30,  
        cpf: "987.654.321-00",
        frutasFavoritas: ["morango", "banana", "laranja"],
    },
    {
        nome: "Carlos",
        idade: 30,  
        cpf: "456.789.123-00",
        frutasFavoritas: ["abacaxi", "banana", "laranja"],
    }
]

    for (let indice = 0; indice < pessoas.length; indice++) {
        const pessoa = pessoas[indice];
        if (pessoa.cpf === cpf) {
            return pessoa;
        }
    }
    return "CPF não encontrado";
}

module.exports = {
    pesquisarPessoas
};