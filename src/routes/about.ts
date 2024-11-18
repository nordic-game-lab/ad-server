/** 
* @license Copyright (c) 2024 Nordic Game Lab LLC
* You may not use this code without the express permission of Nordic Game Lab LLC in writing.
*/
import express from "express";
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const router = express.Router();
const __dirname = dirname(fileURLToPath(import.meta.url));


router.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

router.get('/embed', (req, res) => {
    res.sendFile(__dirname + '/public/embed.html');
})

export default router;