
const db = require("../models");
const rise = db.rise;
const Op = db.Sequelize.Op;


exports.findAll = async(req, res)=>{

  try{
    const data =  await rise.findAll({});
    res.send(data);
  }catch(err){
    res.status(500).send({
      message:
      err.message || "Some error occurred while retrieving tutorials."
    })
  }

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