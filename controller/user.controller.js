const User = require("../models/user.model");
const md5 = require("md5");
module.exports = {
  getUserPerPage: async (req, res) => {
    const page = req.params.page;
    await User.find()
              .skip(page*20)
              .limit(20)
              .exec((err, users) => {
                if(err){
                  res.status(500).json(err);
                  return;
                }
                res.json(users);
              })
  },
  countUsers: async(req, res) => {
    await User.countDocuments({})
              .then(n => res.json(n))
              .catch(err => console.log(err))
  },
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
    console.log(req.body);
    const update = {...req.body}
    delete update['_id'];
    User.findByIdAndUpdate(req.body['_id'], update)
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
  },
  deleteById: async (req, res) => {
    User.findOneAndDelete(req.params.id)
        .then(() => res.json('Deleted!'))
        .catch(err => console.log(err));
  },
  searchByUsername: async (req, res) => {
    User.find(
      {username: { $regex: new RegExp(".*" + req.params.username.toLowerCase() + ".*", "i") }}
      )
        .then(users => res.json(users))
        .catch(err => console.log(err));
  }
};
