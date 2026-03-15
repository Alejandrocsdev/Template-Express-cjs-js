require('dotenv').config({ quiet: true });

// Crash handlers (FAIL FAST)
require('./process').crashHandlers();

const express = require('express');
const port = Number(process.env.PORT) || 3000;

const { connectMysql, connectMongoDB } = require('./config/db');

const connectNgrok = require('./config/ngrok');

const { engine } = require('express-handlebars');

const { cors, silence, notFound, errorHandler } = require('./middlewares');

const serverError = require('./errors/serverError');

const routes = require('./routes');

const start = async () => {
  // 1. Connect databases
  await connectMysql();
	await connectMongoDB();

  // 2. Establish public tunnel
  await connectNgrok(port);

  // 3. Create express instance
  const app = express();

  // Template Engine
  app.engine('.hbs', engine({ extname: '.hbs' }));
  app.set('view engine', '.hbs');
  app.set('views', './views');

  // Middlewares
	app.use(cors);
  app.use(express.json());
  app.use(express.static('public'));

  // Routes
  app.use(silence);
  app.get('/', (req, res) => res.json({ status: 'ok_test' }));
  app.get('/home', (req, res) => res.render('home'));
  app.use('/api', routes);

  // Request error handling
  app.use(notFound);
  app.use(errorHandler);

  // 4. Start server
  const server = app.listen(port, () => {
    console.info('[Server] listening on port', port);
  });

	// Server error handling
  server.on('error', serverError);

  // Graceful shutdown (CLEAN EXIT)
  require('./process').shutdownHandlers(server);
};

// BOOTSTRAP
start().catch((error) => {
  console.error('[Server] startup aborted\n');
  console.error(error);
  process.exit(1);
});
