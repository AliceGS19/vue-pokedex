/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */
//Referencia: https://dev.to/anjolaogunmefun/deploy-vue-js-projects-to-heroku-1hb5;

const express = require('express');
const path = require('path');
const serveStatic = require('serve-static')
const app = express();
app.use(serveStatic(path.join(__dirname, "dist")));
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`listening on port ${PORT}, ${path.join(__dirname, "dist")} `));
