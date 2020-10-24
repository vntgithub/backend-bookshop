const User = require("../models/user.model");

module.exports =  {
	checkCookie: (req, res, next) => {
		console.log("middleware run");
		next();
	}	
   
}
