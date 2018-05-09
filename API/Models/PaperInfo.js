var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PaperInfo = new Schema({
    paperCode:{type:String,required:false},
    paperName:{type:String,required:false},
    core:{type: Boolean, required:false},
    level:{type: Number, required: false}
    });
    module.exports = mongoose.model('PaperInfo', PaperInfo);