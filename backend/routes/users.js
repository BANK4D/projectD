const express = require('express');
const pool = require('../config/database');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Get all players (searchable)
router.get('/search', async (req, res) => {
  try {
    const { game, rank, style, username } = req.query;
    let query = 'SELECT * FROM users WHERE 1=1';
    const params = [];

    if (game) {
      query += ` AND game ILIKE $${params.length + 1}`;
      params.push(`%${game}%`);
    }
    if (rank) {
      query += ` AND rank = $${params.length + 1}`;
      params.push(rank);
    }
    if (style) {
      query += ` AND play_style = $${params.length + 1}`;
      params.push(style);
    }
    if (username) {
      query += ` AND username ILIKE $${params.length + 1}`;
      params.push(`%${username}%`);
    }

    const result = await pool.query(query, params);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get user profile
router.get('/:id', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [req.params.id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update user profile
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const { game, rank, play_style, bio, avatar } = req.body;
    const result = await pool.query(
      'UPDATE users SET game = $1, rank = $2, play_style = $3, bio = $4, avatar = $5 WHERE id = $6 RETURNING *',
      [game, rank, play_style, bio, avatar, req.params.id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Send friend request
router.post('/:id/friend-request', authMiddleware, async (req, res) => {
  try {
    const senderId = req.user.id;
    const receiverId = req.params.id;

    await pool.query(
      'INSERT INTO friend_requests (sender_id, receiver_id) VALUES ($1, $2)',
      [senderId, receiverId]
    );

    res.json({ message: 'Friend request sent' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
