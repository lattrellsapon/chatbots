'use strict';
var mongoose = require('mongoose');
var PaperInfo = mongoose.model('PaperInfo');

exports.processRequest = function (req, res) 
{
    var level = req.body.result && req.body.result.parameters && req.body.result.parameters.PaperLevel ? req.body.result.parameters.PaperLevel : 'Unknown';
    var points = req.body.result && req.body.result.parameters && req.body.result.parameters.PaperPoints ? req.body.result.parameters.PaperPoints : 'Unknown';

    if (req.body.result.action == "name") 
    {
        getPaperName(req, res);
    }
    else if (req.body.result.action == "code") 
    {
        getPaperCode(req, res)
    }
    else if (req.body.result.action == "papersFromLevel")
    {
        getPapersFromYearLevel(req, res);
    }
    else if (req.body.result.action == "corePapersFromLevel")
    {
        main(req, res, parseFloat(level), 'getCorePapers', 'Core Papers not available.')
    }
    else if (req.body.result.action == "papersFromPoints")
    {
        main(req, res, parseFloat(points), 'getPapersFromPoints', 'No papers are worth that many points')
    }
};

// Connect to database
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://devtest:test@ds117540.mlab.com:17540/autpaperdata";

function main(req, res, search, source, failText)
{
    let itemToSearch = search;

    MongoClient.connect(url, (err, client) => 
    {
        var query = "";

        if (source == 'getCorePapers')
        {
            query = { Level: itemToSearch };
        }
        else if (source == 'getPapersFromPoints')
        {
            query = { Points: itemToSearch };
        }

        if (err) 
        {
            return res.json(
            {
                speech: 'Trouble connecting to the database',
                displayText: 'Trouble connecting to the database',
                source: source
            })
            throw err;
        }

        const db = client.db('autpaperdata');
        var successText = "";

        db.collection('PaperInfo').find(query).toArray((err, itemExists) => 
        {
            if (err) 
            {
                return res.json(
                {
                    speech: 'Database error',
                    displayText: 'Database error',
                    source: source
                })
                throw err;
            }

            if (itemExists && itemExists.length > 0) 
            {
                if (source == 'getCorePapers')
                {
                    successText = getCorePapers(itemExists);
                }
                else if (source == 'getPapersFromPoints')
                {
                    successText = getPapersFromPoints(itemExists);
                }

                console.log("Return Object: " + JSON.stringify(
                {
                    speech: successText,
                    displayText: successText,
                    source: source
                })) 
                return res.json(
                {
                    speech: successText,
                    displayText: successText,
                    source: source
                });
            } 
            else 
            {
                return res.json(
                {
                    speech: failText,
                    displayText: failText,
                    source: source
                })
            }
            client.close();
        })
    })
}

function getCorePapers(levelExists)
{
    var text = "";

    for (var i = 0; i < levelExists.length; i++)
    {
        if (levelExists[i].Core === "TRUE")
        {
            text += (levelExists[i].Code + " " + levelExists[i].Name + " ");
        }
    }

    return text;
}

function getPapersFromPoints(pointsExists)
{
    var text = "";

    for (var i = 0; i < pointsExists.length; i++)
    {
        text += (pointsExists[i].Code + " " + pointsExists[i].Name + " ");
    }

    return text;
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
