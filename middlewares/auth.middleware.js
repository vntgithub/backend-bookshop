const User = require("../models/user.model");
const userController = require("../controller/user.controller");

module.exports =  {
	checkCookie: (req, res, next) => {
		if(!req.cookies.userId){
			res.json({hasCookie: false});
			return;
		}
		
	}	
   
}
