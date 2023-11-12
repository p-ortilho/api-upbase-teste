# api-upbase-teste

API desenvolvida para a conclusão do desafio proposto pela Upbase no programa de estágio.

Para testar a API localmente basta seguir os seguintes passos:

1. Primeiro clone o repositorio do github.
~~~
git clone https://github.com/p-ortilho/api-upbase-teste.git
~~~
2. Faça a instalação das dependecias do node para executar a aplicação, dentro da pasta do repositorio:
~~~
npm install express

npm install mysql2

npm install nodemon -D

npm install dotenv
~~~

Para configurar o banco de dados, você pode executar um container com mysql usando o seguinte comando:
~~~
docker run --name cadastro -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 -d mysql
~~~

Para criar a tabela do banco de dados você pode fazer usar os comandos SQL a seguir:
~~~
CREATE DATABASE IF NOT EXIT <nome do banco de dados>

USE <nome do banco de dados>

CREATE TABLE cadastros(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    usuario VARCHAR(45) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    confirmacao VARCHAR(255) NOT NULL,
    tipo VARCHAR(45) NOT NULL
);
~~~

Executando a aplicação basta usar o seguinte comando:
~~~
npm start
~~~

**Lembre-se as configurações como hostname, user, password, DATABASE e PORT devem ser passado dentro do arquivo .env que fica na raiz do projeto!**