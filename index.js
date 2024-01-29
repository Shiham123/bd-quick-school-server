const app = require("./src/App");
const { mongodbConnection } = require("./src/DatabaseConfig/Db");
const { PortNumber } = require("./src/Secret");

//Server Preview Check
app.listen(PortNumber, async () => {
  console.log(`Server is Running at http://localhost:${PortNumber}`);

  //Mongodb Connections
  await mongodbConnection();
});
