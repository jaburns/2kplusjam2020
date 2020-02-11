const path = require('path');
const express = require('express');
const app = express();
const http = require('http').Server(app);

const PORT = process.env.PORT || '3000';

app.use(express.static(path.join(__dirname, './docs')));
app.get('/', (req, res) => res.redirect('/a.html'));
http.listen(PORT, () => console.log('Listening on '+PORT));