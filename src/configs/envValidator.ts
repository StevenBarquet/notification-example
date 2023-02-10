import { envsData } from 'src/entities/health/config/envsData';

const debugProd = require('debug')('app:prod');

/** Valida estéticamente que todas las envs que se cargan al proyecto sean validas */
export function envValidator() {
  const envsKeys = Object.keys(envsData);
  envsKeys.forEach((key: string) => {
    if ((envsData as any)[key] === undefined || (envsData as any)[key] === 'undefined') {
      const errMssg = `Error al cargar envs, '${key}' no esta definida`;
      throw new Error(errMssg);
    }
  });
  debugProd(`\n${JSON.stringify(envsData, null, ' ')}\n`);
  debugProd('Envs cargadas correctamente\n');
}
