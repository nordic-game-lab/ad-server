// src/router.ts
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
