import * as commitInfo from 'src/entities/health/config/appVersion';
import { envsData } from 'src/entities/health/config/envsData';

/** Junta y devuelve toda la info relacionada con el status de la app */
export function gatherHealthInfo() {
  return { commitInfo, envsData };
}
