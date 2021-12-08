const mongoose = require('mongoose');

const User = require('./User');
const Coin = require('./Coin');
const Asset = require('./Asset');
const Keys = require('./Keys');

const mongoURL = 'mongodb+srv://coinserver:3587@testmongo.dasak.mongodb.net/coinServer?retryWrites=true&w=majority';
mongoose.connect(mongoURL);

module.exports = {
    User,
    Coin,
    Asset,
    Keys,
}