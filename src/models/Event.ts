/** 
* @license Copyright (c) 2024 Nordic Game Lab LLC
* You may not use this code without the express permission of Nordic Game Lab LLC in writing.
*/
// src/models/Event.ts
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