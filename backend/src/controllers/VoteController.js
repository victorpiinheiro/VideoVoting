import VoteModel from '../models/VoteModel';

const voteModel = new VoteModel();

class VoteController {
  async create(req, res) {
    const { video1Id, video2Id, winnerId } = req.body;

    if (!video1Id || !video2Id || !winnerId) {
      return res.status(400).json({ error: 'Todos os Id\'s são obrigatorios' });
    }

    if (video1Id === video2Id) return res.status(400).json({ error: 'Os Videos nao podem ser iguais' });

    try {
      // busca videos no banco de dados
      const video1 = await voteModel.getVideoById(video1Id);
      const video2 = await voteModel.getVideoById(video2Id);

      // verifica se os videos existem
      if (!video1 || !video2) return res.status(400).json({ error: 'um ou ambos videos nao foram encontrados' });

      // validação que o winnerId pertence a um dos videos
      if (winnerId !== video1Id && winnerId !== video2Id) {
        return res.status(400).json({ error: 'O winnerId deve ser o di de um dos dois vídeos.' });
      }

      // Calcula as probabilidades de vitória
      const probabilityVideo1 = 1 / (1 + 10 ** ((video2.eloScore - video1.eloScore) / 400));
      const probabilityVideo2 = 1 / (1 + 10 ** ((video1.eloScore - video2.eloScore) / 400));

      const resultVideo1 = winnerId === video1Id ? 1 : 0;
      const resultVideo2 = winnerId === video2Id ? 1 : 0;

      const fatorDeAjuste = 32;

      // Calcula os novos Elo Scores
      const updatedEloVideo1 = video1.eloScore + fatorDeAjuste * (resultVideo1 - probabilityVideo1);
      const updatedEloVideo2 = video2.eloScore + fatorDeAjuste * (resultVideo2 - probabilityVideo2);

      // Atualiza os Elo Scores no banco de dados
      await voteModel.updateEloScore(video1Id, updatedEloVideo1);
      await voteModel.updateEloScore(video2Id, updatedEloVideo2);

      // Registra o voto no banco de dados
      await voteModel.createVote({ video1Id, video2Id, winnerId });

      return res.status(201).json({
        message: 'Voto registrado com sucesso!',
        video1: { id: video1Id, eloScore: Math.round(updatedEloVideo1) },
        video2: { id: video2Id, eloScore: Math.round(updatedEloVideo2) },
      });
    } catch (error) {
      console.error('Erro ao registrar voto:', error);
      return res.status(500).json({ error: 'Erro interno do servidor.' });
    }
  }
}

export default new VoteController();
