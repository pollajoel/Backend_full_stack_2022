
const db = require("../models");
const bcrypt = require('bcrypt');
const User = db.users;



exports.findAll = (req, res)=>{
  User.findAll({}).then(data => {
    res.send(data).status(200);
  }).catch(err=>{
    res.status(500).send({message: err.message || "an error occur"});
  });
}

  
exports.register = (req, res) => {
    if(!req.body){
      res.send({message:"Content can not be empty"}).status(400);
    }
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    const body = req.body;
    const UserData = {...body, password:hashedPassword};
    
    User.create(UserData).then(data=>{
      res.send( data)
    }).catch(err=>{
      res.status(500).send({message:err.message || "an error occur"});
    })
  }


exports.update = (req, res) => {
    const id = req.params.id;
    const newPassword = bcrypt.hashSync(req.body.password, 10);
    const body = { ...req.body, password:newPassword}
    User.update( body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating User with id=" + id,
          error:err.message
        });
      });
  };


exports.findById = (req, res) => {
    const id = req.params.id;
    User.findAll(
      {
        where: {id: id},
      }
    ).then( user =>{
      if(!user){
        return res.status(404).send({
          message: `user not found with id ${req.params.id}`,
        });
      }
      res.send( user).status(200)
  }).catch( err =>{
    res.status(500).send({message: "Error retrieving User with id=" + id})
  });

  }

exports.delete =(req, res) => {
  const id = req.params.id;
    User.destroy({
      where: {id:id}
    })
      .then(count => {
        if( !count )
        { return res.status(404).send({error: 'No user'});}
        else
          res.send({ message: `${count} User were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing User."
        });
      });
  };