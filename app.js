const express = require('express')
const app = express();
const path = require('path');

const port = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, 'dist/browser')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/browser/index.html'));
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});