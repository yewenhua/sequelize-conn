/*
 * 当sql server服务端版本比较低时(生产中是sql server 2005和sql server 2008)，mssql的版本高点无所谓，
 * 但是tedious的版本不能太高，5.0.0及以下都是可以的，6.0.0版本就会报SequelizeConnectionError:
 * Failed to connect to xxx - Cannot call write after a stream was destroyed
 */

const {
    Sequelize
} = require('sequelize');

const sequelize = new Sequelize('WEIGHT60', 'sa', '1!deshine', {
    host: 'localhost',
    dialect: 'mssql',
    logging: false,
    // options: {
    //     encrypt: false
    // }
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('000000000000000000000.');
        console.log('Connection has been established successfully');
    } catch (error) {
        console.error('2222222222222222222:', error);
    }
})();
