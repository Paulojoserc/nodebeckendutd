# 🧑‍💼 Node Backend UTD – API de Clientes

API REST em **Node.js** com **Express** e **Sequelize** para cadastro e gerenciamento de clientes, usando **PostgreSQL** como banco de dados.

![Node.js](https://img.shields.io/badge/Node.js-backend-339933)
![Express](https://img.shields.io/badge/Express-API-000000)
![Sequelize](https://img.shields.io/badge/Sequelize-ORM-52B0E7)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-database-4169E1)

## 📌 Sobre o projeto

Backend simples que expõe um **CRUD completo de clientes** (`nome`, `idade`, `email`). O projeto segue uma estrutura em camadas: rotas, controllers, models e configuração do banco.

## 🛠️ Tecnologias

- **Node.js**
- **Express** – servidor HTTP e rotas
- **Sequelize** – ORM
- **PostgreSQL** – banco de dados

## 📁 Estrutura do projeto

```
nodebeckendutd/
├── config/
│   ├── db.config.js     # conexão Sequelize e registro dos models
│   └── env.js           # parâmetros de conexão com o banco
├── controllers/
│   └── controller.js    # regras de cada endpoint
├── model/
│   └── cliente.model.js # model Cliente
├── routes/
│   └── router.js        # definição das rotas
├── server.js            # ponto de entrada
└── package.json
```

## ✅ Pré-requisitos

- Node.js 16+
- npm
- Uma instância PostgreSQL acessível, com o banco criado

## ⚙️ Configuração

Os dados de conexão ficam em `config/env.js`:

```js
const env = {
  database: 'nome_do_banco',
  username: 'usuario',
  password: 'senha',
  host: 'endereco_do_servidor',
  dialect: 'postgres',
};
```

> 🔒 **Não versione credenciais reais.** Use variáveis de ambiente (ex.: `process.env.DB_PASSWORD`) e mantenha o arquivo `.env` no `.gitignore`.

## 🚀 Como executar

```bash
# clonar o repositório
git clone https://github.com/Paulojoserc/nodebeckendutd.git
cd nodebeckendutd

# instalar dependências
npm install

# iniciar o servidor
node server.js
```

> ⚠️ **Revisar:** informe a porta em que o servidor sobe (definida em `server.js`) e, se existir, o script `npm start`.

## 🔌 Endpoints

| Método   | Rota                | Descrição                    |
|----------|---------------------|------------------------------|
| `POST`   | `/api/cliente`      | Cria um cliente              |
| `GET`    | `/api/cliente/:id`  | Busca um cliente pelo ID     |
| `GET`    | `/api/clientes`     | Lista todos os clientes      |
| `PUT`    | `/api/cliente`      | Atualiza um cliente (ID no body) |
| `DELETE` | `/api/cliente/:id`  | Remove um cliente pelo ID    |

### Exemplos

**Criar cliente**

```bash
curl -X POST http://localhost:<porta>/api/cliente \
  -H "Content-Type: application/json" \
  -d '{"nome": "Maria Silva", "idade": 30, "email": "maria@exemplo.com"}'
```

**Listar clientes**

```bash
curl http://localhost:<porta>/api/clientes
```

**Atualizar cliente** (o `id` vai no corpo da requisição)

```bash
curl -X PUT http://localhost:<porta>/api/cliente \
  -H "Content-Type: application/json" \
  -d '{"id": 1, "nome": "Maria Souza", "idade": 31, "email": "maria@exemplo.com"}'
```

**Remover cliente**

```bash
curl -X DELETE http://localhost:<porta>/api/cliente/1
```

## 🗃️ Modelo de dados

| Campo   | Tipo    | Descrição            |
|---------|---------|----------------------|
| `id`    | inteiro | Chave primária       |
| `nome`  | texto   | Nome do cliente      |
| `idade` | inteiro | Idade do cliente     |
| `email` | texto   | E-mail do cliente    |



## 👤 Autor

**Paulo José** – [@Paulojoserc](https://github.com/Paulojoserc)
