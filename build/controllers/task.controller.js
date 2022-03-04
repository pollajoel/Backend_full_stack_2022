const db = require("../models");
const TaskvalidationSchema = require("../middleware/validator/task.validator");
const task = db.task;
const project = db.projects;
const statuts = db.statuts;
const user = db.users;

exports.findAll = (req, res) => {
  task.findAll({
    include:[{model:project},{model:statuts}, {model:user}]
  }).then(data => {
    res.send(data).status(200);
  }).catch(err=>{
    res.status(500).send({message: err.message || "an error occur"});
  });
  }

  exports.create = (req, res) => {
    
      const validation = TaskvalidationSchema.validate(req.body)
        if(validation.error){
          return res.status(400).send({error:validation.error})
        }

      const body = req.body;
      const taskdata = {...body};
      task.create(taskdata).then(data=>{
        res.send( data)
      }).catch(err=>{
        res.status(500).send({message:err.message || "an error occur"});
      })
    }
  
    
    exports.update = (req, res) => {
      const id = req.params.id;
      const body = { ...req.body}
      task.update( body, {
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "task was updated successfully."
            });
          } else {
            res.send({
              message: `Cannot update task with id=${id}. Maybe User was not found or req.body is empty!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating task with id=" + id,
            error:err.message
          });
        });
    };
  
    exports.findById = (req, res) => {
      const id = req.params.id;
      task.findAll(
        {
          include:[{model:project}, {model:statuts},{model:user}],
          where: {id: id},
        }
      ).then( taskdata =>{
        if(!taskdata){
          return res.status(404).send({
            message: `task not found with id ${req.params.id}`,
          });
        }
        res.send( taskdata).status(200)
    }).catch( err =>{
      res.status(500).send({message: "Error retrieving taskdata with id=" + id})
    });
  
    }

    exports.delete =(req, res) => {
      const id = req.params.id;
      task.destroy({
          where: {id:id}
        })
          .then(count => {
            if( !count )
            { return res.status(404).send({error: 'No user'});}
            else
              res.send({ message: `${count} task were deleted successfully!` });
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while removing User."
            });
          });
      };