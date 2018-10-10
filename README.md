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
Quando há ocorre uma ligação a api [Teravoz](https://developers.teravoz.com.br/) envia os todos os eventos, desde de o início ao fim da ligação, para um webhook configurado.

Nosso ponto de entrada é /webhook, ao resceber os eventos disparados pela api, a partir dessa requisição, sabemos quais eventos usar a partir da documentação dos eventos emitidos pela api da [Teravoz](https://developers.teravoz.com.br/).

No nosso caso nos interessa apenas os eventos:
+ call.standby
+ actor.entered
+ call.finished

#### [call.standby](https://github.com/leonardolpeixoto/teravoz/blob/master/src/events/standby.js)
A receber esse evento fazemos a busca com o número que recebemos na tabela **contact** que está associada a tabela de **customer**, se ele for cliente então a ligação é transferida para a fila **Customer Attendace** setada no banco, e então a partir do [serviço delegate](https://github.com/leonardolpeixoto/teravoz/blob/master/src/service/delegate.js) faz o encaminhamento da ligação para a mesma. Caso a ligação não seja de um cliente cadastrado então salvamos o contato na tabela **prospective_customer** e encaminhamos para a fila **First Attendace**

#### [actor.entered](https://github.com/leonardolpeixoto/teravoz/blob/master/src/infra/socket/register.js)
Depois de delegar uma ligação para a fila então há a confirmação por parte do agente do atendimento da ligação, quando esse evento é disparado então encaminhos esse evento via socket para o client que monta o card com as informações da ligação na tela do cliente.

#### [call.finished](https://github.com/leonardolpeixoto/teravoz/blob/master/src/infra/socket/register.js)
Ao terminar a ligação é disparado esse evento o qual é enviado para o cliente removendo o card da tela.

### Como testar
Para testar podemos usar o docker, criei um [projeto](https://github.com/leonardolpeixoto/implatation) para automatizar o processo de implantação, depois do serviço em execução vocês podem testar as ações via postman, se preferir, enviando requisições post para **http://localhost:3001/webhook** não se esqueçam de settar no header o Content-Type para **application/json**. O corpo das requisições deve ser iguais ao definido na documentação da [Teravoz](https://developers.teravoz.com.br/) os únicos apresentam alguma ação relevante no sistema são **call.standby**, **actor.entered**, e **call.finished**. 

Para ver as ligações que estão acontecem vocês podem acessar o client a partir do endereço **http://localhost:3000** 
