
const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;


exports.findAll = (req, res)=>{

  User.findAll({}).then(data => {
    res.send(data).status(200);
  }).catch(err=>{
    res.status(500).send({message: err.message || "an error occur"});
  })
  

}



exports.Create = async(req, res) => {

}


exports.delete = async(req, res) =>{
}



exports.findOne = (req, res) => {
  
};


exports.update = (req, res) => {
  
};


exports.delete = (req, res) => {
  
};

exports.deleteAll = (req, res) => {
  
};