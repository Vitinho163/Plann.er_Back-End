<h1 align="center">Plann.er: Back-End</h1>

<div align="center">
  <a href="#english">English</a> |
  <a href="#portugues">Português</a>
</div>

---

# English <a name = "english"></a>

Plann.er - Back-End is a **Node.js** application developed to serve as the backend for the plann.er travel planner application.

## Summary

- [Technologies Used](#technologies-used-en)
- [Project Structure](#project_structure_en)
- [Installation](#installation-en)
- [Deploy](#deploy-en)
- [Route Documentation](#route-documentation-en)
- [Author](#author-en)

## 🚀 Technologies Used <a name = "tecnologies-used-en"></a>

- **[Node.js](https://nodejs.org/)**: JavaScript runtime built on Chrome's V8 JavaScript engine.
- **[Prisma](https://www.prisma.io/)**: Next-generation ORM for Node.js and Typescript.
- **[Fastify](https://fastify.dev/)**: Fast and low overhead web framework for Node.js
- **[@fastify/cors](https://github.com/fastify/fastify-cors)**: Fastify plugin for enabling CORS.
- **[@fastify/static](https://github.com/fastify/fastify-static)**: Fastify plugin for serving static files.
- **[@scalar/fastify-api-reference](https://github.com/scalar/scalar/tree/main/packages/fastify-api-reference#readme)**: Fastify plugin for API documentation.
- **[dayjs](https://github.com/iamkun/dayjs/)**: Fast and lightweight JavaScript date library.
- **[Zod](https://zod.dev/)**: TypeScript-first schema declaration and validation library.
- **[Nodemailer](https://nodemailer.com/)**: Node.js module for sending emails.

## 📁 Structure of the project <a name = "project_structure_en"></a>
The project structure is as follows:

```
├── src: directory containing application source files

│   ├── documentation: directory containing API documentation files (Insomnia and Swagger).

│   ├── erros: directory containing exported ClientError class.

│   ├── lib: directory containing Prisma, Mail, and Day.js configurations.

│   ├── routes: directory containing application route files.

|   ├── error-handler.ts: handler to check if the error is client-side or server-side.

|   ├── env.ts: environment validation with Zod.

│   └── server.js: file that initializes the application.

├── .env.example: example file for environment variables.

├── prisma: directory containing schema and migrations.

```

## 🛠️ Installation <a name = "installation-en"></a>

1. Clone the repository or download and extract the ZIP file from the repository.
```
git clone https://github.com/Vitinho163/Plann.er_Back-End.git
``` 

2. Install dependencies:
```
npm install
```  

3. Rename the `.env.example` file to `.env` and fill in the information:
```
DATABASE_URL="file:./dev.db"
API_BASE_URL="http://localhost:3333"
WEB_BASE_URL="http://localhost:3000"
PORT=3333
```

4. Start the server:
```
npm run dev
```

## 💻 deploy <a name = "deploy-en"></a>

This API was hosted directly on Render.

The deployment can be accessed at the address: 
```
https://plann-er-back-end.onrender.com
```

>Note: As it is hosted on a free service, the application 'hibernates' after 15 minutes of inactivity. If you are trying to access the site and the BackEnd does not respond, just wait, as it will be 'initializing' the services.

## 📖 Route Documentation <a name = "route-documentation-en"></a>

The documentation for all routes is available at:
```
http://localhost:{port}/reference
```

Make sure to replace `{port}` with the port defined in the `.env` file. If not defined, try accessing it with the default port 3333.

>Note: This application was developed using Node.js version v20.15. In case of issues, try updating Node.js to the latest version.

<div align="center" name="author-en">
  <h4>Created with ❤️ by <a href="https://github.com/Vitinho163">João Victor</a></h4>
</div>

---
<br>

# Português <a name = "portugues"></a>

Plann.er - Back-End é uma aplicação **Node.js** desenvolvida para se comunicar com o aplicativo de planejamento de viagens Plann.er.

## Sumário

- [Tecnologias Utilizadas](#tecnologias-usadas-pt)
- [Estrutura do Projeto](#estrutura-do-projeto-pt)
- [Instalação](#instalacao-pt)
- [Deploy](#deploy-pt)
- [Documentação das Rotas](#documentacao-das-rotas-pt)
- [Autor](#autor-pt)

## 🚀 Tecnologias Utilizadas <a name = "tecnologias-usadas-pt"></a>

- **[Node.js](https://nodejs.org/)**: Ambiente de execução JavaScript construído no motor JavaScript V8 do Chrome.
- **[Prisma](https://www.prisma.io/)**: ORM de próxima geração para Node.js e TypeScript.
- **[Fastify](https://fastify.dev/)**: Framework web rápido e de baixa sobrecarga para Node.js.
- **[@fastify/cors](https://github.com/fastify/fastify-cors)**: Plugin Fastify para habilitar CORS.
- **[@fastify/static](https://github.com/fastify/fastify-static)**: Plugin Fastify para servir arquivos estáticos.
-**[@scalar/fastify-api-reference](https://github.com/scalar/scalar/tree/main/packages/fastify-api-reference#readme)**: Plugin Fastify para documentação de API.
-**[dayjs](https://github.com/iamkun/dayjs/)**: Biblioteca de data JavaScript rápida e leve.
-**[Zod](https://zod.dev/)**: Biblioteca de declaração e validação de schemas em TypeScript.
-**[Nodemailer](https://nodemailer.com/)**: Módulo Node.js para envio de e-mails.

## 📁 Estrutura do Projeto <a name = "estrutura-do-projeto-pt"></a>
A estrutura do projeto é a seguinte:
```
├── src: diretório contendo os arquivos de origem da aplicação

│ ├── documentation: diretório contendo arquivos de documentação da API (Insomnia e Swagger).

│ ├── errors: diretório contendo a classe ClientError exportada.

│ ├── lib: diretório contendo configurações do Prisma, Mail e Day.js.

│ ├── routes: diretório contendo arquivos de rotas da aplicação.

│ ├── error-handler.ts: handler para verificar se o erro é do lado do cliente ou do servidor.

│ ├── env.ts: verificação das variaveis de ambiente com Zod.

│ └── server.js: arquivo que inicializa a aplicação.

├── prisma: diretório contendo schemas e migrations.

|── .env.example: arquivo de exemplo para variáveis de ambiente.
```

## 🛠️ Instalação <a name = "instalacao-pt"></a>

1. Clone o repositório ou faça o download e extraia o arquivo ZIP do repositório.
```
git clone https://github.com/Vitinho163/Plann.er_Back-End.git
``` 

2. Instale as dependências:
```
npm install
```

3. Renomeie o arquivo `.env.example` para `.env` e preencha as informações:
```
DATABASE_URL="file:./dev.db"
API_BASE_URL="http://localhost:3333"
WEB_BASE_URL="http://localhost:3000"
PORT=3333
```

4. Inicie o servidor:
```
npm run dev
```

## 💻 Deploy <a name = "deploy-pt"></a>

Esta API foi hospedada diretamente no Render.

O deployment pode ser acessado no seguinte endereço:
```
https://plann-er-back-end.onrender.com
```

>Nota: Como está hospedado em um serviço gratuito, a aplicação 'hiberna' após 15 minutos de inatividade. Se você estiver tentando acessar o site e o BackEnd não responder, basta aguardar, pois ele estará 'inicializando' os serviços.

## 📖 Documentação das Rotas <a name = "documentacao-das-rotas-pt"></a>

A documentação de todas as rotas está disponível em:
```
https://plann-er-back-end.onrender.com/reference
```

ou caso esteja hospedado em seu desktop:
```
http://localhost:{port}/reference
```


Certifique-se de substituir `{port}` pela porta definida no arquivo `.env`. Se não estiver definido, tente acessar com a porta padrão 3333.

>Nota: Esta aplicação foi desenvolvida usando a versão Node.js v20.15. Em caso de problemas, tente atualizar o Node.js para a versão mais recente.

<div align="center" name="autor-pt">
  <h4>Criado com ❤️ por <a href="https://github.com/Vitinho163">João Victor</a></h4>
</div>
