const express = require('express');
const app = express();
const escape = require('escape-html');

app.get('/', (req, res) => {
  // Get the user-provided message from the query string
  const message = req.query.message;

  const escapedMesssage = escape(message);

  console.log("Hi Shivam");

  // Send a response with the message as the body
  res.send(`
    <html>
      <body>
        <h1>Hi Shivam</h1>
        Message: ${escapedMesssage}
      </body>
    </html>
  `);
});

// Start the server on port 3000
app.listen(3000);