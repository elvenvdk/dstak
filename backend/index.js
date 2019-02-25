const GenerateEngine = require("./genEngine");

const engine = new GenerateEngine();

engine.start();

setTimeout(() => {
  engine.stop();
}, 30000);
