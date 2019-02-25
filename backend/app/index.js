const express = require("express");
const GenerateEngine = require("./generation/genEngine");
const dragonRouter = require("./api/dragon");
const generationRouter = require("./api/generation");

const app = express();
const engine = new GenerateEngine();

app.locals.engine = engine;

app.use("/dragon", dragonRouter);
app.use("/generation", generationRouter);

engine.start();

module.exports = app;
