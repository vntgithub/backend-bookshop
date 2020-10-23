const User = require("../models/user.model");
const Hash = require("password-hash");
module.exports = {
  createUser: async (req, res) => {
    const username = req.body.username;
    const password = Hash.generate(req.body.password);
    const urlimg = req.body.urlimg;
    const adress = req.body.adress;
    const newUser = {
      username: username,
      password: password,
      urlimg: urlimg,
      adress: adress,
    };
    console.log(req.body);
    const user = await User.create(newUser);
    res.json(user);
  },
  login: async (req, res) => {
    const { username, password } = req.body;
    User.find({username: username, password: password})
    .then((user) => {
      if(user.length > 0){
        res.json({userData: user[0], checkUserExist: true});
      }else{
        res.json({checkUserExist: false});
      }
    })
    .catch((err) => {
      res.json(err)
    });
  },
  changeInfo: async (req, res) => {
    const filter = {username: req.body.username};
    const update = {
          password: Hash.generate(req.body.password),
          urlimg: req.body.urlimg,
          adress: req.body.adress
    };
    User.findOneAndUpdate(filter, update)
        .then((user) => {
          res.json("updated.")
        })
  }
};
