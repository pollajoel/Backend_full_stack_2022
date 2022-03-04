
const db = require("../models");
const bcrypt = require('bcrypt');
const User = db.users;
const role = db.userroles;
const jwt = require("jsonwebtoken");
const jwTkeys = require("../config/configdata")
const UservalidationSchema = require("../middleware/validator/user.validator")



exports.findAll = (req, res)=>{
  User.findAll({include:[{model:role}]}).then(data => {
    res.send(data).status(200);
  }).catch(err=>{
    res.status(500).send({message: err.message || "an error occur"});
  });
}

  
exports.register = (req, res) => {
  
  const validation = UservalidationSchema.validate(req.body)
  if(validation.error){
    return res.status(400).send({error:validation.error})
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
    User.findAll({
      include:[{model:role}],
      where: {id: id}
    }).then( user =>{
      if(!user){
        return res.status(404).send({
          message: `user not found`,
          connect: false
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



  exports.authentification = ( req, res ) => {
    const body = req.body;
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    const data = {...body, password:hashedPassword};
    User.findOne({
      where :{email: data.email}
    }).then(user => {

    
      const userdata = JSON.stringify( user)
      if( !userdata )
      { return res.status(404).send({error: 'No user Found..',
      login: false});}
      else{
        const decodJson = JSON.parse( userdata)
        const userToken = jwt.sign({
          id: decodJson.id,
          is_admin: decodJson.is_admin
         },jwTkeys.JwtConfig.keys,{expiresIn:86400});
         return res.send({jwtWebToken:userToken});
      }
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred during User Logging..."
      });
    });
}