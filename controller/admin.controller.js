const Admin = require('../models/admin.model');
const md5 = require('md5');

module.exports = {
	checkExist: async(req, res) => {
		const { username, password } = req.body;
		await Admin.findOne({username: username})
				   .then(admin => {
					 	if(admin.length > 0)
					 		res.json({check: true});
					 	else
					 		res.json({check: false});
				 	})
				 	.catch(err => console.log(err));
	},
	add: async(req, res) => {
		await Admin.create({...req.body, password: md5(req.body.password)})
				   .then(() => res.json('Done'))
				   .catch(err => console.log(err));
	},
	update: async(req, res) => {
		const username = req.body.username;
		const newPassword = md5(req.body.password);

		await Admin.findOne({username: username})
				   .then(admin => {
				   		admin.password = newPassword
				   		admin.save();
				   		res.json('Updated');
				   })
				   .catch(err => console.log(err));
	},
	login: async(req, res) => {
		await Admin.findOne({...req.body, password: md5(req.body.password)})
				   .then(admin => {
				   		if(admin){
				   			const adminDataRes = {...admin._doc};
				   			delete adminDataRes.password;
				   			res.json({check: true, adminData: adminDataRes})
				   		}else{
				   			res.json({check: false});
				   		}
				   })
				   .catch(err => console.log(err));
	},
	getByCookie: async(req, res) => {
		await Admin.findById(req.params.cookie)
				   .then(admin => {
				   		if(admin){
				   			const adminDataRes = {...admin._doc};
				   			delete adminDataRes.password;
				   			res.json({check: true, adminData: adminDataRes})
				   		}else{
				   			res.json({check: false});
				   		}
				   })
	}
}