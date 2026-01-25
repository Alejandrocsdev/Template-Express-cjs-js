require('dotenv').config({ quiet: true });

const express = require('express');
const app = express();
const port = Number(process.env.PORT) || 3000;

// Routes
app.get('/', (req, res) => res.json({ status: 'ok' }));

// Servers
app.listen(port, () => console.info('[Server] listening on port', port));
