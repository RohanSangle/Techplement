import express from 'express';
import axios from 'axios';

const router = express.Router();

router.get('/random', async (req, res) => {
  try {
    const response = await axios.get('https://api.quotable.io/random');
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching quote', error: error.message });
  }
});

export default router;
