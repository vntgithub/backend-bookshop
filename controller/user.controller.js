const User = require("../models/user.model");
const md5 = require("md5");
module.exports = {
  create: async (req, res) => {
    const username = req.body.username;
    const password = md5(req.body.password);
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
    const username = req.body.username;
    const password = md5(req.body.password);
    console.log(username, password);
    await User.findOne({username: username}).exec()
    .then((user) => {
      consle.log(user);
      // if(user.length > 0){
      //   res.cookies("session_id", user[0]._id);
      //   res.json({userData: user[0], exist: true});
      // }else{
      //   res.json({userExist: false});
      // }
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
          adress: req.body.adress
    };
    User.findOneAndUpdate(filter, update)
        .then((user) => {
          res.json("updated.")
        })
  }
};
