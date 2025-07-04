# Projeto de Exemplos em JavaScript

Este projeto contém uma coleção de scripts e testes em JavaScript para demonstrar funcionalidades básicas, como manipulação de arrays, funções e testes unitários com o runner de testes nativo do Node.js.

## Funcionalidades

- **Comunicação Animal**: Uma função que simula a linguagem de gatos e cachorros.
- **Busca de Pessoas**: Uma função para pesquisar pessoas em uma lista por CPF.
- **Listagem de Pessoas**: Um script que itera sobre uma lista de pessoas e exibe suas informações no console.

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 20 ou superior)

## Como Instalar

1. Clone o repositório:
   ```bash
   git clone <url-do-seu-repositorio>
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd aula-6
   ```
3. Instale as dependências (se houver):
   ```bash
   npm install
   ```

## Como Executar

### Rodando os Scripts

Para executar o script que lista as pessoas, use o comando:

```bash
node lista/scripts.js
```

### Rodando os Testes

O projeto está configurado com scripts de teste no `package.json`.

- **Para rodar todos os testes de comunicação:**
  ```bash
  npm run test:comunicacao_animal
  ```

- **Para rodar os testes de pesquisa de pessoas:**
  ```bash
  npm run test:pessoas
  ```
