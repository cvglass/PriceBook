const Sequelize = require('sequelize');

const db = module.exports = new Sequelize('postgres://localhost:5432/pricebook');

require('./models');

function sync() {
  return db.sync({force:true})
  .then( ok => console.log('synced models to db'))
  .catch(err => console.log(err))
}

db.didSync = sync();
