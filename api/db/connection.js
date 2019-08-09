const Sequelize = require('sequelize');
const path = require('path');
/** Config database*/
const con = new Sequelize('shop', 'root', '2225', {
  host: 'localhost',
  dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

/**test connection */
con.authenticate()
  .then(() => console.log('connected'))
  .catch((err) => console.log("ERROR : " + err));

module.exports.con = con;
module.exports.Sequelize = Sequelize;
