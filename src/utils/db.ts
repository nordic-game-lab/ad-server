import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'db/database.sqlite'
});

export default sequelize;
