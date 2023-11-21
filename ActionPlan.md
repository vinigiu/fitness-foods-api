# Plano de Ação - Backend Challenge

## Setup inicial

- [X] Criação de repositório GitHub
- [X] Criação do plano de ação
- [X] Configuração do ambiente de desenvolvimento (Stack escolhida)

## Criação de Database

- [X] Criação e configuração Atlas (MongoDb)
- [X] Criação do DB
- [X] Criação de .env contendo dados de acesso ao DB
- [X] Criação do Model
- [X] Subir dados do produto (products.json)

## Criação da API REST

- [X] Criação da arquitetura de diretórios
- [X] Configuração de servidor com Express.js
- [X] Gerar conexão com o DB
- [X] Criação das rotas:
    - `GET /`: Detalhes da API, se conexão leitura e escritura com a base de dados está OK, horário da última vez que o CRON foi executado, tempo online e uso de memória.
    - `PUT /products/:code`: Será responsável por receber atualizações do Projeto Web
    - `DELETE /products/:code`: Mudar o status do produto para `trash`
    - `GET /products/:code`: Obter a informação somente de um produto da base de dados
    - `GET /products`: Listar todos os produtos da base de dados, adicionar sistema de paginação para não sobrecarregar o `REQUEST`.
- [X] Criação dos Controllers e Services para realização de cada operação CRUD
- [ ] Criação dos Unit Tests
- [ ] Criação do esquema de seguração utilizando `API KEY`
- [X] Criação do Cron Job
- [ ] Configuração do Cron Job para obter os dados da API do Open Foods e tratar para inserir no DB

## Configuração do Docker