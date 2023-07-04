//Llamar a dotenv para que carge los valores establecidos en el .env
require("dotenv").config();

//Llavamar a express
const express = require("express");

//Ejecutar la fucnion express
const app = express();

//Establecer puerto
const port = process.env.APP_PORT || 3000;

//Establecemos enlaces a las rutas
const routes = require("./routes/routes");
//const middlewares = require("./middlewares/middleweares");
const taskController = require("./controllers/taskController");

app.use(express.json());
//app.use(middlewares);
app.use("/", routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
