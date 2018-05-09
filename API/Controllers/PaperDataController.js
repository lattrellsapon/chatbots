'use strict';
var mongoose = require('mongoose');
var PaperInfo = mongoose.model('PaperInfo');

exports.processRequest = function (req, res) {
    if (req.body.result.action == "name") {
        getPaperName(req, res);
    }
    else if (req.body.result.action == "level") {
        getPaperLevel(req, res)
    }

};
// Connect to database

const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://devtest:test@ds117540.mlab.com:17540/autpaperdata";


function getPaperName(req, res) {
    let codeToSearch = req.body.result && req.body.result.parameters && req.body.result.parameters.paperCode ? req.body.result.parameters.paperCode : 'Unknown';
    MongoClient.connect(url, (err, client) => {

        if (err) throw err;

        const db = client.db('autpaperdata');

        var query = { Paper_Code: codeToSearch };
        db.collection('PaperInfo').find(query).toArray((err, codeExists) => {

            if (err) throw err;
            console.log(codeExists);

            if (codeExists) {

                console.log(codeExists[0].Paper_Name);
                console.log(JSON.stringify(codeExists[0]));
                console.log(JSON.stringify({
                    speech: codeExists[0].Paper_Name,
                    displayText: codeExists[0].Paper_Name,
                    source: 'paper name'
                })) 
                return res.json({
                    speech: codeExists[0].Paper_Name,
                    displayText: codeExists[0].Paper_Name,
                    source: 'paper name'
                });


            }
            client.close();

        })

    })
}
