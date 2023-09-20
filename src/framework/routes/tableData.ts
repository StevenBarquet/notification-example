// ---Dependencies
import express, { Request, Response } from 'express';
// ---Custom
import { otherSample } from './sampleData';
import { notifyFrontend } from '../socketEvents/notifyFrontend';

// ---------------- CONFIG
const router = express.Router();

let records: unknown[] = [];

// ---------------- MAIN MODULE
router.get('/', (_: Request, res: Response) => {
  res.send({ err: false, records });
});

router.get('/update', (_: Request, res: Response) => {
  if (records.length === 3) records = [];
  else records.push(otherSample.results[records.length]);
  notifyFrontend();
  res.send({ err: false, message: 'Update success!' });
});

export const tableDataRoutes = router;
