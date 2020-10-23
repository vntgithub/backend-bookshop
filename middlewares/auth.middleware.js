// const User = require("../models/user.model");

// module.exports =  {
// 	checkUserExist: async(req, res, next) => {
// 	const checkUser = [];
// 	User.find({username: req.body.username})
//     .then(user => checkUser = [...user])
//     .catch(err => console.log(err));
//     if(checkUser.length){
//     	res.json("user exist!");
//     	return;
//     }
//     next();
// 	}
// }
