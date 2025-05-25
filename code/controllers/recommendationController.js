const { getOpenAIRecommendations } = require('../config/openai');

const TIMEOUT_MS = 5000;

exports.getRecommendations = async (req, res) => {
  try {
    const { alcoholicFavorites, beverageTypes } = req.body;
    if (!alcoholicFavorites || !beverageTypes) {
      return res.status(400).json({ error: 'Missing required fields.' });
    }
    // Timeout logic
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Timeout')), TIMEOUT_MS)
    );
    const recommendationsPromise = getOpenAIRecommendations(alcoholicFavorites, beverageTypes);
    const recommendations = await Promise.race([recommendationsPromise, timeoutPromise]);
    res.json({ recommendations });
  } catch (error) {
    if (error.message === 'Timeout') {
      return res.status(504).json({ error: 'Recommendation service timed out.' });
    }
    res.status(500).json({ error: 'Failed to get recommendations.' });
  }
};
