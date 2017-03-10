const db = require('./index');
const data = require('./data.json')

const seedUsers = () => db.Promise.map(data.user, user => db.model('user').create(user));

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(() => console.log('done'))
  .catch(err => console.log(err))
  .finally(() => db.close())
