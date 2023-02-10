
const { env } = process;

module.exports = new (function () {
  // ------ General App config ------
  this.APP_PORT = 4000;
  this.NODE_ENV = env?.NODE_ENV;
  this.DOMAIN = 'api.forgemytech.com';
  /** Nota: HTTPS en la url probablemente */
  this.CLIENT_URL = 'https://forgemytech.com';
  /** Nota: HTTPS en la url probablemente */
  this.BACK_END_URL = `https://${this.DOMAIN}`;

  // ------ DB config ------
  // this.MONGO_URL = 'mongodb+srv://safetech-admin:Qurs4Mu4kJUqXWmU@safetech-develop.pxg7ch7.mongodb.net/?retryWrites=true&w=majority';
})();
