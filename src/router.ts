// src/router.ts
/** 
* @license MPL 2.0
* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at https://mozilla.org/MPL/2.0/.
* 
* Copyright Nordic Game Lab, LLC. and Andrew Ball.
*/
import express from "express";
// import routes
import adsRouter from './routes/ads.js';
import apiRouter from './routes/api.js';
import aboutRouter from './routes/about.js';

const router = express.Router();

// routes
router.use(adsRouter);
router.use(apiRouter);
router.use(aboutRouter);

export default router;
