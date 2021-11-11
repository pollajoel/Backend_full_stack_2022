
const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;


exports.findAll = (req, res)=>{

  User.findAll({}).then(data => {
    res.send(data).status(200);
  }).catch(err=>{
    res.status(500).send({message: err.message || "an error occur"});
  });
}
