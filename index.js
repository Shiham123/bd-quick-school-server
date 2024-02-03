const app = require("./src/App");
const { mongodbConnection } = require("./src/DatabaseConfig/Db");
const { PortNumber } = require("./src/Secret");

//Server Preview Check
app.get("/", async (req, res) => {
  res.status(200).send({ message: "bd school server working good" });
});

app.listen(PortNumber, async () => {
  console.log(`Server is Running at http://localhost:${PortNumber}`);
  await mongodbConnection();
});
