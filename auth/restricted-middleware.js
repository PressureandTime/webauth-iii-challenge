const jwt = require('jsonwebtoken');
const secret = require('../config/secrets');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secret.jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ you: 'not a valid token' });
      } else {
        req.decodedToken = decodedToken;
        console.log('decoded token', req.decodedToken);

        next();
      }
    });
  } else {
    res.status(401).json({ you: 'you are not authorized!' });
  }
};
