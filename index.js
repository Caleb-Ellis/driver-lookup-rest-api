const express = require('express');

// Set up express app
const app = express();

// Listen for requests
app.listen(process.env.port || 4000, function() {
  console.log('now listening for requests');
});
