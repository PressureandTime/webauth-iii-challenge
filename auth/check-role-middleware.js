module.exports = role => function(req, res, next) {
  if (req.decodedToken.roles && req.decodedToken.roles.includes(role)) {
    next();
  } else {
    res.status(403).json({ you: 'HAVE NO POWER HERE!' });
  }
};
