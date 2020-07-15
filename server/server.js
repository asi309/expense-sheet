const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const PORT = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get('*', (request, response) => {
    response.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(PORT, () => {
    console.log('Serving at PORT 3000');
});