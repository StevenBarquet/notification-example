import mongoose from 'mongoose';
import { DB_NAME, DB_URL } from './constants/connectionConstants';

const debugProd = require('debug')('app:prod');

/** Función que genera la conexión con mongodb */
export async function mongoConnect() {
  // Mongo conect to base
  const dbUri = `${DB_URL}/${DB_NAME}`;
  try {
    await mongoose.set('strictQuery', false);
    await mongoose.connect(dbUri);
    debugProd(`Connected to ${dbUri}...`);
  } catch (err) {
    debugProd(`Error conecting to ${dbUri}...`);
    debugProd('Couldnt connect to mongoDB because:\n', err);
  } finally {
    debugProd('mongoDB connection try finished (success or error)...');
  }
}
