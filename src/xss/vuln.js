const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // Get the user-provided message from the query string
  const message = req.query.message;

  // Send a response with the message as the body
  res.send(`
    <html>
      <body>
        Message: ${message}
      </body>
    </html>
  `);
});

// Start the server on port 3000
app.listen(3000);