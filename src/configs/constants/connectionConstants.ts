import config from 'config';

export const DB_URL = config.get('DB_URL') as string;

export const DB_NAME = config.get('DB_NAME') as string;
