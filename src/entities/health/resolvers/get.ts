import { gatherHealthInfo } from '../logic/gatherData';

/** Resuelve y conecta toda la info del estatus de la app */
export function getHealthData() {
  const target = gatherHealthInfo();
  return { data: target };
}
