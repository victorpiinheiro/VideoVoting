import VideoModel from '../models/VideoModel';
import UserModel from '../models/UserModel';
import VoteModel from '../models/VoteModel';

const videoModel = new VideoModel();
const userModel = new UserModel();
const voteModel = new VoteModel();

class VideoController {
  async createVideo(req, res) {
    const {
      title, url, description, uploadDate, category, userId,
    } = req.body;

    if (!title || !url || !description || !uploadDate || !category || !userId) {
      return res.status(400).json({
        error: 'Todos os campos devem ser informados',
      });
    }

    const categoryFormated = category.toLowerCase();

    try {
      const verifyUserExists = await userModel.checkUserExistsById(userId);
      if (!verifyUserExists) return res.status(400).json({ Error: 'UserId nao esta vinculado a nenhum usuario' });
      const video = await videoModel.createVideo({
        url,
        title,
        description,
        uploadDate: new Date(),
        category: categoryFormated,
        userId,

      });
      return res.status(201).json({
        message: 'Video adicionado com sucesso',
        video,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: 'Erro ao adicionar video', error });
    }
  }

  /* ================================================================================= */

  async index(req, res) {
    try {
      const videos = await videoModel.getAllVideosByRating();
      if (!videos) res.status(400).json({ Error: 'Lista de videos vazia.' });

      return res.status(200).json(videos);
    } catch (error) {
      return res.status(500).json({
        error: 'erro interno ao listar videos',
      });
    }
  }

  /* ================================================================================= */

  async show(req, res) {
    try {
      const primaryVideo = await videoModel.getVideos();
      let secondVideo = await videoModel.getVideos();

      while (primaryVideo.id === secondVideo.id) {
        secondVideo = await videoModel.getVideos();
      }

      return res.status(200).json({ Video1: primaryVideo, Video2: secondVideo });
    } catch (error) {
      return res.status(500).json({
        error: 'erro interno ao listar videos',
      });
    }
  }
  /* ================================================================================= */

  async mostraVideoById(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ error: 'Id nao fornecido' });

      const video = await videoModel.getVideoById(id);
      if (!video) return res.status(400).json({ error: 'O id fornecido nao pertence a nenhum video' });

      return res.status(200).json({
        message: 'Video encontrado com sucesso',
        Video: video,
      });
    } catch (error) {
      return res.status(500).json({
        error: 'erro interno ao listar video',
      });
    }
  }

  /* ================================================================================= */

  async updateVideo(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ error: 'Id nao fornecido' });

      const video = await videoModel.getVideoById(id);
      if (!video) return res.status(400).json({ error: 'O id fornecido nao pertence a nenhum video' });

      const {
        title, url, description, category,
      } = req.body;

      const dados = {};

      if (title) dados.title = title;
      if (url) dados.url = url;
      if (description) dados.description = description;
      if (category) dados.category = category;
      console.log('meus dados:', Object.keys(dados).length);

      if (Object.keys(dados).length < 1) {
        return res.status(400).json({ Error: 'nenhum dado informado' });
      }

      const videoEditado = await videoModel.updateVideo(id, dados);
      return res.status(200).json({ message: 'Video editado com sucesso', Video: videoEditado });
    } catch (err) {
      return res.status(500).json({
        error: 'erro interno ao editar video',
      });
    }
  }

  /* ================================================================================= */

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ error: 'Id nao fornecido' });

      const verifyVideoExists = await videoModel.getVideoById(id);
      if (!verifyVideoExists) {
        return res.status(400).json({ error: 'Video não existe no banco de dados' });
      }

      const deleteVideo = await videoModel.deleteVideo(id);

      return res.status(200).json({ message: 'Video deletado com sucesso', deleteVideo });
    } catch (error) {
      console.log('seu erro foi:', error);
      return res.status(500).json({
        error: 'erro interno ao deletar video',
        details: error.message,
      });
    }
  }

  /* ================================================================================= */

  async getVideosByUserId(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ error: 'Id nao fornecido' });

      const videos = await videoModel.getVideosByUserId(id);
      if (!videos) return res.status(400).json({ error: 'Usuario nao tem videos cadastrados' });

      return res.status(200).json({
        message: 'Videos encontrado com sucesso',
        videos,
      });
    } catch (error) {
      return res.status(500).json({
        error: 'erro interno ao listar videos',
      });
    }
  }
}

export default new VideoController();
