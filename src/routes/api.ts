// src/routes/api.ts
import express from 'express';
import 'dotenv/config';
import Ad from '../models/Ad.js';

const router = express.Router();
const coolApiKey = 'Bearer '+ process.env.API_KEY;

async function isAuth(req: any, res: any, next:any) {
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
  } catch(e){
    console.log(e);
  }
  }

router.post('/api/adCreate', isAuth, async (req, res) => {
    const { imageURL, link, campaign, advertiserID } = req.body;
    const ad = await Ad.create({ imageURL, link, campaign, advertiserID });
    res.status(201).send(ad);
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

export default router;
