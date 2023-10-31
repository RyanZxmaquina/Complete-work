# Complete-work
Instalar os const por favor, e lembre-se de encaixar os nomes


-- Tabela de Anotações
CREATE TABLE anotacoes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  data DATETIME NOT NULL,
  anotacao TEXT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
