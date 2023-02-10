const { env } = process;

module.exports = new (function () {
  // ------ General App config ------
  this.APP_PORT = 4000;
  this.NODE_ENV = env?.NODE_ENV;
  this.DOMAIN = 'localhost';
  this.CLIENT_URL = 'http://localhost:3000';
  this.BACK_END_URL = `http://${this.DOMAIN}:${this.APP_PORT}`;

  // ------ DB config ------
  // this.MONGO_URL = env?.MONGO_URL;
})();