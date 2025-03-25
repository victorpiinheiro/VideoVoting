# Projeto Video Voting

O **Video Voting** é uma plataforma que permite aos usuários cadastrar vídeos do YouTube através de links e votar neles, ajudando a destacar os vídeos mais populares. Além disso, o projeto inclui autenticação de usuários, votação simples e exibição dos vídeos mais votados.


## 🚀 Tecnologias Utilizadas
- Node.js
- Express
- React
- Hooks
- Vite
- MySQL
- Prisma ORM
- Nodemon




## Aqui estão alguns exemplos de requisições e respostas usando o **Insomnia** para interagir com a API:

- **GET /videos**
![Insominia Screenshot 1](https://github.com/victorpiinheiro/VideoVoting/blob/main/images/getvideos.png?raw=true)

- **POST /user**
![Insominia Screenshot 2](https://github.com/victorpiinheiro/VideoVoting/blob/main/images/postuser.png?raw=true)

## Aqui estão alguns exemplos do frontEnd do projeto:

- **Tela de Login**
![Tela de Login](https://github.com/victorpiinheiro/VideoVoting/blob/main/images/login.png?raw=true)

- **Home Page**
![Tela Home](https://github.com/victorpiinheiro/VideoVoting/blob/main/images/home.png?raw=true)

- **Pagina de votação**
![Tela de Votação](https://github.com/victorpiinheiro/VideoVoting/blob/main/images/votacao.png?raw=true)



## ⚙️ Como Rodar Localmente

### 1. Clonar o Repositório

```bash
  git clone https://github.com/victorpiinheiro/videoVoting.git
```
### 2.  Instalando as dependências

Entre no diretório do projeto backend
```bash
  cd youtube\backend
```

Instale as dependências
```bash
  npm install
```

Inicie o servidor
```bash
  npm run dev
```
A API estará rodando em http://localhost:3002.

Abra outro terminal para entrar no diretório do frontend
```bash
  cd youtube\frontend\youtube
```

Instale as dependências
```bash
  npm install
```

Inicie o servidor
```bash
  npm run dev
```
O frontend estará disponível em http://localhost:5173 (ou conforme definido pelo Vite).

### 3. Configurar o Banco de Dados (MySQL)
Certifique-se de ter o MySQL instalado e rodando na sua máquina.
Crie um banco de dados:
```bash
  CREATE DATABASE youtube_challenge;
```
Configure o arquivo .env na pasta backend com a sua conexão do MySQL:
```bash
  DATABASE_URL="mysql://USUARIO:SENHA@localhost:3306/youtube_challenge"
  TOKEN_SECRET=seu_token_secreto
  TOKEN_EXPIRATION=2d
```
Substitua **USUARIO** pelo seu usuário do MySQL.
Substitua **SENHA** pela senha do seu MySQL.
Substitua **seu_token_secreto** por um valor seguro para autenticação.



