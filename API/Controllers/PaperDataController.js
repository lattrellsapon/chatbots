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
    else if (req.body.result.action == "papersFromLevel")
    {
        getPapersFromYearLevel(req, res);
    }
    else if (req.body.result.action == "corePapersFromLevel")
    {
        getCorePapers(req, res);
    }
    else if (req.body.result.action == "papersFromPoints")
    {
        getPapersFromPoints( req, res);
    }
};
// Connect to database

const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://devtest:test@ds117540.mlab.com:17540/autpaperdata";

function getCorePapers(req, res) {
    let levelToSearch = req.body.result && req.body.result.parameters && req.body.result.parameters.PaperLevel ? req.body.result.parameters.PaperLevel : 'Unknown';
    
    MongoClient.connect(url, (err, client) => {
        console.log("Request PaperLevel to search : " + req.body.result.parameters.PaperLevel);
        console.log("PaperLevel to search: " + levelToSearch);

        if (err) {
            return res.json({
                speech: 'Trouble connecting to the database',
                displayText: 'Trouble connecting to the database',
                source: 'getPaperName'
            })
            throw err;
        }
        const db = client.db('autpaperdata');

        var query ={ Level: parseFloat(levelToSearch) };
        db.collection('PaperInfo').find(query).toArray((err, levelExists) => {

            if (err) {
                return res.json({
                    speech: 'Database error',
                    displayText: 'Database error',
                    source: 'getPaperName'
                })
                throw err;
            }
            console.log("levelExists: " + levelExists);

            var text = "";

            if (levelExists && levelExists.length > 0) {

                for (var i = 0; i < levelExists.length; i++)
                {
                    if (levelExists[i].Core === "TRUE")
                    {
                        text += (levelExists[i].Code + " " + levelExists[i].Name + " ");
                    }
                }

                console.log("Return Object: " + JSON.stringify({
                    speech: text,
                    displayText: text,
                    source: 'getCorePapers'
                })) 
                return res.json({
                    speech: text,
                    displayText: text,
                    source: 'getCorePapers'
                });
            } else {
                return res.json({
                    speech: 'Core Papers not available',
                    displayText: 'Core Papers not available ',
                    source: 'getCorePapers'
                })
            }
            client.close();
        })
    })
}

