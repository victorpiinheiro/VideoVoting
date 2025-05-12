import bcrypt from 'bcrypt';
import validator from 'validator';
import bcrypt from 'bcrypt';

import UserModel from '../models/UserModel';

const userModel = new UserModel();

class UserController {
  async store(req, res) {
    const { username, email, password } = req.body;
    try {
      if (!username || !email || !password) {
        return res.status(400).json({
          error: 'Todos os campos são obrigatorios',
        });
      }

      if (!validator.isEmail(email)) return res.status(400).json({ error: 'Email invalido' });

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

      if (password.length < 6 || password.length > 30) {
        return res.status(400).json({
          error: 'A senha deve ter entre 6 e 30 caracteres',
        });
      }

      const passwordHash = await bcrypt.hash(password, 8);

      await userModel.createUser({
        username, email, password: passwordHash,
      });

      return res.status(201).json({
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
      if (!user) return res.status(400).json({ error: 'Usuario nao encontrado ou nao existe' });

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

    const { email, password } = req.body;
    if (!email) return res.status(400).json({ error: 'Campo email não fornecedido' });
    if (!password) return res.status(400).json({ error: 'Campo senha não fornecido' });

    if (!validator.isEmail(email)) {
      return res.status(400).json({ Error: 'Email invalido' });
    }

    try {

      const meuUserAtual = await userModel.getUserById(id);
      if (!meuUserAtual) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }

      if (meuUserAtual.email === email) {
        return res.status(404).json({ error: 'O novo email cadastrado não pode ser igual o atual' });
      }

      const allUsers = await userModel.getAllUsers();

      if (!allUsers) {
        return res.status(400).json({ error: 'erro ao buscar todos os usuarios' });
      }

      // retira o usuario que ira ser cadastrado da busca
      let verificaEmailNaoEstaCadastrado = allUsers.filter(user => user.id !== meuUserAtual.id);

      // filtra para ver se o email que sera cadastrado ja existe
      verificaEmailNaoEstaCadastrado = verificaEmailNaoEstaCadastrado.filter(user => user.email === email)

      if (verificaEmailNaoEstaCadastrado.length > 0) {
        return res.status(400).json({error: 'Email já existente'})
      }

      const compareSenha = await bcrypt.compare(password, meuUserAtual.password);
      if (!compareSenha) {
        return res.status(400).json({message: 'Senha inválida'})
      }

      const editUser = await userModel.editUser(id, {email})
      return res.status(200).json({message: 'E-mail editado com sucesso'})

    } catch (error) {
      return res.status(500).json({
        error: 'erro interno ao editar usuario',
      });
    }
  }

  async show(req, res) {
    const { id } = req.params;

    if (!id) return res.status(400).json({ error: 'Id nao informado' });

    try {
      const user = await userModel.getUserById(id);
      if (!user) return res.status(404).json({ error: 'usuario nao encontrado' });
      return res.status(200).json({ message: 'Usuario encontrado', user });
    } catch (error) {
      return res.status(500).json({
        error: 'erro interno ao procurar usuario',
      });
    }
  }

  async updatePassword(req, res) {
    const { id } = req.params;
    if (!id) return res.status(400).json({ error: 'Id nao informado' });
    const { currentPassword, newPassword } = req.body;
    console.log(currentPassword, newPassword)
    if (!currentPassword || !newPassword) return res.status(400).json({ error: 'Senha antiga ou nova senha nao informadas' });


    try {
      const user = await userModel.getUserById(id);
      if (!user) return res.status(404).json({ error: 'Usuario não encontrado' });
      const compareSenhas = await bcrypt.compare(currentPassword, user.password);

      if (!compareSenhas) return res.status(400).json({ error: 'senha invalida' })
      const hashNewPassword = await bcrypt.hash(newPassword, 8)
      await userModel.editUser(id, { password: hashNewPassword });
      return res.status(200).json({ message: 'Senha editada com sucesso' });

    } catch (err) {
      return res.status(500).json({
        error: 'erro interno ao procurar usuario',
      });
    }
  }
}

export default new UserController();
