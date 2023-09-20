// ---Dependencies
import express from 'express';
import { Server } from 'socket.io';
import http from 'http';
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
import { socketConfig } from './socketEvents/socketConfig';
import { tableDataRoutes } from './routes/tableData';

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
  app.use('/table-ex/', tableDataRoutes);

  // ---------------- SSL

  // const trySSL = process.env.USE_SSL || false; // Set use of https from enviroment

  const httpServer = http.createServer(app);

  // ---------------- WEB SOCKET SERVER
  const io = new Server(httpServer, { cors: { origin: '*' } });

  io.on('connection', (socket) => {
    socketConfig(socket);
  });

  // ---------------- SERVER
  httpServer.listen(APP_PORT, () => {
    debugProd(`https: ${false}, listening to port ${APP_PORT}...`);
  });

  return io;
}

export const mainSocket = main();
