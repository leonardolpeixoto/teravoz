# Teravoz
Aplicação para automatizar o processo de recebimento de ligações e encaminhamento para sua respectiva fila de atendimento, integrado a api da [Teravoz](https://developers.teravoz.com.br/)

### Prerequisites
Para o funcionamento da aplicação devemos [instalar](https://nodejs.org/en/download/) o node na versão 8.12 ou o [docker](https://www.docker.com/) para aconteinerização, caso não saiba o que é docker você pode dar uma lida nesse [artigo](https://medium.com/@leonardopeixoto/docker-bl%C3%A1-bl%C3%A1-bl%C3%A1-509294c0df4a) escrito por mim sobre docker.

### Getting Started
Depois de clonarmos o projeto devemos criar um arquivo chamado **.env** que contém as configurações referente ao nosso database, no projeto encontra-se uma **.env.exemplo** para que possa ser usar como base. 

Após a criação do arquivo, devemos criar nosso schema no banco de acordo como foi configura do **.env**. 


Com tudo configurado chegou a hora de instalar nossas dependências, você pode usar tanto o **npm**, quanto o **yarn**:

```shell
npm i
yarn
```
Para rodar nossa aplicação em modo de desenvolvimento devemos utilizar o comando:

```shell
npm start #yarn start
```

Já para rodar nossa aplicação em modo de produção utilizamos o comando:

```shell
npm run server #yarn server
```

Caso ocorra um error na inicilização com relação ao sequelize dê um **ctr+c** e suba o servidor novamente, esse problema decorre da relação entre tabelas que ainda não existe, será corrigido na próxima release.

Tanto o **npm start** quanto o **npm run server** cria nossas tables. Com as tabelas criadas cabe a nós inserir os dados para o funcionamento das nossas regras de negócio corretamente utilize o seguinte comando:

```shell
npm run seed
```
### Business Rules
Quando há uma ligação a api [Teravoz](https://developers.teravoz.com.br/)
