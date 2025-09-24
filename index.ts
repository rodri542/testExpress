const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(6500, () => {
  console.log('Server is running on port 6500');
}); 

