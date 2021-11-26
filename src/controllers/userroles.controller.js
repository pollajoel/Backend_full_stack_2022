const db = require("../models");
const UserRole = db.userRole;

exports.findAll = (req, res) => {
  UserRole.findAll({}).then(data => {
    res.send(data).status(200);
  }).catch(err=>{
    res.status(500).send({message: err.message || "an error occur"});
  });
  }