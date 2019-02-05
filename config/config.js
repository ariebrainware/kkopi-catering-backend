require('dotenv-extended').load({
  encoding: 'utf8',
  silent: true,
  path: '.env',
  defaults: '.env.defaults',
  schema: '.env.schema',
  errorOnMissing: false,
  errorOnExtra: false,
  assignToProcessEnv: true,
  overrideProcessEnv: false,
})
const { DBHOST, DBUSER, DBPASS, DBNAME, DBDIALECT } = process.env
module.exports = {
  'development': {
    'username': DBUSER,
    'password': DBPASS,
    'database': DBNAME,
    'host': DBHOST,
    'dialect': DBDIALECT,
  },
  'test': {
    'username': 'root',
    'password': null,
    'database': 'database_test',
    'host': '127.0.0.1',
    'dialect': 'mysql',
  },
  'production': {
    'username': 'root',
    'password': null,
    'database': 'database_production',
    'host': '127.0.0.1',
    'dialect': 'mysql',
  },
}
