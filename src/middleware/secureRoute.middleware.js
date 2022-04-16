const jwt = require("jsonwebtoken")
const jwTkeys = require("../config/configdata")

exports.authenticateJWT = (req, res, next) => {

    if (req.headers.authorization) {
        const token =req.headers.authorization;
        if(!token)
		{
			 res.status(401).send({
				auth:false,
				message:"missing token, please login"
			})
		}

        jwt.verify(token, jwTkeys.JwtConfig.keys, (err, user) => {
            if (err) {
                return res.status(403).send({
                   auth:false,
                   message: "not authorized" 
                });
            }
            req.user = user;
            next();//j'enchaine sur mon contrôlleur
        });
		
    } else {
        res.status(401).send({
            auth:false,
            message:"missing token, please login"
        })
    }
};