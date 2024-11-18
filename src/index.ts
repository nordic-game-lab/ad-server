/** 
* @license Copyright (c) 2024 Nordic Game Lab LLC
* You may not use this code without the express permission of Nordic Game Lab LLC in writing.
*/
// src/index.ts
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
