const app = require('./src/App');
const { mongodbConnection } = require('./src/DatabaseConfig/Db');
const { PortNumber } = require('./src/Secret');

//Server Preview Check
app.get('/',async(req,res)=>{
  // console.log("Bd Quic");
  res.send({messAGE:"GATE DATA"})
})

app.listen(PortNumber, async () => {
  console.log(`Server is Running at http://localhost:${PortNumber}`);

  //Mongodb Connections
  await mongodbConnection();
});
