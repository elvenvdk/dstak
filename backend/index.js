const Generation = require("./generation");

const generation = new Generation();

console.log("generation", generation);

const gooby = generation.newDragon();

console.log("gooby", gooby);

setTimeout(() => {
  const mimarr = generation.newDragon();
  console.log("mimarr", mimarr);
}, 3000);
