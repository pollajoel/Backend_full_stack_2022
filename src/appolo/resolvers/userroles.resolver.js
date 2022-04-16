const { AuthenticationError } = require('apollo-server-express');

module.exports = {
    Query: {

        userroles: async(parent, args, context, info) => {

            const {userId} = context;
            const Userroles = context.models.userroles;
            if (!userId) {
                throw new AuthenticationError('You must login to add Statuts');
              }
            return await Userroles.findAll({});
        },

        userrole: async(parent, args, context) => {
            const {userId} = context;
            const Userroles = context.models.userroles;
            if (!userId) {
                throw new AuthenticationError('You must login to add Statuts');
            }

            return  await Userroles.findOne({where: {id:args.id}});
        }
    },
    Mutation:{
        createUserrole: async(parent, args, context) => {
            const Userroles = context.models.userroles;

            const {userId} = context;
            if (!userId) {
                throw new AuthenticationError('You must login to add Statuts');
            }

            try{

                return  await Userroles.create({
                    name:args.name
                });

            }catch(e){
                throw new Error(e)
            }
        },

        updateUserrole: async(parent, args, context) => {

            const {userId} = context;
            if (!userId) {
                throw new AuthenticationError('You must login to add Statuts');
            }
            const Userroles = context.models.userroles;
            try{
                await Userroles.update( args.Userroleinput,{where: { id: args.id }});
                return await Userroles.findOne({where: { id: args.id}})
            }catch(e){
                throw new Error(e)
            }

        },
        
        deleteUserrole: async(parent, args, context) =>{

            const {userId} = context;
            const Userroles = context.models.userroles;
            if (!userId) {
                throw new AuthenticationError('You must login to add Statuts');
            }
            try{
                return await Userroles.destroy({where: {id: args.id}});
            }catch(e){
                throw new Error(e)
            }

        }

    }
}