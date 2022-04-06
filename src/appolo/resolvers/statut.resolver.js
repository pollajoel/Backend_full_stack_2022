const { AuthenticationError } = require('apollo-server-express');

module.exports = {
    Query: {
        statuts: async(parent, args, context, info) => {

            const {userId} = context;
            const Statuts = context.models.statuts;
            if (!userId) {
                throw new AuthenticationError('You must login to add Statuts');
              }
            return await Statuts.findAll({});
        },
        statut: async(parent, args, context) => {
            const {userId} = context;
            const Statuts = context.models.statuts;
            if (!userId) {
                throw new AuthenticationError('You must login to add Statuts');
            }

            return  await Statuts.findAll({where: {id:args.id}});
        }
    },
    Mutation:{
        createStatut: async(parent, args, context) => {
            const Statuts = context.models.statuts;
            const {userId} = context;
            if (!userId) {
                throw new AuthenticationError('You must login to add Statuts');
            }

            try{
				console.log( args )
                return await Statuts.create({
                    name:args.name,
                    description:args.description,
					color: args.color
                });
            }catch(e){
                throw new Error(e)
            }
        },

        updateStatut: async(parent, args, context) => {

            const {userId} = context;
            if (!userId) {
                throw new AuthenticationError('You must login to add Statuts');
            }
            const Statuts = context.models.statuts;
            try{
                await Statuts.update( args.Statutinput,{where: { id: args.id }});
                return await Statuts.findOne({where: { id: args.id}})
            }catch(e){
                throw new Error(e)
            }

        },
        
        deleteStatut: async(parent, args, context) =>{

            const {userId} = context;
            const Statuts = context.models.statuts;
            if (!userId) {
                throw new AuthenticationError('You must login to add Statuts');
            }
            try{
                return await Statuts.destroy({where: {id: args.id}});
            }catch(e){
                throw new Error(e)
            }

        }

    }
}