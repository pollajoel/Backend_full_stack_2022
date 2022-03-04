const db = require("../models");
const ProjectvalidationSchema = require("../middleware/validator/project.validator");
const project = db.projects;
const User = db.users;
const statuts = db.statuts;

exports.findAll = (req, res) => {
  project.findAll({
    include:[{model:User},{model:statuts}]
  }).then(data => {
    res.send(data).status(200);
  }).catch(err=>{
    res.status(500).send({message: err.message || "an error occur"});
  });
  }

  exports.create = (req, res) => {
    
      const validation = ProjectvalidationSchema.validate(req.body)
        if(validation.error){
          return res.status(400).send({error:validation.error})
        }
      const body = req.body;
      const projectdata = {...body};
      project.create(projectdata).then(data=>{
        res.send( data)
      }).catch(err=>{
        res.status(500).send({message:err.message || "an error occur"});
      })
    }
  
    
    exports.update = (req, res) => {
      const id = req.params.id;
      const body = { ...req.body}
      project.update( body, {
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "project was updated successfully."
            });
          } else {
            res.send({
              message: `Cannot update project with id=${id}. Maybe User was not found or req.body is empty!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating project with id=" + id,
            error:err.message
          });
        });
    };
  
    exports.findById = (req, res) => {
      const id = req.params.id;
      project.findAll({
        include:[{model:User},{model:statuts}],
        where: {id: id}
      }).then( projectdata =>{
        if(!projectdata){
          return res.status(404).send({
            message: `project not found with id ${req.params.id}`,
          });
        }
        res.send( projectdata).status(200)
    }).catch( err =>{
      res.status(500).send({message: "Error retrieving projectdata with id=" + id})
    });
  
    }

    exports.delete =(req, res) => {
      const id = req.params.id;
      project.destroy({
          where: {id:id}
        })
          .then(count => {
            if( !count )
            { return res.status(404).send({error: 'No user'});}
            else
              res.send({ message: `${count} project were deleted successfully!` });
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while removing User."
            });
          });
      };