
const db = require("../models");
const Rise = db.rise;
//const Op = db.Sequelize.Op;

exports.findAll = (req, res)=>{

  Rise.findAll({}).then(data => {
    res.send(data).status(200);
  }).catch(err=>{
    res.status(500).send({message: err.message || "an error occur"});
  });
}

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }



  
}



