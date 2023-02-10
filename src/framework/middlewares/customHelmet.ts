import { Express } from 'express';
import helmet from 'helmet';

/** Cors helmet custom con pequeñas configuraciones que permiten generar el frontend playground de GQL */
export async function customHelmet(app: Express) {
  // // Desactivar para habilitar el playground de gql
  // app.use(helmet.contentSecurityPolicy());
  // app.use(helmet.crossOriginEmbedderPolicy());
  app.use(helmet.crossOriginOpenerPolicy());
  app.use(helmet.crossOriginResourcePolicy());
  app.use(helmet.permittedCrossDomainPolicies());
  app.use(helmet.dnsPrefetchControl());
  app.use(helmet.expectCt());
  app.use(helmet.frameguard());
  app.use(helmet.hidePoweredBy());
  app.use(helmet.hsts());
  app.use(helmet.ieNoOpen());
  app.use(helmet.noSniff());
  app.use(helmet.originAgentCluster());
  app.use(helmet.referrerPolicy());
  app.use(helmet.xssFilter());
}
