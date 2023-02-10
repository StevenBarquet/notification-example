import { Express } from 'express';
import morgan from 'morgan';
import { NODE_ENV } from 'src/configs/constants/basicConstants';
import { commitMssg } from 'src/entities/health/config/appVersion';

const debugProd = require('debug')('app:prod');

/** Muestra los logs de cada request entrante entre otros dependiendo el NODE_ENV */
export function morganlogger(app: Express) {
  debugProd(`------------ Service in mode:  ${NODE_ENV} ------------\n\n`);
  debugProd(`Ultimo commit: ${commitMssg}\n\n`);
  if (app.get('env') === 'production') {
    app.use(morgan('combined'));
  } else {
    app.use(morgan('dev'));
  }
}
