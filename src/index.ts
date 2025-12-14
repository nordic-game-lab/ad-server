// src/index.ts
/** 
* @license MPL 2.0
* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at https://mozilla.org/MPL/2.0/.
* 
* Copyright Nordic Game Lab, LLC. and Andrew Ball.
*/
import express from 'express';
import router from './router.js';
import sequelize from './utils/db.js';
import cors from "cors";

const app = express();
app.disable('x-powered-by');
app.use(express.json());
app.use(cors());
app.use(router);
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
