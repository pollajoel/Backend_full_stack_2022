const { AuthenticationError } = require('apollo-server-express');

module.exports = {
    Query: {
        tasks: async(parent, args, context, info) => {

            const {userId} = context;
            const tasks = context.models.task;
            if (!userId) {
                throw new AuthenticationError('You must login to add Statuts');
            }
            return  await tasks.findAll({});
            
        },
        task: async(parent, args, context) => {
            const {userId} = context;
            const tasks = context.models.task;
            if (!userId) {
                throw new AuthenticationError('You must login to add Statuts');
            }
            return  await tasks.findOne({where: {id:args.id}});
        }
    },

    Mutation:{
        createtask: async(parent, args, context) => {
            const task = context.models.task;

            const {userId} = context;
            if (!userId) {
                throw new AuthenticationError('You must login to add Statuts');
            }
            try{
                return  await task.create(args.input);
            }catch(e){
                throw new Error(e)
            }
        },

        updatetask: async(parent, args, context) => {

            const {userId} = context;
            if (!userId) {
                throw new AuthenticationError('You must login to add Statuts');
            }
            const tasksModel = context.models.task;
            try{
                await tasksModel.update( args.input,{where: { id: args.id }});
                return await tasksModel.findOne({where: { id: args.id}})
            }catch(e){
                throw new Error(e)
            }

        },
        
        deletetask: async(parent, args, context) =>{

            const {userId} = context;
            const Tasks = context.models.task;
            if (!userId) {
                throw new AuthenticationError('You must login to add Statuts');
            }
            try{
                return await Tasks.destroy({where: {id: args.id}});
            }catch(e){
                throw new Error(e)
            }

        }

    }





}