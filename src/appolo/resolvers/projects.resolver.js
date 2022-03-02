const db = require("../../models");
const Statuts = db.statuts;

module.exports = {
    Query: {
        statuts: async(parent, args, context, info) => {

            const {userId} = context;
            const statut = await Statuts.findAll({});
            return statut;

        },
        statut: async(parent, args) => {

            const statut = await Statuts.findAll({
                where: {id:args.id}
            });
            return statut;

        }
       
    //mutations // typer dans schema
        //createProduct
        // updateProduct
        // etc...
    }
}