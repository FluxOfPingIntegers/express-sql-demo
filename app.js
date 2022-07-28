
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

// accessing configured database connection
const db = require('./util/database');

// this variable is a valid request handler
const app = express();

// telling express to use the pug templating engine
app.set('view engine', 'pug');

// telling express where to find our templates.  This IS views by default
app.set('views', 'views');

// todo 
const dolphinRoutes = require('./routes/dolphin');

// allowing user submitted data to be available in the request object
app.use(bodyParser.urlencoded({extended: false}));

// allows our html files to search within the public folder for links & scripts
app.use(express.static(path.join(__dirname, 'public')));

// todo
app.use('/dolphins', dolphinRoutes);

// this middleware function will catch all non-defined routes
app.use(errorController.get404);

// setting the port # for our server.  The starting url is localhost:3000/dolphins/new
app.listen(3000);