const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const detentionlistSchema = new Schema({
    // username: {type: String, required: true},
    date: {type: String,required: true},
    description: {type: String, required: true},
    link: {type: String, required: true},
    
});

const Detentionlist = mongoose.model('FafatDetentionlist', detentionlistSchema);

module.exports = Detentionlist;