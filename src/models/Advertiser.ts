// src/models/Advertiser.ts
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
