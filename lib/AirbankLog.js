class AirbankLog{
  logs = [];
  constructor(){

  }
  addTankLog(tank){
    this.logs.push({
      message: "Tank added",
      tanks: [{
        name: tank.name,
        pressure: tank.pressure,
        volume: tank.volume
      }]
    });
  }
  removeTankLog(tank){
    this.logs.push({
      message: "Tank removed",
      tanks: [{
        name: tank.name,
        pressure: tank.pressure,
        volume: tank.volume
      }]
    });
  }
  removeMultipleTankLog(tanks){
    var tanksLog = [];
    for(var i in tanks){
      tanksLog.push({
        name: tanks[i].name,
        pressure: tanks[i].pressure,
        volume: tanks[i].volume,
      });
    }
    this.logs.push({
      message: "Tanks removed",
      tanks: tanksLog
    });
  }
  equalizeLog(tank1, tank2, equalizedPressure){
    this.logs.push({
      message: "Tanks equalized",
      tanks: [{
        name: tank1.name,
        pressure: tank1.pressure,
        volume: tank1.volume
      },
      {
        name: tank2.name,
        pressure: tank2.pressure,
        volume: tank2.volume
      }],
      equalizedPressure: equalizedPressure
    });
  }
  tankDoneLog(tank){
    this.logs.push({
      message: "Tank done",
      tanks: [{
        name: tank.name,
        pressure: tank.pressure,
        volume: tank.volume
      }]
    });
  }
  toString(){
    var str = "";
    for(var i in this.logs){
      str += this.logs[i].message+": ";
      for (var j in this.logs[i].tanks)
        str += this.logs[i].tanks[j].name + "(P"+this.logs[i].tanks[j].pressure+" x V"+this.logs[i].tanks[j].volume+") "
      if (this.logs[i]. equalizedPressure)
        str += "=> "+this.logs[i].equalizedPressure;
      str += "\n";
    }
    return str;
  }
}
module.exports = AirbankLog;
