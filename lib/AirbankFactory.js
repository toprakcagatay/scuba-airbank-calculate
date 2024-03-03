const BasicAirbank = require("./BasicAirbank.js");
const AdvancedAirbank = require("./AdvancedAirbank.js");
class AirbankFactory{
  static createAirbank(type){
    var airbank;
    switch(type) {
      case 'BasicAirbank':
        airbank = new BasicAirbank();
        break;
      case 'AdvancedAirbank':
        airbank = new AdvancedAirbank();
        break;
    }
    return airbank;
  }
}
module.exports = AirbankFactory;
