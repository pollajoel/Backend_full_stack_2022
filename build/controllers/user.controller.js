
const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;


exports.findAll = async(req, res)=>{

  try{
    const data =  await User.findAll({});
    res.send(data);
  }catch(err){
    console.log(err);
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