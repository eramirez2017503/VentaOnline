'use strict'

var mongoose = require('mongoose')
var app = require('./app')
var port = 3200

mongoose.Promise = global.Promise

mongoose.set('useFindAndModify',false)

mongoose.connect('mongodb://localhost:27017/VentaOnline', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('El servidor de Node JS esta funcionando')
        app.listen(port, () => {
            console.log('Servidor de Express esta corriendo');
        })
    })
    .catch((err) => {
        console.log('Error al conecctar la BD', err)
    })