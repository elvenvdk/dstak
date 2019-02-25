const Dragon = require("./dragon");

const fooey = new Dragon({ birthdate: new Date(), nickname: "fooey" });
const baloo = new Dragon({ birthdate: new Date(), nickname: "baloo" });

const ran = new Dragon({ nickname: "ran", birthdate: new Date() });
const mimar = new Dragon();

setTimeout(() => {
  const simbaron = new Dragon();
  console.log("simbaron", simbaron);
}, 3000);

console.log("fooey", fooey);
console.log("baloo", baloo);
console.log("ran", ran);
console.log("mimar", mimar);
