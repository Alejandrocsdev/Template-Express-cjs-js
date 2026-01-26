require('dotenv').config({ quiet: true });

const express = require('express');
const app = express();
const port = Number(process.env.PORT) || 3000;

const { notFound, errorHandler } = require('./middlewares');

const routes = require('./routes');

// Routes
app.get('/', (req, res) => res.json({ status: 'ok' }));
app.use('/api', routes);

// Error handling
app.use(notFound);
app.use(errorHandler);

// Servers
app.listen(port, () => console.info('[Server] listening on port', port));
