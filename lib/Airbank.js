const Tank = require("./Tank.js");
const AirbankLog = require("./AirbankLog.js");
//abstract
class Airbank {
  airbankTanks = [];
  scubaTanks = [];
  log = null;
  desiredMinimumFillPressure = 200;
  constructor(){
    this.log = new AirbankLog();
  }
  addTank(volume, pressure){
    var tank = new Tank(volume, pressure)
    tank.name = "AirbankTank "+this.airbankTanks.length;
    this.airbankTanks.push(tank);
    this.log.addTankLog(tank);
  }
  connectScubaTank(volume, pressure){
    var tank = new Tank(volume, pressure)
    tank.name = "ScubaTank "+this.scubaTanks.length;
    this.scubaTanks.push(tank);
    this.log.addTankLog(tank);
  }
  disconnectScubaTanks(){
    this.log.removeMultipleTankLog(this.scubaTanks);
    this.scubaTanks = [];
  }
  getLowestPressureStandroTank(){
    var lowestIndex = 0;
    for(var i=1; i<=this.airbankTanks.length-1; i++){
      if (this.airbankTanks[i].pressure < this.airbankTanks[lowestIndex].pressure)
        lowestIndex = i;
    }
    return this.airbankTanks[lowestIndex];
  }
  getHighestPressureStandroTank(){
    var highestIndex = 0;
    for(var i=1; i<=this.airbankTanks.length-1; i++){
      if (this.airbankTanks[i].pressure > this.airbankTanks[highestIndex].pressure)
        highestIndex = i;
    }
    return this.airbankTanks[highestIndex];
  }
  getLowestPressureScubaTank(){
    var lowestIndex = 0;
    for(var i=1; i<=this.scubaTanks.length-1; i++){
      if (this.scubaTanks[i].pressure < this.scubaTanks[lowestIndex].pressure)
        lowestIndex = i;
    }
    return this.scubaTanks[lowestIndex];
  }
  getHighestPressureScubaTank(){
    var highestIndex = 0;
    for(var i=1; i<=this.scubaTanks.length-1; i++){
      if (this.scubaTanks[i].pressure > this.scubaTanks[highestIndex].pressure)
        highestIndex = i;
    }
    return this.scubaTanks[highestIndex];
  }
  equalize(tank1, tank2){
    var totalAmount = tank1.getAmount() + tank2.getAmount();
    var totalVolume = tank1.volume + tank2.volume;
    var eqPressure = totalAmount / totalVolume;
    this.log.equalizeLog(tank1, tank2, eqPressure);
    tank1.pressure = eqPressure;
    tank2.pressure = eqPressure;
  }
  fillTanks(){}
}
module.exports = Airbank;
