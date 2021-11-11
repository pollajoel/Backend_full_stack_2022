const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRouter = require("../routes");
const PORT = process.env.PORT || 4000;

const db = require("../models");
      db.sequelize.sync();
// In development, you may need to drop existing tables and re-sync database.
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});



// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use('/api/v1', apiRouter);
module.exports.start = ()=>{
  app.listen(PORT,(err)=>{
      console.warn(`Serveur Listen on port ${PORT}`)
  })

}