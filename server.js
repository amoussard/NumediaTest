// "includes"
var express = require('express');
var config = require('config');

// Creation of the application
var app = express();
// Include of routes methods
var routes = require('./router/routes');

// Set the listening port for the application (in configuration)
app.set('port', config.node_application.port);

// handle the error "safely"
process.on('uncaughtException', function(err) {
  console.error(err);
});

// Routes declarations
app.get('/api', routes.api);

// Vhost app
var server = app.listen(app.get('port'), function() {
  console.log("Express server listening on port http://localhost:%d in %s mode", server.address().port, app.settings.env);
});
