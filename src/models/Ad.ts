/** 
* @license Copyright (c) 2024 Nordic Game Lab LLC
* You may not use this code without the express permission of Nordic Game Lab LLC in writing.
*/
// src/models/Ad.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../utils/db.js';

class Ad extends Model {
    public id!: number;
    public imageURL!: string;
    public link!: string;
    public campaign!: string;
    public advertiserID!: string;
}

Ad.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    imageURL: {
        type: DataTypes.STRING,
        allowNull: false
    },
    link: {
        type: DataTypes.STRING,
        allowNull: false
    },
    campaign: {
        type: DataTypes.STRING,
        allowNull: false
    },
    advertiserID: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Ad'
});

export default Ad;
