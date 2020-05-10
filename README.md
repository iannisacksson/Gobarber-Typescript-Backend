# Gobarber Backend

Back-end desenvolvido nas aulas do Bootcamp GoStack para barbearia com NodeJS, Typescript, Express e Postgres.

Este Back-end são dos projetos [GoBarber Web](https://github.com/iannisacksson/GoBarber-Frontend) e [GoBarber Mobile](https://github.com/iannisacksson/GoBarber-mobile).

O principal objetivo desta API é realizar cadastro de usuários e provedores de serviços e realizar agendamentos.

## Começando

### Pré-requisitos

Para executar este projeto em desenvolvimento, você precisará ter um ambiente básico com o NodeJS instalado (Estou desenvolvendo ele na versão 12.14.1). Para usar o banco de dados, você precisará ter o Postgre instalado e em execução na sua máquina na porta padrão (5432).

### Instalando

#### Clonando o Repositório

```
$ git clone https://github.com/iannisacksson/Gobarber-backend.git

$ cd GoBarber-backend
```

#### Instalando dependências

```
$ yarn
```

_ou_

```
$ npm install
```

#### Executando o projeto na máquina

Com todas as dependências instaladas, o banco de dados em execução e o ambiente configurado corretamente, agora você pode executar o back-end:

```
$ yarn dev:server
```

_ou_

```
$ npm run dev:server
```

## Rotas

A URL para testar se está em execução o back-end é: [http://localhost:3333/](http://localhost:3333/).

### Rota para se cadastrar na aplicação.

- Rota do tipo **POST** para cadastrato do cliente ou provedor de serviço.
  [http://localhost:3333/users](http://localhost:3333/users).

- Rota do tipo **PATCH** para atualizar o avatar do cliente ou provedor de serviço.
  [http://localhost:3333/users/avatar](http://localhost:3333/users/avatar).

### Rota para criar uma sessão

- Rota do tipo **POST** para se autenticar na aplicação passando o e-mail e a senha cadastros na aplicação.
  [http://localhost:3333/sessions](http://localhost:3333/sessions).

### Rota para agendamentos

- Rota do tipo **POST** para realizar um agendamento.
  [http://localhost:3333/appointments](http://localhost:3333/appointments).

- Rota do tipo **GET** para listar todos os agendamentos.
  [http://localhost:3333/appointments](http://localhost:3333/appointments).
