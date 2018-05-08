'use strict';
var mongoose = require('mongoose');
var PaperInfo = mongoose.model('PaperInfo');

exports.processRequest = function(req, res) {
    if (req.body.result.action == "name") {
        getPaperName(req,res)
    }
    else if (req.body.result.action == "level")
    {
        getPaperLevel(req,res)
    }
};

function getPaperName(req,res)
{
let codeToSearch = req.body.result && req.body.result.parameters && req.body.result.parameters.paperCode ? req.body.result.parameters.paperCode : 'Unknown';
PaperInfo.findOne({name:codeToSearch},function(err,codeExists)
      {
        if (err)
        {
          return res.json({
              speech: 'Something went wrong!',
              displayText: 'Something went wrong!',
              source: 'paper name'
          });
        }
        console.log(codeExists);
if (codeExists)
        {
          return res.json({
                speech: teamExists.description,
                displayText: teamExists.description,
                source: 'paper name'
            });
        }
        else {
          return res.json({
                speech: 'Currently I am not having information about this paper',
                displayText: 'Currently I am not having information about this paper',
                source: 'paper name'
            });
        }
      });
}

