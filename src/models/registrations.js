const connection = require('./connection');

const getAll = async () => {
    const [register] = await connection.execute('SELECT * FROM cadastros');
    return register;
};

const registerUser = async (user) => {
    const {nome, usuario, senha, confirmacao, tipo} = user;
    const query = 'INSERT INTO cadastros(nome, usuario, senha, confirmacao, tipo) VALUES(?, ?, ?, ?, ?)';
    const [registUser] = await connection.execute(query, [nome, usuario, senha, confirmacao, tipo]);

    return {insertId: registUser.insertId};
};

const deleteUser = async (id) => {
    const delUser = await connection.execute('DELETE FROM cadastros WHERE id = ?', [id]);

    return delUser;
}

const updateUser = async (id, user) => {
    const {usuario, senha, confirmacao} = user;
    const query = 'UPDATE cadastros SET usuario = ?, senha = ?, confirmacao = ? WHERE id = ?';
    const [upUser] = await connection.execute(query, [usuario, senha, confirmacao, id]);

    return upUser;
};

module.exports = {
    getAll,
    registerUser,
    deleteUser,
    updateUser
};