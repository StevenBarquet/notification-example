// ---Dependencies
import express, { Request, Response } from 'express';
// ---Custom
import { getHealthData } from 'src/entities/health/resolvers/get';

// ---------------- CONFIG
const router = express.Router();

// ---------------- MAIN MODULE
router.get('/', (_: Request, res: Response) => {
  const { data } = getHealthData();
  res.send({ err: false, data });
});

export const healthRoutes = router;
