# FITNESS FOODS API

## Sobre
Este projeto foi desenvolvido como parte do desafio de Backend da Coodesh.

Para obter mais informações sobre o desafio, consulte [Desafio-Coodesh](https://lab.coodesh.com/viniciusgiuseppe/products-parser-20230105)

- Documentação do processo de desenvolvimento e plano de ação: [ActionPlan](https://github.com/vinigiu/fitness-foods-api/blob/master/ActionPlan.md)

## Como iniciar a API
- Crie um diretório em sua máquina para armazenar o código

- Abra um terminal dentro do diretório e execute o comando:
```bash 
git clone https://github.com/vinigiu/fitness-foods-api.git
```

- Entre na paste do projeto e instale as dependências:
```bash
cd fitness_foods-api
npm install
```

- Copie o arquivo `.env.example` e nomeie como `.env`

- Utilize o comando para realizar o build Typescript:
```bash
npm run build
```

- Para iniciar o servidor da API:
```bash
npm run start
```

- Para rodar os testes, basta executar o seguinte comando:
```bash
npm run test
```

- Caso prefira rodar a aplicação em um container Docker, crie uma instância:
```bash 
docker compose up -d --build
```

## Endpoints

> Para que as requisições aos endpoints seja autorizadas é necessário incluir no Header da requisição uma API Key válida em Authorizations. Para finalidade de teste, você pode obter o valor de uma API Key válida em `src\data\apikeys.json`

### GET ```/products```
Lista todos os produtos cadastrados no banco de dados. Inclui paginação com limite 100 produtos por página. Exemplo ```GET /products?page=1```   
#### Parâmetros 
page - paginação

### GET ```/products/:code```
Lista um produto cadastrado cujo código corresponde ao passado como parâmetro. Exemplo: ```GET /products/20221126```   
#### Parâmetros   
code - código do produto a ser buscado. Possui 8 digitos.   

### PUT ```/products/:code```
Edita um produto cadastrado cujo código corresponde ao passado como parâmetro. Exemplo: ```PUT /products/20221126```   
#### Parâmetros   
code - código do produto a ser buscado. Possui 8 digitos. 

### DELETE ```/products/:code```
Exclui (altera seu status para `trash`) um produto cadastrado cujo código corresponde ao passado como parâmetro. Exemplo ```DELETE /products/20221126```   
#### Parâmetros   
code - código do produto a ser excluído. Possui 8 digitos. 

## Stack utilizada:

- Linguagem: `Typescript`
- Servidor: `NodeJs com framework Express`
- Banco de dados (NoSQL): `MongoDB (Atlas)`
- Agendador de tarefas automáticas: `Cron for Node.js`
- Versionamento de código: `Git`
- Repositório de código: `GitHub`
- Containerização: `Docker`

## Desenvolvido por:
- [@vinigiu](https://github.com/vinigiu)
> This is a challenge by [Coodesh](https://coodesh.com/)