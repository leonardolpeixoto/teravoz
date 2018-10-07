# Teravoz
Aplicação para automatizar o processo de recebimento de ligações e encaminhamento para sua respectiva fila de atendimento, utilizando a api da [**Teravoz**](https://developers.teravoz.com.br/)

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
Esse comando será responsável por subir nosso servidor e criar as respectivas tabelas em nosso database caso elas ainda não existam.

Já para rodar nossa aplicação em modo de produção utilizamos o comando:

```shell
npm run server #yarn server
```
### Prerequisites
Para o funcionamento da aplicação devemos [instalar](https://nodejs.org/en/download/) o node na versão 8.12 ou o [docker](https://www.docker.com/) para aconteinerização, caso não saiba o que é docker você pode dar uma lida nesse [artigo](https://medium.com/@leonardopeixoto/docker-bl%C3%A1-bl%C3%A1-bl%C3%A1-509294c0df4a) sobre o assunto.

