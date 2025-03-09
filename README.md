# Projeto Video Voting

O projeto **Video Voting** permite que os usuários cadastrem vídeos via link do YouTube e votem nos melhores, ajudando a destacar os conteúdos mais populares com base em votos.

## 🚀 Tecnologias Utilizadas
- Node.js
- Express
- React
- Vite
- MySQL
- Prisma ORM
- Nodemon




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
A API estará rodando em http://localhost:3000.

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



