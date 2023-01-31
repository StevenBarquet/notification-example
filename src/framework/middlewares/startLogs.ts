// ---Config
import { commitMssg } from 'src/entities/health/config/appVersion';
// ---Constants
import { NODE_ENV } from 'src/configs/constants';

/** Logs generados al inicar la app */
export function startLogs(): void {
  console.log(`------------ Service in mode:  ${NODE_ENV}------------\n\n`);
  console.log(`Ultimo commit: ${commitMssg}\n\n`);
}
