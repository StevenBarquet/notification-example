// ---Dependencies
import express from 'express';
// ---Middlewares
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
// ---Others
import { startLogs } from 'src/framework/middlewares/startLogs';
// ---Routes
import { healthRoutes } from './routes/health';
import { authRoutes } from './routes/auth';

// -----------------------------------CONFIG-------------------------------
const app = express();
const port = process.env.PORT || 4000;

startLogs();

// -----------------------------------MIDDLEWARES-------------------------------
app.use(express.json()); // Needed to read req.body
app.use(helmet()); // For security
app.use(cors()); // For security
app.use(morgan('dev'));
// -----------------------------------ROUTES-------------------------------
app.use('/health/', healthRoutes);
app.use('/api/auth', authRoutes);
// -----------------------------------SSL-------------------------------
const http = require('http');

const server = http;
const options = {}; // Get ssl certs if https true
// -----------------------------------SERVER-------------------------------
server.createServer(options, app).listen(port, () => {
  console.log(`https: ${false}, listening to port ${port}...`);
});
