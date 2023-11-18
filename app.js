const path = require('path');
const express = require('express');
const app = express();
const createUser = require('./src/routes/createUser');
const rootRouter = require('./src/routes/index');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', rootRouter);
app.use('/createUser', createUser);

app.listen(3000, () => {
    console.log('Servidor Iniciado!');
});