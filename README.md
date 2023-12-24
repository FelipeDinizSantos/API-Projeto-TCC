# API do Hub de Roteiros Multidisciplinares

Bem-vindo à API do Hub de Roteiros Multidisciplinares, uma parte essencial do projeto desenvolvido como Trabalho de Conclusão de Curso (TCC) em Analise e Desenvolvimento de Sistemas. Esta API segue a arquitetura MVC para garantir uma estrutura organizada e escalável.

## Estrutura do Projeto

- **/app.js**: O ponto de entrada da aplicação, configura o servidor e define as rotas.
- **/app/middlewares/auth.js**: Middleware responsável pela autenticação de usuários utilizando tokens JWT.
- **/app/model**: Local para armazenar os modelos de dados da aplicação.
- **/app/routes**: Contém as rotas da API, divididas em módulos como 'user' e 'roadmap'.

## Como Iniciar

1. Clone este repositório: `git clone https://seu-repositorio.com/api.git`.
2. Instale as dependências: `npm install`.
3. Configure as variáveis de ambiente em um arquivo `.env` seguindo o exemplo em `.env.example`.
4. Inicie o servidor: `npm start`.

## Rotas Disponíveis

- **/user**: Rotas relacionadas à manipulação de dados de usuário.
- **/roadmap**: Rotas para interações com os roadmaps, como busca e criação.

## Autenticação

A autenticação é realizada através de tokens JWT. Ao acessar rotas protegidas, inclua o token no cabeçalho da requisição usando 'x-access-token'.

## Estado Atual do Projeto

Atualmente, a API está funcional e serve como backend para a plataforma educacional em desenvolvimento. Contribuições são bem-vindas para aprimorar e expandir suas funcionalidades.

## Tecnologias Utilizadas

- Node.js: Plataforma de execução de JavaScript no servidor.
- Express: Framework web para Node.js.
- MySQL: Sistema de gerenciamento de banco de dados.
- JWT: JSON Web Tokens para autenticação segura.

Para mais detalhes confira a aplicação: [APP-Projeto-TCC](https://github.com/FelipeDinizSantos/APP-Projeto-TCC) 
