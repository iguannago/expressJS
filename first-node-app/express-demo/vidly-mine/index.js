const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server running on port ${port}...`));

const genres = [
    { id: 1, genre: 'comedy' },
    { id: 2, genre: 'love' },
    { id: 3, genre: 'romantic' },
    { id: 4, genre: 'terror' }
];

app.get('/api/genres', (req, res) => {
    res.send(genres);
});

app.get('/api/genres/:id', (req, res) => {
    const id = req.params.id;
    const genre = genres.find(g => g.id === parseInt(id));
    res.send(genre);
});