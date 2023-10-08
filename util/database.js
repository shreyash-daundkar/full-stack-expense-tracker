 const Sequelize = require('sequelize');
 
 module.exports = new Sequelize('expense-tracker', 'root', '9763387137', {dialect : 'mysql', host : 'localhost'});