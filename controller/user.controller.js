const User = require("../models/user.model");
const md5 = require("md5");
module.exports = {
  checkUserExist: async (req, res) => {
    await User.findOne({username: req.body.username})
        .then((user) => {
          if(user){
            res.json({checkUserExist: true});
            return;
          }
          res.json({checkUserExist: false});
        })
  },
  create: async (req, res) => {
    const username = req.body.username;
    const password = md5(req.body.password);
    const urlimg = req.body.urlimg;
    const address = req.body.address;
    const name = req.body.name;
    const phonenumber = req.body.phonenumber;
    const newUser = {
      username: username,
      password: password,
      name: name,
      urlimg: urlimg,
      address: address,
      phonenumber: phonenumber,
    };
    const user = await User.create(newUser);
    res.json(user);
  },
  login: async (req, res) => {
    const username = req.body.username;
    const password = md5(req.body.password);
    await User.findOne({username: username})
    .then((user) => {
      if(user){
        if(user.password === password){
          const userInfo = {
            _id: user._id,
            name: user.name,
            urlimg: user.urlimg,
            address: user.address,
            phonenumber: user.phonenumber
          };
          res.json({login: true, user: userInfo});
        }else{
          res.json({login: false});
        }
      }
    })
    .catch((err) => {
      res.json(err)
    });
  },
  update: async (req, res) => {
    const filter = {username: req.body.username};
    const update = {
          password: md5(req.body.password),
          urlimg: req.body.urlimg,
          address: req.body.address
    };
    User.findOneAndUpdate(filter, update)
        .then((user) => {
          res.json("updated.")
        })
  },
  getById: async (req, res) => {
    const id = req.params.id;
    User.findById(id)
        .then(user => {
          const userInfo = {
            _id: user._id,
            name: user.name,
            urlimg: user.urlimg,
            address: user.address,
            phonenumber: user.phonenumber
          };
          res.json({user: userInfo});
        })
        .catch(err => console.log(err))
  }
};
