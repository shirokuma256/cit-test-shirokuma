const express = require('express');
const app = express();

app.get('/example', (req, res) => {
  // Some processing...
  const responseData = { message: 'Hello, world!' };
  res.json(responseData);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
