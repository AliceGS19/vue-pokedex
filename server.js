/* eslint-disable @typescript-eslint/no-var-requires */


const express = require('express');
const path = require('path');
const serveStatic = require('serve-static')
const app = express();
app.use(serveStatic(path.join(__dirname, "dist")));
const PORT = 8080;
app.listen(PORT, () => console.log(`listening on port ${PORT}, ${path.join(__dirname, "dist")} `));
