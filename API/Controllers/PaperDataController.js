'use strict';
var mongoose = require('mongoose');
var PaperInfo = mongoose.model('PaperInfo');

exports.processRequest = function (req, res) {
    if (req.body.result.action == "name") {
        getPaperName(req, res);
    }
    else if (req.body.result.action == "code") {
        getPaperCode(req, res)
    }

};
// Connect to database

const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://devtest:test@ds117540.mlab.com:17540/autpaperdata";

function getPaperName(req, res) {
    let codeToSearch = req.body.result && req.body.result.parameters && req.body.result.parameters.PaperCode ? req.body.result.parameters.PaperCode : 'Unknown';
    MongoClient.connect(url, (err, client) => {
        console.log("Request PaperCode to search : " + req.body.result.parameters.PaperCode);
        console.log("PaperCode to search: " + codeToSearch);

        if (err) {
            return res.json({
                speech: 'Trouble connecting to the database',
                displayText: 'Trouble connecting to the database',
                source: 'getPaperName'
            })
            throw err;
        }
        const db = client.db('autpaperdata');

        var query ={ Paper_Code: codeToSearch };
        db.collection('PaperInfo').find(query).toArray((err, codeExists) => {

            if (err) {
                return res.json({
                    speech: 'Database error',
                    displayText: 'Database error',
                    source: 'getPaperName'
                })
                throw err;
            }
            console.log("codeExists: " + codeExists);
            if (codeExists && codeExists.length > 0) {

                console.log("Return Object: " + JSON.stringify({
                    speech: codeExists[0].Paper_Name,
                    displayText: codeExists[0].Paper_Name,
                    source: 'getPaperName'
                })) 
                return res.json({
                    speech: "This paper is called "+codeExists[0].Paper_Name,
                    displayText: "This paper is called "+codeExists[0].Paper_Name,
                    source: 'getPaperName'
                });
            } else {
                return res.json({
                    speech: 'No information is currently available for the paper code',
                    displayText: 'No information is currently available for the paper code',
                    source: 'getPaperName'
                })
            }
            client.close();
        })
    })
}

function getPaperCode(req, res) {
    let nameToSearch = req.body.result && req.body.result.parameters && req.body.result.parameters.PaperName ? req.body.result.parameters.PaperName : 'Unknown';
    MongoClient.connect(url, (err, client) => {
        console.log(req.body.result.parameters.PaperName);
        console.log(nameToSearch);

        if (err) {
            return res.json({
                speech: 'Trouble connecting to the database',
                displayText: 'Trouble connecting to the database',
                source: 'getPaperCode'
            })
            throw err;
        }
        const db = client.db('autpaperdata');

        var query = { Paper_Name: nameToSearch };
        db.collection('PaperInfo').find(query).toArray((err, nameExists) => {

            if (err) {
                return res.json({
                    speech: 'Database error',
                    displayText: 'Database error',
                    source: 'getPaperCode'
                })
                throw err;
            }
            console.log(nameExists);
            if (nameExists && nameExists.length > 0) {

                console.log(nameExists[0].Paper_Code);
                console.log(JSON.stringify(nameExists[0]));
                console.log(JSON.stringify({
                    speech: nameExists[0].Paper_Code,
                    displayText: nameExists[0].Paper_Code,
                    source: 'getPaperCode'
                })) 
                return res.json({
                    speech: "The code for the paper is "+nameExists[0].Paper_Code,
                    displayText: "The code for the paper is "+nameExists[0].Paper_Code,
                    source: 'getPaperCode'
                });
            } else {
                return res.json({
                    speech: 'That is not currently a paper offered at AUT',
                    displayText: 'That is not currently a paper offered at AUT',
                    source: 'getPaperCode'
                })
            }
            client.close();
        })
    })
}
