const path = require('path');
const express = require('express');
const app = express();

const userRouter = require('./app/routes/user');
const roadmapRouter = require('./app/routes/roadmap');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/user', userRouter);
app.use('/roadmap', roadmapRouter);

app.listen(3000, () => {
    console.log('Servidor Iniciado!');
});