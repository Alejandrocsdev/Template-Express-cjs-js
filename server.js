require('dotenv').config({ quiet: true });

// Process-level crash handlers (FAIL FAST)
const crashHandlers = require('./process/crash');
crashHandlers();

const express = require('express');
const app = express();
const port = Number(process.env.PORT) || 3000;

const { engine } = require('express-handlebars');

const { notFound, errorHandler } = require('./middlewares');

const routes = require('./routes');

// Template Engine
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');

// Static Files
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => res.json({ status: 'ok' }));
app.get('/favicon.ico', (req, res) => res.status(204));
app.get('/home', (req, res) => res.render('home'));
app.use('/api', routes);

// Error handling
app.use(notFound);
app.use(errorHandler);

// Servers
const server = app.listen(port, () => {
  console.info('[Server] listening on port', port);
});

// Graceful shutdown (CLEAN EXIT)
const shutdownHandlers = require('./process/shutdown');
shutdownHandlers(server);
