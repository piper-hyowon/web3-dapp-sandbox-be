import { Configuration, SupportedEnvironment } from './Configuration';

const config: Configuration = {
  // STAGE Environment
  ENV: SupportedEnvironment.local,

  // SERVICE PORT
  PORT: 3000,
  API_VERSION: 'v1',
  HTTP_BODY_SIZE_LIMIT: '1mb',
  HTTP_URL_LIMIT: '1mb',

  // DB
  DB_INFO: {
    host: 'localhost',
    port: 5432,
    max: 50,
    database: 'web3_dapp_sandbox',
    user: 'local',
    password: '1q2w3e',
  },

  // JWT
  JWT_SECRET: 'ZJ7HAmGsN6ag5cPwbAMA',
  JWT_ACCESS_EXPIRES_IN: '1d',
  JWT_REFRESH_EXPIRES_IN: '14d',
};

export default config;
