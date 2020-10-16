const User = require('../models/user.model');
const Hash = require('password-hash');
module.exports = {
    createUser: async(req, res) => {
        const username = req.body.username;
        const password = Hash.generate(req.body.password);
        const newUser = {username: username, password: password};
        console.log(req.body);
        const user = await User.create(newUser);
	    res.json(user); 
    },
    login: async(req, res) => {
        const { username, password } = req.body;
        const user = await User.find({ username: username, password: Hash.generate(password) });
        if(!user){
            res.json("user not found");
        }
        res.json("Login successfully.");
    },
    changePassword: async(req, res) => {
        
    }
}