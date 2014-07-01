// Includes
var config = require('config');
var mysql = require('mysql');
var connection = mysql.createConnection(config.database);

// Route declarations
exports.api = function(req, res) {
  var aParams = req.query;

  try {
    if (aParams.q) {
      // Switch on the different queries
      switch (aParams.q) {
        // Our action
        case 'get_data':
          getData(res);
          break;
        // If query doesn't exist, send an error to the user
        default:
          throw "Query doesn't exist";
          break;
      }
    } else {
      // If no query is send, send an error to the user
      throw 'You must set a query.';
    }
  } catch (e) {
    console.error('Error: ' + e);
    sendResponse(res, getError(e))
  }
};

/**
 * Get data action
 * Do the mysql query and send response when it will be finished
 * @param res The response object
 */
var getData = function (res) {
  // Send error if connection fail
  connection.connect(function(err) {
    if (err) {
      throw 'Connection error: ' + err.stack;
    }
  });

  // Do the query (could be change in other actions)
  connection.query('select * from table_1;', function(err, rows) {
    if (err) {
      throw 'Error in the query: ' + err.stack;
    }
    // If no error, send the data to the user
    sendResponse(res, rows);
  });
};

/**
 * Send a http response composed with a javascript object transformed in json
 * @param res The response object
 * @param {object} data The object which will be send to the user
 */
var sendResponse = function (res, data) {
  data = JSON.stringify(data);
  res.setHeader('Content-Type', 'text/json');
  res.setHeader('Content-Length', Buffer.byteLength(data));
  res.end(data);
}

/**
 * Generate an user readable error object
 * @param {string} description A description of the encountered error
 */
var getError = function (description) {
  return { error: description };
};
