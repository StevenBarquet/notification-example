import { Request } from 'express';
import { getInfoFromGoogle } from '../logic/getInfoFromGoogle';
import { getInfoFromToken } from '../logic/getInfoFromToken';

/** */
export function autUser(req: Request) {
  if (req.body?.authType === 'jwt') return getInfoFromToken(req.body?.token);
  return getInfoFromGoogle(req.body?.token);
}
