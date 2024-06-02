const mysql = require("mysql");

const conexao = mysql.createConnection({
    host: "localhost",
    port: 3000,
    user: "root",
    password: "12345Tati@",
    database: "controle_cliente",
});

module.exports = conexao;

