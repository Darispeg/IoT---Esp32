const mongoose = require("mongoose");

const sensorsSchema = mongoose.Schema({
    name : {
        type : String,
        require: true
    },
    status : {
        type : String,
        require: true
    }
});

module.exports = mongoose.model('sensors', sensorsSchema);