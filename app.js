const path = require('path');
const express = require('express');
const app = express();

const registerRouter = require('./app/routes/register');
const loginRouter = require('./app/routes/login');
const rootRouter = require('./app/routes/index');
const roadmapRouter = require('./app/routes/roadmap')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', rootRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/createRoadmap', roadmapRouter)

app.listen(3000, () => {
    console.log('Servidor Iniciado!');
});