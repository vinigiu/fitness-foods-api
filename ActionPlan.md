# Plano de Ação - Backend Challenge

## Setup inicial

- [] Criação de repositório GitHub
- [] Criação do plano de ação
- [] Configuração do ambiente de desenvolvimento (Stack escolhida)

## Criação de Database

- [] Criação e configuração Atlas (MongoDb)
- [] Criação do DB
- [] Criação de .env contendo dados de acesso ao DB
- [] Criação do Model
- [] Subir dados dos produtos

## Criação da API REST

- [] Criação da arquitetura de diretórios
- [] Configuração de servidor com Express.js
- [] Gerar conexão com o DB
- [] Criação das rotas:
    - `GET /`: Detalhes da API, se conexão leitura e escritura com a base de dados está OK, horário da última vez que o CRON foi executado, tempo online e uso de memória.
    - `PUT /products/:code`: Será responsável por receber atualizações do Projeto Web
    - `DELETE /products/:code`: Mudar o status do produto para `trash`
    - `GET /products/:code`: Obter a informação somente de um produto da base de dados
    - `GET /products`: Listar todos os produtos da base de dados, adicionar sistema de paginação para não sobrecarregar o `REQUEST`.
- [] Criação dos Controllers e Services para realização de cada operação CRUD
- [] Criação dos Unit Tests
- [] Criação do esquema de seguração utilizando `API KEY`

## Configuração do Docker