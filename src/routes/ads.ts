// src/routes/ads.ts
/** 
* @license MPL 2.0
* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at https://mozilla.org/MPL/2.0/.
* 
* Copyright Nordic Game Lab, LLC. and Andrew Ball.
*/
import express from "express";
import getLocation from '../utils/maxmind.js';
import { trackAdImpression, trackAdClick } from '../utils/analytics.js';
import sequelize from '../utils/db.js';
import Ad from '../models/Ad.js';

const router = express.Router();

router.get('/ads', async (req: any, res: any) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const siteID = req.query.siteid;
    console.log(`Received request from ${ip}`);
    const location = await getLocation(ip);
    const ad = await Ad.findOne({ order: sequelize.random() });
    if (ad) {
        if (location.country){
        trackAdImpression(ad.dataValues.id, location.country, siteID, ad.dataValues.advertiserID, ad.dataValues.campaign);
        res.status(200).send(ad);
        } else {
            res.status(404).send({ message: 'No ads available in your location' });
        }
    } else {
        res.status(404).send({ message: 'No ads available' });
    }
});

router.get('/ads/click', async (req: any, res: any) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const siteID = req.query.siteid;
    const adID = req.query.adid;
    const urlRedirect = req.query.redirect;
    if (!adID || !urlRedirect || !siteID) {
        return res.status(400).send({ message: 'One or more parameters are missing' });
    }
    const redirectUrl = unescape(urlRedirect);
    console.log(`Received click from ${ip} on ad ${adID} on site ${siteID}`);
    const location = await getLocation(ip);
    const ad = await Ad.findByPk(adID);
    if (ad) {
        if (location.country){
        trackAdClick(adID, location.country, siteID, ad.dataValues.advertiserID, ad.dataValues.campaign);
        res.redirect(redirectUrl);
        } else {
            res.status(404).send({ message: 'No ads available in your location' });
        }
    } else {
        res.status(404).send({ message: 'Ad not found' });
    }
});

router.get('/ads/:id', async (req, res) => {
    const { id } = req.params;
    const ad = await Ad.findByPk(id);
    if (ad) {
        res.status(200).send(ad.dataValues);
    } else {
        res.status(404).send({ message: 'Ad not found' });
    }
});

export default router;
