'use strict';
var mongoose = require('mongoose');
var PaperInfo = mongoose.model('PaperInfo');

exports.processRequest = function (req, res)
{
    var level = req.body.result && req.body.result.parameters && req.body.result.parameters.PaperLevel ? req.body.result.parameters.PaperLevel : 'Unknown';
    var points = req.body.result && req.body.result.parameters && req.body.result.parameters.PaperPoints ? req.body.result.parameters.PaperPoints : 'Unknown';
    var name = req.body.result && req.body.result.parameters && req.body.result.parameters.PaperName ? req.body.result.parameters.PaperName : 'Unknown';
    var code = req.body.result && req.body.result.parameters && req.body.result.parameters.PaperCode ? req.body.result.parameters.PaperCode : 'Unknown';

    if (req.body.result.action == "name")
    {
        main(res, code, 'getPaperName', 'No information is currently available for the paper code.')
    }
    else if (req.body.result.action == "code")
    {
        main(res, name, 'getPaperCode', 'That is not currently a paper offered at AUT.')
    }
    else if (req.body.result.action == "papersFromLevel")
    {
        main(res, parseFloat(level), 'getPapersFromYearLevel', 'No papers are available in that level in AUT.')
    }
    else if (req.body.result.action == "corePapersFromLevel")
    {
        main(res, parseFloat(level), 'getCorePapers', 'Core Papers not available.')
    }
    else if (req.body.result.action == "papersFromPoints")
    {
        main(res, parseFloat(points), 'getPapersFromPoints', 'No papers are worth that many points.')
    }
    else if (req.body.result.action == "availabilityFromPapers")
    {
        main(res, name, 'getAvailability', 'Not available at AUT.')
    }
};

// Connect to database
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://devtest:test@ds117540.mlab.com:17540/autpaperdata";

function main(res, search, source, failText)
{
    let itemToSearch = search;

    MongoClient.connect(url, (err, client) =>
    {
        var query = "";

        if (source == 'getCorePapers' || source == 'getPapersFromYearLevel')
        {
            query = { Level: itemToSearch };
        }
        else if (source == 'getPapersFromPoints')
        {
            query = { Points: itemToSearch };
        }
        else if (source == 'getPaperCode' || source == 'getAvailability')
        {
            query = { Name: itemToSearch };
        }
        else if (source == 'getPaperName')
        {
            query = { Code: itemToSearch };
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
                else if (source == 'getPaperCode')
                {
                    successText = getPaperCode(itemExists);
                }
                else if (source == 'getPaperName')
                {
                    successText = getPaperName(itemExists);
                }

                else if (source == 'getPapersFromYearLevel')
                {
                    successText = getPapersFromYearLevel(itemExists);
                }
                else if (source == 'getAvailability')
                {
                    successText = getAvailability(itemExists);
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

function getPaperCode(nameExists)
{
    return "The code for the paper is " + nameExists[0].Code;
}

function getPaperName(codeExists)
{
    return "This paper is called " + codeExists[0].Name;
}

function getPapersFromYearLevel(levelExists)
{
    var text = "";

    for (var i = 0; i < levelExists.length; i++)
    {
        text += levelExists[i].Name + "(" + levelExists[i].Code + ")";

        if(i == levelExists.length -2)
        {
            text += " and "
        }
        else if (i == levelExists.length - 1)
        {
            //leave blank
        }
        else
        {
            text += ", "
        }
    }

    return text;
}
function getAvailability(nameExists)
{
  var text = `${nameExists[0].Name} is available in semester `;

  for (var i = 0; i < nameExists[0].Semester.length; i++)
  {
      if(i == 1)
      {
        text +=  " and "
      }

      text += nameExists[0].Semester[i] ;
  }

  return text;
}
