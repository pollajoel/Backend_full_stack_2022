const db = require("../models");
const Statuts = db.statuts;
const StatutsvalidationSchema = require("../middleware/validator/statuts.validator");


exports.findAll = (req, res) => {
  Statuts.findAll({}).then(data => {
    res.send(data).status(200);
  }).catch(err=>{
    res.status(500).send({message: err.message || "an error occur"});
  });
  }

  exports.create = (req, res) => {
    
      const validation = StatutsvalidationSchema.validate(req.body)
        if(validation.error){
          return res.status(400).send({error:validation.error})
        }

      const body = req.body;
      const Statutsdata = {...body};
      Statuts.create(Statutsdata).then(data=>{
        res.send( data)
      }).catch(err=>{
        res.status(500).send({message:err.message || "an error occur"});
      })
    }
  
    
    exports.update = (req, res) => {
      const id = req.params.id;
      const body = { ...req.body}
      Statuts.update( body, {
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "Statuts was updated successfully."
            });
          } else {
            res.send({
              message: `Cannot update Statuts with id=${id}. Maybe User was not found or req.body is empty!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating Statuts with id=" + id,
            error:err.message
          });
        });
    };
  
    exports.findById = (req, res) => {
      const id = req.params.id;
      Statuts.findAll(
        {
          where: {id: id},
        }
      ).then( Statuts =>{
        if(!Statuts){
          return res.status(404).send({
            message: `Statuts not found with id ${req.params.id}`,
          });
        }
        res.send( Statuts).status(200)
    }).catch( err =>{
      res.status(500).send({message: "Error retrieving Statuts with id=" + id})
    });
  
    }

    exports.delete =(req, res) => {
      const id = req.params.id;
      Statuts.destroy({
          where: {id:id}
        })
          .then(count => {
            if( !count )
            { return res.status(404).send({error: 'No user'});}
            else
              res.send({ message: `${count} Statuts were deleted successfully!` });
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while removing User."
            });
          });
      };