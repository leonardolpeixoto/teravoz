import Sequelize from 'sequelize';
import config from '../config/database';
import * as fs from 'fs';
import * as path from 'path';

const { Op } = Sequelize;
const operatorsAliases = {
  $eq: Op.eq,
  $ne: Op.ne,
  $gte: Op.gte,
  $gt: Op.gt,
  $lte: Op.lte,
  $lt: Op.lt,
  $not: Op.not,
  $in: Op.in,
  $notIn: Op.notIn,
  $is: Op.is,
  $like: Op.like,
  $notLike: Op.notLike,
  $iLike: Op.iLike,
  $notILike: Op.notILike,
  $regexp: Op.regexp,
  $notRegexp: Op.notRegexp,
  $iRegexp: Op.iRegexp,
  $notIRegexp: Op.notIRegexp,
  $between: Op.between,
  $notBetween: Op.notBetween,
  $overlap: Op.overlap,
  $contains: Op.contains,
  $contained: Op.contained,
  $adjacent: Op.adjacent,
  $strictLeft: Op.strictLeft,
  $strictRight: Op.strictRight,
  $noExtendRight: Op.noExtendRight,
  $noExtendLeft: Op.noExtendLeft,
  $and: Op.and,
  $or: Op.or,
  $any: Op.any,
  $all: Op.all,
  $values: Op.values,
  $col: Op.col,
};

config.operatorsAliases = operatorsAliases;

const sequelize = new Sequelize(config);
const baseFolder = __dirname;
const indexFile = 'index.js';

fs
  .readdirSync(baseFolder)
  .filter(file => (file.indexOf('.') !== 0) && (file !== indexFile) && (file.slice(-3) === '.js'))
  .forEach(file => {
    sequelize['import'](path.join(baseFolder, file));
  });
  
Object.values(sequelize.models).forEach( Model => {
  Model.sync();

  if(Model.associate) {
    Model.associate();
  }
});

export default sequelize;