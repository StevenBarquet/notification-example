// --------------------------------------IMPORTS------------------------------------
// ---Dependencies
import express, { Request, Response } from 'express';
// ---Custom
import { autUser } from 'src/auth/google/resolvers/autUser';

// -----------------------------------CONFIG-------------------------------
const router = express.Router();

// -----------------------------------ROUTES-------------------------------
router.post('/login', async (req: Request, res: Response) => {
  console.log('req.body', req.body);

  const data = await autUser(req);
  res.send({ err: false, data });
});

export const authRoutes = router;
