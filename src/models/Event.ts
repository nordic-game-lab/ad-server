// src/models/Event.ts
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

class Event extends Model {
    public id!: number;  // primary key
    public ad_id!: number;
    public location!: string; 
    public site_id!: string; 
    public advertiser_id!: string; 
    public campaign!: string; 
    public event_type!: string;
}

Event.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    ad_id: {
        type: DataTypes.INTEGER,
        autoIncrement: false,
        primaryKey: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    site_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    campaign: {
        type: DataTypes.STRING,
        allowNull: false
    },
    advertiser_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    event_type: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Event'
});

export default Event;
