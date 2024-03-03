const fs = require("fs");
const AirbankFactory = require("./lib/AirbankFactory.js");

fs.readFile("./data.json", "utf8", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  main(JSON.parse(data));
});
function main(data){

  var airbank = AirbankFactory.createAirbank("AdvancedAirbank");

  for (var i in data.airbanks){
    airbank.addTank(data.airbanks[i].volume, data.airbanks[i].pressure);
  }

  for (var i in data.fills){
    for (var j in data.fills[i]){
      airbank.connectScubaTank(data.fills[i][j].volume, data.fills[i][j].pressure);
    }
    airbank.fillTanks();
    airbank.disconnectScubaTanks();
  }
  console.log(airbank.log.toString());
}
