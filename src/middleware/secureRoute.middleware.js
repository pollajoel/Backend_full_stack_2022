const config = require("../configs")
const jwt = require("jsonwebtoken")

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

        jwt.verify(token, config.jwt.secret, (err, user) => {
            if (err) {
                return res.status(403).send({
                   auth:false,
                   message: "no authorized" 
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