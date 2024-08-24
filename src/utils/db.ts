/** 
* @license Copyright (c) 2024 Nordic Game Lab LLC
* You may not use this code without the express permission of Nordic Game Lab LLC in writing.
*/
// src/utils/db.ts
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
});

export default sequelize;
