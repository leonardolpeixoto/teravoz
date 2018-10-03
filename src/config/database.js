import { getConfig } from './index';

let config = getConfig({
  development: {
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: '192.168.4.42',
    dialect: 'mysql',
    define: {
      underscored: true,
      charset: 'utf8',
      timestamps: false,
      freezeTableName: true
    },
  },

  production: {
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: '192.168.4.42',
    dialect: 'mysql',
    define: {
      underscored: true,
      charset: 'utf8',
      timestamps: false,
      freezeTableName: true
    },
  },

  test: {
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: '192.168.4.42',
    dialect: 'mysql',
    logging: false,
    define: {
      underscored: true,
      charset: 'utf8',
      timestamps: false,
      freezeTableName: true
    },
  },
});

export default config();