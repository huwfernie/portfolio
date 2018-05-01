const port = 3000;
const express = require('express');
const app = express();
app.use(express.static(`${__dirname}/`));
app.get('/*', (req, res) => res.sendFile(`${__dirname}/index.html`));
app.listen(port, () => console.log(`Ready! Express is listening on port ${port}`));
