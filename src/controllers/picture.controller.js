
const db = require("../models");
const picture = db.picture;
//const Op = db.Sequelize.Op;

exports.findAll = (req, res)=>{
  picture.findAll({}).then(data => {
    res.send(data).status(200);
  }).catch(err=>{
    res.status(500).send({message: err.message || "an error occur"});
  });
}




