const dbConfig = require('../config/db.config.js')

const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose
db.url = dbConfig.url
// db.tutorials = require('./tutorial.model.js')(mongoose)
db.geojson = require('./geojson.model.js')(mongoose)
db.geokota = require('./geokota.model.js')(mongoose)

module.exports = db
