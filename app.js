const path = require('path');
const express = require('express');
const app = express();
const registerRouter = require('./src/routes/register');
const loginRouter = require('./src/routes/login');
const rootRouter = require('./src/routes/index');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', rootRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);

app.listen(3000, () => {
    console.log('Servidor Iniciado!');
});