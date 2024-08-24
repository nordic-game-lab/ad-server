/** 
* @license Copyright (c) 2024 Nordic Game Lab LLC
* You may not use this code without the express permission of Nordic Game Lab LLC in writing.
*/
// src/router.ts
import express from "express";
// import routes
import adsRouter from './routes/ads.js';
import apiRouter from './routes/api.js';

const router = express.Router();

// routes
router.use(adsRouter);
router.use(apiRouter);

export default router;