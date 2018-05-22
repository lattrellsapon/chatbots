exports.processRequest = function (req,res) {
    var level = req.body.result && req.body.result.parameters && req.body.result.parameters.PaperLevel ? req.body.result.parameters.PaperLevel : 'Unknown';
    var points = req.body.result && req.body.result.parameters && req.body.result.parameters.PaperPoints ? req.body.result.parameters.PaperPoints : 'Unknown';
    var name = req.body.result && req.body.result.parameters && req.body.result.parameters.PaperName ? req.body.result.parameters.PaperName : 'Unknown';
    var code = req.body.result && req.body.result.parameters && req.body.result.parameters.PaperCode ? req.body.result.parameters.PaperCode : 'Unknown';
    var param = JSON.stringify(req.body.result.parameters);

    switch(req.body.result.action) 
    {
        case 'name':
            main(res, code, 'getPaperName', 'No information is currently available for the paper code.')
            break;
        case 'code':
            main(res, name, 'getPaperCode', 'That is not currently a paper offered at AUT.')
            break;
        case 'papersFromLevel':
            main(res, parseFloat(level), 'getPapersFromYearLevel', 'No papers are available in that level in AUT.')
            break;
        case 'corePapersFromLevel':
            main(res, parseFloat(level), 'getCorePapers', 'Core Papers not available.')
            break;
        case 'papersFromPoints':
            main(res, parseFloat(points), 'getPapersFromPoints', 'No papers are worth that many points.')
            break;
        case 'availabilityFromPapers':
            if(param.search('\"PaperCode\":\"\"') != -1 )
            {
                main(res, name, 'getAvailability', 'Not available at AUT.')
            }
            else
            {
                main(res, code, 'getAvailabilityFromCode', 'Not available at AUT.')
            }
            
            break;
        case 'descFromPaper':
            if(param.search('\"PaperCode\":\"\"') != -1 )
            {
                main(res, name, 'getDescription', 'This paper is not available.')
            }
            else
            {
                main(res, code, 'getDescriptionFromCode', 'This paper is not available.')
            }
            
            break;
        default:
            console.log("Function assign failed")
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

        switch(source) 
        {
            case 'getCorePapers':
                query = { Core: "TRUE", Level: itemToSearch };
                break;
            case 'getPapersFromYearLevel':
                query = { Level: itemToSearch};
                break;
            case 'getPapersFromPoints':
                query = { Points: itemToSearch};
                break;
            case 'getPaperCode':
                query = { Name: itemToSearch };
                break;
            case 'getPaperName':
                query = { Code: itemToSearch };
                break;
            case 'getAvailability':
                query = { Name: itemToSearch };
                break;
            case 'getAvailabilityFromCode':
                query = { Code: itemToSearch };
                break;
            case 'getDescription':
                query = { Name : itemToSearch };
                break;
            case 'getDescriptionFromCode':
                query = { Code : itemToSearch };
                break;
            default:
                console.log("Query assign failed.");
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
              switch(source) 
              {
                case 'getCorePapers':
                  successText = getCorePapers(itemExists);
                  break;
                case 'getPapersFromYearLevel':
                  successText = getPapersFromYearLevel(itemExists);
                  break;
                case 'getPapersFromPoints':
                  successText = getPapersFromPoints(itemExists);
                  break;
                case 'getPaperCode':
                  successText = getPaperCode(itemExists);
                  break;
                case 'getPaperName':
                  successText = getPaperName(itemExists);
                  break;
                case 'getAvailability':
                    successText  = getAvailability(itemExists);
                    break;
                case 'getAvailabilityFromCode':
                    successText  = getAvailability(itemExists);
                    break;
                case 'getDescription':
                    successText = getDescription(itemExists);
                    break;
                case 'getDescriptionFromCode':
                    successText = getDescription(itemExists);
                    break;
                default:
                  console.log("successText assign failed.");
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
        text += levelExists[i].Name + "(" + levelExists[i].Code + ") "
        + levelExists[i].Points + " points";

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

function getPapersFromPoints(pointsExists)
{
    return getPapersFromYearLevel(pointsExists);
}

function getPaperCode(nameExists)
{
    return `${nameExists[0].Code}: ${nameExists[0].Name} is a Level ${nameExists[0].Level} ` +
    `paper worth ${nameExists[0].Points} points`;
}

function getPaperName(codeExists)
{
    return `${codeExists[0].Code} is a Level ${codeExists[0].Level} paper called ` +
    `${codeExists[0].Name} worth ${codeExists[0].Points} points`;
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
function getAvailability(paperExists)
{
    console.log(paperExists[0].Name);

  var text = `${paperExists[0].Name}(${paperExists[0].Code}) is available in semester `;

  for (var i = 0; i < paperExists[0].Semester.length; i++)
  {
      if(i == 1)
      {
        text +=  " and "
      }

      text += paperExists[0].Semester[i] ;
  }

  return text;
}

function getDescription(paperExists)
{
    return paperExists[0].Name + " (" + paperExists[0].Code + "): " + paperExists[0].Desc;
}