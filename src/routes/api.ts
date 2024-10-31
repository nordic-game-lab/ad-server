/** 
* @license Copyright (c) 2024 Nordic Game Lab LLC
* You may not use this code without the express permission of Nordic Game Lab LLC in writing.
*/
// src/routes/api.ts
import express from 'express';
import 'dotenv/config';
import Ad from '../models/Ad.js';
import Event from '../models/Event.js';
import Advertiser from '../models/Advertiser.js';

const router = express.Router();
const coolApiKey = 'Bearer '+ process.env.API_KEY;

async function isAuth(req: any, res: any, next:any) {
  if (process.env.API_KEY){
    const auth = req.headers["authorization"];
    try{
      if (auth){
        if (auth == coolApiKey) {
          next();
        } else {
          res.status(401).send("Access forbidden, go to https://developers.learnhub.nordicgamelab.org to get started");
        }
      }else{
        res.status(400).send("Missing Authorization, Bearer token not found");
      }
    }catch(e){
      console.log(e);
    }
  }else{
    res.status(500).send("API key not found in environment variables");
  }
}

router.post('/api/adCreate', isAuth, async (req, res) => {
    const { imageURL, link, campaign, advertiserID } = req.body;
    const ad = await Ad.create({ imageURL, link, campaign, advertiserID });
    res.status(201).send(ad.dataValues);
});

router.put('/api/ads/:id', isAuth, async (req, res) => {
    const { id } = req.params;
    const { imageURL, link, campaign, advertiserID } = req.body;
    const ad = await Ad.findByPk(id);
    if (ad) {
        ad.imageURL = imageURL;
        ad.link = link;
        ad.campaign = campaign;
        ad.advertiserID = advertiserID;
        await ad.save();
        res.status(200).send(ad);
    } else {
        res.status(404).send({ message: 'Ad not found' });
    }
});

router.delete('/api/ads/:id', isAuth, async (req, res) => {
    const { id } = req.params;
    const ad = await Ad.findByPk(id);
    if (ad) {
        await ad.destroy();
        res.status(204).send();
    } else {
        res.status(404).send({ message: 'Ad not found' });
    }
});

router.get('/api/ads/analytics/:id', isAuth, async (req, res) => {
  const { id } = req.params;
  const impressions = (await Event.findAndCountAll({where: { ad_id: id, event_type: 'impression' } })).count;
  const clicks = (await Event.findAndCountAll({where: { ad_id: id, event_type: 'click' } })).count;
  console.log(impressions, clicks);
  res.status(200).json({"impressions": impressions, "clicks": clicks});
});

router.get('/api/advertiser/:id', async (req, res) => {
  const { id } = req.params;
  const advertiser = await Advertiser.findByPk(id);
  if (advertiser) {
    res.status(200).send(advertiser.dataValues);
  } else {
    res.status(404).send({ message: 'Advertiser not found' });
  }
})

router.post('/api/advertiser', isAuth, async (req, res) => {
  const { name, description, logo, link } = req.body;
  let advertiser_name = name;
  const advertiser = await Advertiser.create({ advertiser_name, description, logo, link });
  res.status(201).send(advertiser.dataValues);
})

export default router;
