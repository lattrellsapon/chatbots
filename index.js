const express = require('express');
const bodyParser   = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const mongodb = require('mongodb');
const path = require('path')
const config = require('./config/database')

// Connect to MongoDB
mongoose.connect(config.database);

//Connection Success
mongoose.connection.on('connected', () => {
  console.log('Connected to database: ' + config.database);
})

//Server, Port and Routes
const app = express();
const port = process.env.PORT;
const routes = require('./routes/routes');

app.use(cors());
app.use(bodyParser.json());
app.use('/', routes);

app.use(express.static(path.join(__dirname, 'client')));

app.listen(port || 8000, () => {
  console.log('Server started on port ' + port);
})
