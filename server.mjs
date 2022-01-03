//Referencia: https://dev.to/anjolaogunmefun/deploy-vue-js-projects-to-heroku-1hb5;

import express from "express";
import path from "path";
const app = express();
app.use(express.static(path.join(__dirname, "dist")));
const port = process.env.PORT;
app.listen(port);
