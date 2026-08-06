// src/models/Ad.ts
/** 
* @license MPL 2.0
* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at https://mozilla.org/MPL/2.0/.
* 
* Copyright Nordic Game Lab, LLC. and Andrew Ball.
*/
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
