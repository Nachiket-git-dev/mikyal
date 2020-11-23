const jwt = require('jsonwebtoken');
module.exports.verifyToken = function (req, res, next){
   console.log("inside the verify")
    // Get auth header value
    
  const bearerHeader = req.headers['authtoken'];
  
  // Check if bearer is undefined
  if(typeof bearerHeader !== 'undefined') {
    // Split at the space
    const bearer = bearerHeader.split(' ');
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    console.log("req.token",req.token);
    // Next middleware
    jwt.verify(bearerHeader, 'secretkey', (err, authData) => {
      if(err) {
        console.log("err",err);
        res.json({
          "Status":"403",
          "error":"Unauthorized User"
        });
      }
    next();
    })
  } else {
    // Forbidden
    res.json({
        "Status":"403",
        "error":"Unauthorized User"
      });
  }


};