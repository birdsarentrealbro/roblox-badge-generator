// server.js
const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors()); // Enable CORS for all origins

app.get('/badge/:id', async (req, res) => {
  const badgeId = req.params.id;
  try {
    const response = await fetch(`https://cors-anywhere.com/badges.roblox.com/v1/badges/${badgeId}`);
    const data = await response.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: 'Failed to fetch badge data' });
  }
});

app.listen(PORT, () => console.log(`Proxy server running on http://localhost:${PORT}`));
