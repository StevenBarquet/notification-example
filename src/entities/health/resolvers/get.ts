import { gatherHealthInfo } from '../logic/gatherData';

/** Resuelve y conecta: Info del estatus de la app */
export function getHealthData() {
  const target = gatherHealthInfo();
  return { data: target };
}
