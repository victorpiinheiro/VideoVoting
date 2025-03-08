import bcrypt from 'bcrypt';
import validator from 'validator';

import UserModel from '../models/UserModel';

const userModel = new UserModel();

class UserController {
  async store(req, res) {
    const { username, email, password } = req.body;
    try {
      // campos obrigatorio
      if (!username || !email || !password) {
        return res.status(400).json({
          error: 'Todos os campos são obrigatorios',
        });
      }

      // verifica se o email é valido
      if (!validator.isEmail(email)) return res.status(400).json({ error: 'Email invalido' });

      // verifica se email ja existe na base de dados
      const emailExists = await userModel.checkEmailExists(email);
      if (emailExists) {
        return res.status(409).json({
          error: 'Email ja existente',
        });
      }
      const userExists = await userModel.checkUserNameExists(username);
      if (userExists) {
        return res.status(409).json({
          error: 'Username indisponivel',
        });
      }

      // verificação tamanho da senha
      if (password.length < 6 || password.length > 30) {
        return res.status(400).json({
          error: 'A senha deve ter entre 6 e 30 caracteres',
        });
      }
      // hash da senha
      const passwordHash = await bcrypt.hash(password, 8);
      console.log('hash>', passwordHash);

      await userModel.createUser({
        username, email, password: passwordHash,
      });

      return res.status(200).json({
        message: 'Usuario cadastrado com sucesso',
        user: username,
        email,

      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        error: 'erro interno ao cadastrar usuario',
      });
    }
  }
  /* =============================================================== */

  async index(req, res) {
    try {
      const users = await userModel.getAllUsers();

      if (!users) return res.status(400).json({ message: 'Nenhum usuario encontrado' });

      return res.status(200).json({ Usuarios: users });
    } catch (error) {
      return res.status(500).json({
        error: 'erro interno ao buscar usuarios',
      });
    }
  }
  /* =============================================================== */

  async delete(req, res) {
    const { id } = req.params;

    try {
      const user = await userModel.checkUserExistsById(id);
      if (!user) return res.status(400).json({ Error: 'Usuario nao encontrado ou nao existe' });

      await userModel.deleteUser(id);

      return res.status(200).json({ message: 'Usuario excluido com sucesso' });
    } catch (error) {
      return res.status(500).json({
        error: 'erro interno ao deletar usuario',
      });
    }
  }
  /* =============================================================== */

  async update(req, res) {
    const { id } = req.params;

    const { email, username } = req.body;
    if (!email && !username) return res.status(400).json({ Error: 'nenhum campo fornecido para editar' });

    const dataToUpdate = {};
    if (email) {
      if (!validator.isEmail(email)) {
        return res.status(400).json({ Error: 'Email invalido' });
      }
      dataToUpdate.email = email;
    }
    if (username) dataToUpdate.username = username;

    try {
      const verificaUserExistById = await userModel.checkUserExistsById(id);
      if (!verificaUserExistById) return res.status(400).json({ Error: 'Id invalido ou usuario nao existe' });

      const verifyEmailExists = await userModel.checkEmailExists(email);
      if (verifyEmailExists) return res.status(400).json({ Error: 'Email ja cadastrado ou invalido' });

      await userModel.editUser(id, dataToUpdate);

      return res.status(200).json({ message: 'Usuario editado com sucesso' });
    } catch (error) {
      return res.status(500).json({
        error: 'erro interno ao editar usuario',
      });
    }
  }
}

export default new UserController();
