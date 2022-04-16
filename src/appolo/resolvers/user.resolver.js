const { AuthenticationError } = require('apollo-server-express');
const bcrypt = require('bcrypt');
const jwTkeys = require("../../config/configdata");
const APP_SECRET = jwTkeys.JwtConfig.keys;
const jwt = require("jsonwebtoken");

module.exports = {
    Query: {

        users: async(parent, args, context, info) => {

            const {userId} = context;
            const User = context.models.users;
            if (!userId) {
                throw new AuthenticationError('You must login');
              }
            return await User.findAll(
                {include:[{model:context.models.userroles}]}
            );
        },

        user: async(parent, args, context) => {
            const {userId} = context;
            const User = context.models.users;
            if (!userId) {
                throw new AuthenticationError('You must login');
            }
                return  await User.findOne({
                    where: {id:args.id},
                    include:[{model: context.models.userroles}]
                });
        },
		getMe: async(parent, args, context) => {
			 const {userId} = context;
			 const User = context.models.users;
			  if (!userId) {
                throw new AuthenticationError('You must login');
              }
			  return  await User.findOne({
                    where: {id:userId},
                    include:[{model: context.models.userroles}]
                });
			  
		}
    },
    Mutation:{
        createUser: async(parent, args, context) => {
            const User = context.models.users;

            const {userId} = context;
            //if (!userId) {
            //    throw new AuthenticationError('You must login');
            //}

            try{

                return  await User.create(args.registuser);

            }catch(e){
                throw new Error(e)
            }
        },

        updateUser: async(parent, args, context) => {

            const {userId} = context;
            if (!userId) {
                throw new AuthenticationError('You must login');
            }
            const User = context.models.users;
            try{
                await User.update( args.updtateUserinput,{where: { id: args.id }});
                return await User.findOne({where: { id: args.id}})
            }catch(e){
                throw new Error(e)
            }

        },
        
        deleteUser: async(parent, args, context) =>{

            const {userId} = context;
            const User = context.models.users;
            if (!userId) {
                throw new AuthenticationError('You must login');
            }
            try{
                return await User.destroy({where: {id: args.id}});
            }catch(e){
                throw new Error(e)
            }

        },
        authentification: async(_, {email, password}, context) => {
           
            const userModel = context.models.users;
            const user = await userModel.findOne({where :{email:email}})
            if( !user )
                throw new Error('No user with that email');
            const hashedPassword = bcrypt.hashSync( password, 10);
            const isValid = bcrypt.compareSync(password, hashedPassword);
            if( !isValid)
                throw new Error('Wrong Password');
                
            const token = jwt.sign({
                id: user.id,
                is_admin: user.is_admin
                   },APP_SECRET,{expiresIn:86400});
            
            return {token, user}
        }

    }
}