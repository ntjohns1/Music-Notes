const { QueryTypes } = require('sequelize');
const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;


  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3301
    }
  );

const getUsers =  async () => {
    const [results, metadata] = await sequelize.query("SELECT * FROM user");
    console.log(results);
};

getUsers();

