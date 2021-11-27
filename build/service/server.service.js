const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRouter = require("../routes");
const PORT = process.env.PORT || 4000;
const swaggerUi = require("swagger-ui-express");
const  swaggerDocument = require("../swagger/swaggerDocument.json");
const db = require("../models");
const basicAuth = require('express-basic-auth');
      db.sequelize.sync();
// In development, you may need to drop existing tables and re-sync database.
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

app.use("/api-docs",basicAuth({
  users: {'AttelageUser': '23c33a52-22b8-11ec-9621-0242ac130002'},
  challenge: true,
}), swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use('/api/v1', apiRouter);
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument));
module.exports.start = ()=>{
  app.listen(PORT,(err)=>{
      console.warn(`Serveur Listen on port ${PORT}`)
  })

}