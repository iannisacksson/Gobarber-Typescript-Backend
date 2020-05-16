# Gobarber Backend

Back-end desenvolvido nas aulas do Bootcamp GoStack para barbearia com NodeJS, Typescript, Express e Postgres.

Este Back-end são dos projetos [GoBarber Web](https://github.com/iannisacksson/GoBarber-Frontend) e [GoBarber Mobile](https://github.com/iannisacksson/GoBarber-mobile).

O principal objetivo desta API é realizar cadastro de usuários, de provedores de serviços e realizar agendamentos.

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

# Recuperação de senha

**RF**

- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF**

- Utilizar Mailtrap para testar envios em ambiente de dev;
- Utilizar Amazon ES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**RN**

- O link enviado por e-mail para resetar senha, deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar a sua senha;

# Atualização do perfil

**RF**

- O usuário deve poder atualizar o seu perfil nome, email e senha;

**RN**

- O usuário não pode alterar ser email para um email já utilizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;

# Agendamento de serviços

**RF**

- O usário deve poder listar todos os prestadores de serviços cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários disponiveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF**

- A listagem de prestadores deve ser armazenados em cache;

**RN**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponíveis entre 8h ás 18h (Primeiro ás 8h, último ás 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços com ele mesmo;

# Painel do prestador

**RF**

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF**

- Os agendamentos do prestador no dia devem ser armazenadas em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**RN**

- A notificação deve ter um status de lida ou não lida para que o prestador possa controlar;
