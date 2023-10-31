const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'phpmyadmin',
  password: 'aluno',
  database: 'users',
});

// Salva uma anotação no banco de dados
function salvarAnotacao(userId, data, anotacao, callback) {
  const query = 'INSERT INTO anotacoes (user_id, data, anotacao) VALUES (?, ?, ?)';
  db.query(query, [userId, data, anotacao], (err, results) => {
    if (err) {
      console.error('Erro ao salvar anotação:', err);
      return callback(err, null);
    }
    return callback(null, results);
  });
}

// Obtém as anotações de um usuário do banco de dados
function obterAnotacoes(userId, callback) {
  const query = 'SELECT * FROM anotacoes WHERE user_id = ?';
  db.query(query, [userId], (err, results) => {
    if (err) {
      console.error('Erro ao obter anotações:', err);
      return callback(err, null);
    }
    return callback(null, results);
  });
}

module.exports = { salvarAnotacao, obterAnotacoes };
