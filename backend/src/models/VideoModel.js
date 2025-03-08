import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default class VideoModel {
  async createVideo(data) {
    try {
      return await prisma.video.create({
        data,
      });
    } catch (error) {
      throw new Error(`erro ao criar video:  ${error.message}`);
    }
  }

  async getVideoById(id) {
    try {
      const video = await prisma.video.findUnique({
        where: {
          id: parseInt(id, 10),
        },
      });

      return video;
    } catch (error) {
      throw new Error('Erro ao buscar videos:', error);
    }
  }

  async getAllVideosByRating() {
    try {
      const videos = await prisma.video.findMany({
        orderBy: {
          eloScore: 'desc',
        },
      });

      if (!videos || videos.length === 0) {
        throw new Error('Nenhum video encontrado');
      }
      return videos;
    } catch (error) {
      throw new Error('Erro ao buscar videos:', error);
    }
  }

  async getVideos() {
    try {
      const totalVideos = await prisma.video.count();

      if (totalVideos < 2) {
        throw new Error('Menos de 2 videos no banco de dados');
      }

      const randomIndex = Math.floor(Math.random() * totalVideos);

      const video = await prisma.video.findMany({
        skip: randomIndex,
        take: 1,
      });

      return video[0];
    } catch (error) {
      throw new Error('Erro ao buscar os 2 videos:', error);
    }
  }

  async updateVideo(id, data) {
    try {
      return await prisma.video.update({
        where: {
          id: parseInt(id, 10),
        },
        data,
      });
    } catch (error) {
      throw new Error('Erro ao editar video:', error);
    }
  }

  async deleteVideo(id) {
    try {
      const deleteVideo = await prisma.video.delete({
        where: {
          id: parseInt(id, 10),
        },
      });

      return deleteVideo;
    } catch (error) {
      console.log('ERRO:', error);
      throw new Error('Erro ao delatar video', error);
    }
  }
}
