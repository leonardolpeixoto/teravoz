import { getConfig } from './index';

let config = getConfig({
  development: {
    database: 'teravoz',
    username: 'root',
    password: 'root',
    host: 'localhost',
    dialect: 'mysql',
    define: {
      underscored: true,
      charset: 'utf8',
      timestamps: false,
      freezeTableName: true
    },
  },

  production: {
    database: 'teravoz',
    username: 'root',
    password: 'root',
    host: 'localhost',
    dialect: 'mysql',
    define: {
      underscored: true,
      charset: 'utf8',
      timestamps: false,
      freezeTableName: true
    },
  },

  test: {
    database: 'teravoz',
    username: 'root',
    password: 'root',
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
    define: {
      underscored: true,
      charset: 'utf8',
      timestamps: false,
      freezeTableName: true
    },
  },
})
export default config();