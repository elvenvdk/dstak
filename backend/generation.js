const Dragon = require("./dragon");
const { REFRESH_RATE, SECONDS } = require("./config");

const refreshRate = REFRESH_RATE * SECONDS;

class Generation {
  constructor() {
    this.expiration = this.calculateExperation();
  }

  calculateExperation() {
    const experationPeriod = Math.floor(Math.random() * (refreshRate / 2));

    const msUntilExpieration =
      Math.random() < 0.5
        ? refreshRate - experationPeriod
        : refreshRate + experationPeriod;

    this.expiration = new Date(Date.now() + msUntilExpieration);
  }

  newDragon() {
    if (Date.now() > this.expiration) {
      throw new Error(`This generation expired on ${this.expiration}`);
    }
    return new Dragon();
  }
}

module.exports = Generation;
