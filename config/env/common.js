const { env } = process;

// Envs generales para prod y dev
module.exports = new (function () {
  // ------ General App config ------
  this.TIME_ZONE = 'America/Monterrey';
  this.NODE_ENV = env?.NODE_ENV;
  // ------ DB config ------
  this.DB_NAME = 'forge-platform';
  this.DB_URL = 'mongodb://127.0.0.1:27017';
})();
