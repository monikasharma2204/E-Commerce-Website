
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337), 
  app: {
    keys: env.array('APP_KEYS'),
  },
  
  //webhooks: {
    // process.env.NODE_TLS_REJECT_UNAUTHORIZED='0' 
  //},  
});
process.env.NODE_TLS_REJECT_UNAUTHORIZED='0';
