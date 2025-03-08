import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default class VoteModel {
  async createVote(data) {
    return prisma.vote.create({ data });
  }

  async getVideoById(id) {
    return prisma.video.findUnique({
      where: { id: parseInt(id, 10) },
    });
  }

  async updateEloScore(video1, newScore) {
    return prisma.video.update({
      where: { id: video1 },
      data: { eloScore: Math.round(newScore) },
    });
  }

  async getVoteById(videoId) {
    try {
      return prisma.vote.findMany({
        where: {
          OR: [{ video1Id: parseInt(videoId, 10) }, { video2Id: parseInt(videoId, 10) }],
        },
      });
    } catch (error) {
      throw new Error('Erro ao procurar votos relacionados ao vídeo', error);
    }
  }
}