function getPapersFromPoints(req, res) {
    let pointsToSearch = req.body.result && req.body.result.parameters && req.body.result.parameters.PaperPoints ? req.body.result.parameters.PaperPoints : 'Unknown';
    MongoClient.connect(url, (err, client) => {
        console.log("Request PaperPoints to search : " + req.body.result.parameters.PaperPoints);
        console.log("PaperPoints to search: " + pointsToSearch);

        if (err) {
            return res.json({
                speech: 'Trouble connecting to the database',
                displayText: 'Trouble connecting to the database',
                source: 'getPaperPoints'
            })
            throw err;
        }
        const db = client.db('autpaperdata');

        var query ={ Points: parseFloat(pointsToSearch) };
        db.collection('PaperInfo').find(query).toArray((err, pointsExists) => {

            if (err) {
                return res.json({
                    speech: 'Database error',
                    displayText: 'Database error',
                    source: 'getPaperName'
                })
                throw err;
            }
            console.log("pointsExists: " + pointsExists);
            var text = "";

            if (pointsExists && pointsExists.length > 0) {

                for (var i = 0; i < pointsExists.length; i++)
                {
                    text += (pointsExists[i].Code + " " + pointsExists[i].Name + " ");
                }

                console.log("Return Object: " + JSON.stringify({
                    speech: text,
                    displayText: text,
                    source: 'getPaperName'
                })) 
                return res.json({
                    speech: text,
                    displayText: text,
                    source: 'getPaperName'
                });
            } else {
                return res.json({
                    speech: 'No papers are worth that many points',
                    displayText: 'No papers are worth that many points',
                    source: 'getPaperName'
                })
            }
            client.close();
        })
    })
}

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

        var query ={Code: codeToSearch };
        db.collection('PaperInfo').find(query).toArray((err, codeExists) => {

            if (err) {
                return res.json({
                    speech: 'Database error',
                    displayText: 'Database error',
                    source: 'getPaperName'
                })
                throw err;
            }
            console.log("codeExists: " + codeExists[0]);
            if (codeExists && codeExists.length > 0) {

                console.log("Return Object: " + JSON.stringify({
                    speech: codeExists[0].Name,
                    displayText: codeExists[0].Name,
                    source: 'getPaperName'
                }))
                return res.json({
                    speech: "This paper is called "+codeExists[0].Name,
                    displayText: "This paper is called "+codeExists[0].Name,
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
        console.log("Req PaperName to search: " +req.body.result.parameters.PaperName);
        console.log("PaperName to search: "+nameToSearch);

        if (err) {
            return res.json({
                speech: 'Trouble connecting to the database',
                displayText: 'Trouble connecting to the database',
                source: 'getPaperCode'
            })
            throw err;
        }
        const db = client.db('autpaperdata');

        var query = { Name: nameToSearch };
        db.collection('PaperInfo').find(query).toArray((err, nameExists) => {

            if (err) {
                return res.json({
                    speech: 'Database error',
                    displayText: 'Database error',
                    source: 'getPaperCode'
                })
                throw err;
            }
            console.log("nameExists: " + nameExists);
            if (nameExists && nameExists.length > 0) {

                console.log("PaperCode: "+JSON.stringify(nameExists[0].Code));
                console.log("Return Object: "+JSON.stringify({
                    speech: "The code for the paper is "+nameExists[0].Code,
                    displayText: "The code for the paper is "+nameExists[0].Code,
                    source: 'getPaperCode'
                }))
                return res.json({
                    speech: "The code for the paper is "+nameExists[0].Code,
                    displayText: "The code for the paper is "+nameExists[0].Code,
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

function getPapersFromYearLevel (req, res){
    let levelToSearch = req.body.result && req.body.result.parameters && req.body.result.parameters.PaperLevel ? req.body.result.parameters.PaperLevel : 'Unknown';
    MongoClient.connect(url, (err, client) => {
        console.log("Go here . . ." +req.body.result.parameters.PaperLevel);
        console.log("Level to search: "+levelToSearch);


        if (err) {
            return res.json({
                speech: 'Trouble connecting to the database',
                displayText: 'Trouble connecting to the database',
                source: 'getPapersFromYearLevel'
            })
            throw err;
        }

        const db = client.db('autpaperdata');

        var query = { Level:  parseFloat(levelToSearch)};

        db.collection('PaperInfo').find(query).toArray((err, levelExist) => {

            console.log("Go here . . ." +levelExist);

            if (err) {
                return res.json({
                    speech: 'Database error',
                    displayText: 'Database error',
                    source: 'getPapersFromYearLevel'
                })
                throw err;
            }

            if (levelExist.length > 0) {

                var paper = JSON.stringify(levelExist);
                var papers = JSON.parse(paper);

                let speech = "";

                console.log(papers.length);

                for ( var i = 0; i < papers.length; i++)
                {
                    speech += papers[i].Name + "(" + papers[i].Code + ")";

                    if(i == papers.length -2)
                    {
                        speech += " and "
                    } else if (i == papers.length-1)
                    {
                        //leave blank
                    }
                    else
                    {
                        speech += ", "
                    }
                }

                return res.json({

                    speech: " "+speech,
                    displayText: speech,
                    ssource: 'getPapersFromYearLevel'

                })
            } else {
                return res.json({
                    speech: 'That is not currently a paper offered at AUT',
                    displayText: 'That is not currently a paper offered at AUT',
                    source: 'getPapersFromYearLevel'
                })
            }
            client.close();
        })
    })
}
