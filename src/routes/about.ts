/** 
* @license MPL 2.0
* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at https://mozilla.org/MPL/2.0/.
* 
* Copyright Nordic Game Lab, LLC. and Andrew Ball.
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
