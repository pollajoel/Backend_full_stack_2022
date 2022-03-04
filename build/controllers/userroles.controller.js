const db = require("../models");
const UserRole = db.userroles;
const UserrolevalidationSchema = require("../middleware/validator/userrole.validator")

exports.findAll = (req, res) => {
  UserRole.findAll({}).then(data => {
    res.send(data).status(200);
  }).catch(err=>{
    res.status(500).send({message: err.message || "an error occur"});
  });
  }

  exports.create = (req, res) => {
      const validation = UserrolevalidationSchema.validate(req.body)
        if(validation.error){
          return res.status(400).send({error:validation.error})
        }
        
      const body = req.body;
      const UserRoledata = {...body};
      UserRole.create(UserRoledata).then(data=>{
        res.send( data)
      }).catch(err=>{
        res.status(500).send({message:err.message || "an error occur"});
      })
    }
  
    
    exports.update = (req, res) => {
      const id = req.params.id;
      const body = { ...req.body}
      UserRole.update( body, {
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "Role was updated successfully."
            });
          } else {
            res.send({
              message: `Cannot update Role with id=${id}. Maybe User was not found or req.body is empty!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating Role with id=" + id,
            error:err.message
          });
        });
    };
  
    exports.findById = (req, res) => {
      const id = req.params.id;
      UserRole.findAll(
        {
          where: {id: id},
        }
      ).then( userrole =>{
        if(!userrole){
          return res.status(404).send({
            message: `role not found with id ${req.params.id}`,
          });
        }
        res.send( userrole).status(200)
    }).catch( err =>{
      res.status(500).send({message: "Error retrieving role with id=" + id})
    });
  
    }

    exports.delete =(req, res) => {
      const id = req.params.id;
      UserRole.destroy({
          where: {id:id}
        })
          .then(count => {
            if( !count )
            { return res.status(404).send({error: 'No user'});}
            else
              res.send({ message: `${count} role were deleted successfully!` });
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while removing User."
            });
          });
      };