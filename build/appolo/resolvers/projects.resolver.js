const { AuthenticationError } = require('apollo-server-express');


module.exports = {
    Query: {
        projects: async(parent, args, context, info) => {

            const {userId} = context;
            const projects = context.models.projects;
            if (!userId) {
                throw new AuthenticationError('You must login to add Statuts');
            }
            return  await projects.findAll({
                    include:[{model: context.models.users},
                    {model:context.models.statuts}]
            });
            
        },
        project: async(parent, args, context) => {
            const {userId} = context;
            const projects = context.models.projects;
            if (!userId) {
                throw new AuthenticationError('You must login to add Statuts');
            }
            return  await projects.findOne(
                {
                    where: {id:args.id},
                    include:
                    [
                        {model: context.models.users},
                        {model:context.models.statuts}
                    ]
                });
        }
    },

    Mutation:{
        createproject: async(parent, args, context) => {
            const projects = context.models.projects;

            const {userId} = context;
            if (!userId) {
                throw new AuthenticationError('You must login to add Statuts');
            }
            try{
                return  await projects.create(args.input);
            }catch(e){
                throw new Error(e)
            }
        },

        updateproject: async(parent, args, context) => {

            const {userId} = context;
            if (!userId) {
                throw new AuthenticationError('You must login to add Statuts');
            }
            const projects = context.models.projects;
            try{
                await projects.update( args.input,{where: { id: args.id }});
                return await projects.findOne({where: { id: args.id}})
            }catch(e){
                throw new Error(e)
            }

        },
        
        deleteproject: async(parent, args, context) =>{

            const {userId} = context;
            const projects = context.models.projects;
            if (!userId) {
                throw new AuthenticationError('You must login to add Statuts');
            }
            try{
                return await projects.destroy({where: {id: args.id}});
            }catch(e){
                throw new Error(e)
            }

        }

    }





}