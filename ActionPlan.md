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
- [X] Criação dos Unit Tests
- [X] Criação do esquema de segurança utilizando `API KEY`
- [X] Criação do Cron Job
- [ ] Configuração do Cron Job para obter os dados da API do Open Foods e tratar para inserir no DB
- [X] Criação da documentação seguindo o conceito Open API 3.0 disponível em: [fitness-foods-api.json](https://github.com/vinigiu/fitness-foods-api/blob/master/fitness-foods-api.json)

## Configuração do Docker
- [X] Criação do arquivo Dockerfile
- [X] Criação do arquivo docker-compose.yml
- [X] Subir o container e verificação de funcionamento

## Descrição do processo:

- Passo 1: Foi criado o repositório no github e o plano de ação contendo os principais pontos do roadmap da ciração da aplicação.

- Passo 2: Foi configurado o ambiente de desenvolvimento com a stack escolhida para desenvolvimento. Neste contexto, foi criado o arquivo .env contendo as variáveis de ambiente que serão utilizadas para acesso ao banco de dados e para consulta à API externa do Open Foods Facts.

- Passo 3: Foi criado o banco de dados MongoDB utilizando Atlas. Partciularmente nunca tinha trabalhado com bancos de dados NoSQL, o que me fez buscar documentação e tutoriais para entender, primeiramente, como criar o banco de dados e posteriormente, como realizar a conexão com a aplicação.

- Passo 4: Foram criados os endpoints. Foi criada uma estrutura de Controllers e Services para facilitar manutenção e melhorar entendimento de código. Para a criação dos services das operações de CRUD, foi necessário pesquisa em documentação para conhecer os métodos e funçẽos que realizam as tarefas desejadas do CRUD. Todo o processo de pesquisa relacionado ao MongoDB e bancos de dados NoSQL me possibilitou adquirir muito conhecimento.

- Passo 5: Foi criado o modulo de serviço do CronJob que irá realizar a busca dos dados na API da Open Food Facts. A princípio, foram criadas as funções das tarefas necessárias, sem que estas ainda realizem completamente seus objetivos, a título de verificação do funcionamento do Job. Para teste, o Job foi configurado para ocorrer a cada minuto. No entanto, quando as funções do Job foram ajustadas, a configuração foi alterada para que ocorra diariamente às 23h (horário em que, provavelmente, o tráfego da aplciação será mínimo)

- Passo 6: Foram criados os arquivos Dockerfile e dokcer-compose.yml para configuração do Docker. Esta foi minha primeira experiência configurando um container Docker (minhas experiêcnias prévias com Docker envolveram apenas a montagem do container e imagem de um projeto já existente e previamente configurado), fazendo necessária a pesquisa em documentação para o entendimento de como realizar estas configurações.

- Passo 7: Foi criado o arquivo fitness-foods-api.json contendo a documentação no formato OpenAPI 3.0.

- Passo 8: Foi criado um diretório data contendo o arquivo apikeys.json para armazenar API Keys a serem validadas para authenticação dos requests. Para tal, todo request a qualquer endpoint da API deve conter um Authorization no Header, cujo valor deve coincidir com o key value de algum registro do arquivo apikeys.json. Para que esta lógica seja implementada, foi criado um middleware global que captura o valor de Authorization no header e compara com os valores existentes em apikeys.json