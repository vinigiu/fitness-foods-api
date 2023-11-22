# FITNESS FOODS API

## Sobre
Este projeto foi desenvolvido como parte do desafio de Backend da Coodesh.

Para obter mais informações sobre o desafio, consulte [Desafio-Coodesh](https://lab.coodesh.com/viniciusgiuseppe/products-parser-20230105)

- Documentação do processo de desenvolvimento e plano de ação: [ActionPlan](https://github.com/vinigiu/fitness-foods-api/blob/master/ActionPlan.md)

## Como iniciar a API
- Crie um diretório em sua máquina para armazenar o código
- Abra um terminal dentro do diretório e execute o comando:
    > `git clone https://github.com/vinigiu/fitness-foods-api.git`
- Copie o arquivo `.env.example` e nomeie como `.env`
- Crie uma instância do container Docker:
    > `docker compose up -d --build`

## Endpoints

### GET ```/products```
Lista todos os produtos cadastrados no banco de dados. Inclui paginação com limite padrão de 10 produtos. Exemplo ```GET /products?limit=100&page=2```   
#### Parametros
limit - limite de produtos na resposta   
page - paginação   

### GET ```/products/:code```
Lista um produto cadastrado cujo código corresponde ao passado como parâmetro. Exemplo: ```GET /products/8718215180180```   
#### Parametros   
code - código do produto a ser buscado. Possui 13 digitos.   

### PUT ```/products/:code```
Edita um produto cadastrado cujo código corresponde ao passado como parâmetro. Exemplo: ```PUT /products/8718215380313```   
#### Parametros   
code - código do produto a ser buscado. Possui 13 digitos. 

### DELETE ```/products/:code```
Exclui um produto cadastrado cujo código corresponde ao passado como parâmetro. Exemplo ```DELETE /products/8718215180173```   
#### Parametros   
code - código do produto a ser excluído. Possui 13 digitos. 

## Stack utilizada:

- Linguagem: `Typescript`
- Servidor: `NodeJs com framework Express`
- Banco de dados (NoSQL): `MongoDB (Atlas)`
- Agendador de tarefas automáticas: `NodeCron`
- Versionamento de código: `Git`
- Repositório de código: `GitHub`
- Containerização: `Docker`

## Desenvolvido por:
- [@vinigiu](https://github.com/vinigiu)
> This is a challenge by [Coodesh](https://coodesh.com/)