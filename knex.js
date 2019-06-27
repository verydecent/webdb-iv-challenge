const knex = require('knex');

const knexConfig = require('./knexfile');

module.exports = knex(knexConfig.development);


// Stack overflow rec
// var knexfile = require('../knexfile');
// var knex = require('knex')(environment);
// instead of require('knex')(knexfile[enviornment])

// Done by Cameron R
// const environment = process.env.ENVIRONMENT || 'development';
// const config = require('../knexfile.js')[environment];
// module.exports = require('knex')(config);