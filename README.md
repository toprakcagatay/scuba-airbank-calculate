# scuba-airbank-calculate

This software calculates the result of filling scuba tanks from air bank.
Also an example of abstract classes and factory pattern in OOP.

## Installation

Download as zip or
```sh
git clone
```
[Node.js](https://nodejs.org/) is required to run.

[NPM](https://www.npmjs.com/) is required if you would like to run on NPM commands.

### run example
```sh
npm run calculate
```
OR

```sh
node calculate.js
```

### to use as lib in your own project!

```js
//Require the factory
const AirbankFactory = require("./lib/AirbankFactory.js");
//Create an airbank instance. BasicAirbank for now.
var airbank = AirbankFactory.createAirbank("BasicAirbank");
//Define tanks of your airbank
airbank.addTank(volume, pressure);
//Define the connected scuba tanks.
airbank.connectScubaTank(volume, pressure);
//Do all the calculation
airbank.fillTanks();
//Disconnect the scuba tanks to connect other ones and fill with the remaining air in the airbank.
airbank.disconnectScubaTanks();
```
### Recommended IDE Setup (Development)

[ATOM](https://github.com/atom/atom) or [Notepad++](https://notepad-plus-plus.org/) or any text editor.
