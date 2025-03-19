import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default class UserModel {
  async createUser(data) {
    try {
      return await prisma.user.create({
        data,
      });
    } catch (error) {
      console.error('erro ao criar usuario', error);
      throw error;
    }
  }

  async checkUserNameExists(username) {
    try {
      return await prisma.user.findUnique({
        where: {
          username,
        },
      });
    } catch (error) {
      throw new Error('Erro ao procurar email', error);
    }
  }

  async checkEmailExists(email) {
    try {
      return await prisma.user.findUnique({
        where: {
          email,
        },
      });
    } catch (error) {
      return null;
    }
  }

  async checkUserExistsById(id) {
    try {
      return await prisma.user.findUnique({
        where: {
          id: parseInt(id, 10),
        },
      });
    } catch (error) {
      return null;
    }
  }

  async deleteUser(id) {
    try {
      return await prisma.user.delete({
        where: {
          id: parseInt(id, 10),
        },
      });
    } catch (error) {
      return error;
    }
  }

  async getAllUsers() {
    try {
      return await prisma.user.findMany();
    } catch (error) {
      return error;
    }
  }

  async editUser(id, data) {
    try {
      return await prisma.user.update({
        where: {
          id: parseInt(id, 10),
        },
        data,
      });
    } catch (error) {
      return error;
    }
  }

  async getUserById(id) {
    try {
      return await prisma.user.findUnique({
        where: {
          id: parseInt(id, 10),
        },
      });
    } catch (error) {
      return error;
    }
  }
}
