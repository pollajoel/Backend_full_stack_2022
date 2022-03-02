const db = require("../../models");
const Statuts = db.statuts;

module.exports = {
    Query: {
        statuts: async(parent, args, context, info) => {

            const {userId} = context;
            if (!userId) {
                throw new Error('You are not authenticated!')
              }
            return await Statuts.findAll({});
        },
        statut: async(parent, args, context) => {
            const {userId} = context;
            if (!userId) {
                throw new Error('You are not authenticated!')
              }

            return  await Statuts.findAll({where: {id:args.id}});
        }
    },
    Mutation:{
        createStatut: async(parent, args) => {
            
            try{
                return await Statuts.create({
                    name:args.name,
                    description:args.description
                });
            }catch(e){
                throw new Error(e)
            }
        },

        updateStatut: async(parent, args) => {
           
            try{
                const  userNew = new Statuts( args.input );
                return await Statuts.update(userNew,{where: { id: args.id }});
            }catch(e){
                throw new Error(e)
            }

        }





    }
}