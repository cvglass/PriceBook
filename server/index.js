const express = require('express');
const bodyParser = require('body-parser');
const User = require('../db/models')

const app = new Express();

app.use(bodyParser.JSON());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res, next) => {
  User.findAll({})
  .then(users => res.json(users))
  .catch(next)
})
