import jwt from 'jsonwebtoken';
const jwTkeys = require("../config/configdata")
const APP_SECRET = jwTkeys.JwtConfig.keys;

function getTokenPayload(token) {
  return jwt.verify(token, APP_SECRET);
}

function getUserId(req, authToken) {
  if (req) {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.replace('JWT ', '');
      if (!token) {
        throw new Error('No token found');
      }
      const { id} = getTokenPayload(token);
      return id;
      
    }
  } else if (authToken) {
    const { id } = getTokenPayload(authToken);
    return id;
  }

  throw new Error('Not authenticated');
}

module.exports = {
  APP_SECRET,
  getUserId
};