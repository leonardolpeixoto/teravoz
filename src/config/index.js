import { prop } from 'ramda';
import dotenv from 'dotenv';

dotenv.config();

export const getEnv = env => {
  return env || process.env.NODE_ENV || 'development';
}

export const getConfig = config => env => prop(getEnv(env), config);