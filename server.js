
const express = require('express');

const app = express();
app.use(express.json());

app.use(express.static('public'));

app.get('/research', (req, res) => {
    res.sendFile(__dirname + '/public/research.html');
});

app.get('/undergraduate', (req, res) => {
    res.sendFile(__dirname + '/public/undergraduate.html');
});

app.listen(3000, () => {
    console.log('Server has started on port 3000');
});