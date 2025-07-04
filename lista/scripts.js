const pessoas = [
    {
        nome: "Julio",
        idade: 30,  
        frutasFavoritas: ["maçã", "banana", "laranja"],
    },
    {
        nome: "Amanda",
        idade: 30,  
        frutasFavoritas: ["morango", "banana", "laranja"],
    },
    {
        nome: "Carlos",
        idade: 30,  
        frutasFavoritas: ["abacaxi", "banana", "laranja"],
    }
]
for(let indice = 0; indice < pessoas.length; indice++) {
    const pessoa = pessoas[indice];
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);
    console.log("Frutas favoritas:");
    for(let i = 0; i < pessoa.frutasFavoritas.length; i++) {
        console.log(`- ${pessoa.frutasFavoritas[i]}`);
    }
    console.log("---"); // Separador entre pessoas
}

console.log("Execução finalizada!");