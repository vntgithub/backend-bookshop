const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const refreshTokenSchema = new Schema({
    token: String,
    user_id: mongoose.Types.ObjectId

});

const RefreshToken = mongoose.model("RefreshToken", refreshTokenSchema, "refresh_tokens");

module.exports = RefreshToken;
