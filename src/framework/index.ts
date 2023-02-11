// ---Dependencies
import express from 'express';
// ---Middlewares
import { customHelmet } from './middlewares/customHelmet';
import { morganlogger } from './middlewares/morganlogger';
import cors from 'cors';
// ---DB stuff
import { mongoConnect } from '../configs/mongoConfig';
// ---Constants
import { healthRoutes } from './routes/health';
import { APP_PORT, CORS_CONFIG } from 'src/configs/constants/basicConstants';
import { envValidator } from 'src/configs/envValidator';

const debugProd = require('debug')('app:prod');

/** Main wrapper */
function main() {
  // ---------------- CONFIG
  envValidator();
  const app = express();
  mongoConnect();
  // ---------------- MIDDLEWARES
  app.use(express.json()); // Needed to read req.body
  customHelmet(app);
  morganlogger(app);
  app.use(cors(CORS_CONFIG)); // Cors policy

  // ---------------- ROUTES
  app.use('/health/', healthRoutes);

  // ---------------- SSL
  // eslint-disable-next-line global-require
  const http = require('http');

  // const trySSL = process.env.USE_SSL || false; // Set use of https from enviroment

  const server = http;
  const options = {}; // Get ssl certs if https true
  // ---------------- SERVER
  server.createServer(options, app).listen(APP_PORT, () => {
    debugProd(`https: ${false}, listening to port ${APP_PORT}...`);
  });
}

main();
