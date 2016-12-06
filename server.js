const compression = require('compression');
const express = require('express');
const helmet = require('helmet');
const port = process.env.PORT || 4000;
let app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(compression());
app.use(helmet());

app.get('*', (req, res) => {
    res.render('index');
});

app.listen(
    port,
    '0.0.0.0',
    () => {
        console.log(`Running: http://localhost:${port}`);
    }
);
