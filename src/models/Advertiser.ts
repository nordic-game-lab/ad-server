/** 
* @license Copyright (c) 2024 Nordic Game Lab LLC
* You may not use this code without the express permission of Nordic Game Lab LLC in writing.
*/
// src/models/Advertiser.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../utils/db.js';

class Advertiser extends Model {
    public id!: number;  // primary key
    public advertiser_name!: string; 
    public description!: string; 
    public logo!: string;
    public link!: string;
}

Advertiser.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    advertiser_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    logo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    link: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Advertiser'
});

export default Advertiser;
