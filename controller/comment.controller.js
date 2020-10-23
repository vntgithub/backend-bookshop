const Comment = require("../models/comment.model");
const { syncIndexes } = require("../models/comment.model");

module.exports = {
  getCommentByIdProduct: async (req, res) => {
    Comment.find({_idproduct: req.params.id})
      .then((comments) => res.json(comments))
      .catch((err) => res.status(400).json("ErrL " + err));
  },
  
  addComment: async (req, res) => {
    const newCommnet = await Comment.create(req.body);
    res.json("Comment added");
  },

  update: async (req, res) => {
    
    Comment.findByIdAndUpdate(req.body._id)
      .then((Comment) => {
        console.log(Comment);
        Comment._idproduct = req.body._idproduct;
        Comment._iduser = req.body._iduser;
        Comment.content = req.body.content;
        Comment.save();
      })
      .then(() => res.json("updated."))
      .catch((err) => res.status(400).json("Err: " + err));
  },
  delete: async (req, res) => {
    Comment.findByIdAndDelete(req.params.id)
      .then(() => res.json("Comment deleted."))
      .catch((err) => res.status(400).json("Err " + err));
  },
};
