class Tank{
  name = "Tank";
  volume = 15;
  pressure = 1;
  constructor(volume, initialPressure){
    this.volume = volume;
    this.pressure = initialPressure;
  }
  getAmount(){
    return this.pressure * this.volume;
  }
}
module.exports = Tank;
