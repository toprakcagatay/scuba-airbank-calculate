const AdvancedAirbank = require("./AdvancedAirbank.js");
class AdvancedAirbank extends Airbank{
  constructor(){
    super();
  }
  orderTanks(tanks){
    for (var i=0; i<tanks.length-1; i++){
      if (tanks[i].pressure > tanks[i+1].pressure) {
        var sTank = tanks[i];
        tanks[i] = tanks[i+1];
        tanks[i+1] = sTank;
        i=-1;
      }
    }
  }
  fillTanks(){
    //this.orderTanks(this.airbankTanks);
    //this.orderTanks(this.scubaTanks);
    for (var i = this.scubaTanks.length-1; i>=0; i--){
      for (var j in this.airbankTanks){
        if (
          this.scubaTanks[i].pressure < this.airbankTanks[j].pressure &&
          this.scubaTanks[i].pressure < this.desiredMinimumFillPressure)
          this.equalize(this.scubaTanks[i], this.airbankTanks[j]);
      }
      this.log.tankDoneLog(this.scubaTanks[i]);
    }

  }
}
module.exports = AdvancedAirbank;
