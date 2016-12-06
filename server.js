const compression = require('compression');
const express = require('express');
const helmet = require('helmet');
let app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(compression());
app.use(helmet());

app.get('*', function(req, res) {
    res.render('index');
});

app.listen(
    process.env.PORT || 4000,
    '0.0.0.0',
    function() {
        console.log("Svelte running: http://localhost:4000");
    }
);
