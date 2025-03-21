import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import UserModel from '../models/UserModel';

const user = new UserModel();

class TokenController {
  async store(req, res) {
    try {
      const { email = '', password = '' } = req.body;

      if (!email || !password) return res.status(400).json({ error: 'Todos os campos são obrigatorios' });

      const checkUserExists = await user.checkEmailExists(email);
      if (!checkUserExists) return res.status(401).json({ error: 'Usuario invalido ou nao existe' });

      const comparePassword = await bcrypt.compare(password, checkUserExists.password);
      if (!comparePassword) return res.status(401).json({ error: 'Senha invalida' });

      const { id, username } = checkUserExists;
      const token = await jwt.sign({ id, email, username }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });

      return res.status(200).json({
        message: 'Token gerado com sucesso',
        token,
      });
    } catch (error) {
      return res.status(500).json({
        errors: ['Erro ao gerar o token'],
      });
    }
  }
}

export default new TokenController();
