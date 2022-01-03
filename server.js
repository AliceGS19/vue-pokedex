//Referencia: https://dev.to/anjolaogunmefun/deploy-vue-js-projects-to-heroku-1hb5;

import express from "express";
import serveStatic from "serve-static";
import path from "path";
const app = express();
app.use(serveStatic(path.join(__dirname, "dist")));
const port = process.env.PORT || 3000;
app.listen(port);
