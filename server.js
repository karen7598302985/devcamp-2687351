//Dependencias commonjs
const express = require('express')

//crear al objeto app
const app= express()
//primera  prueba de url del servidor

app.get('/prueba', 
function(request, response){
    response.send("Holaaaa");


});

//uri de bootcamps
app.get('/api/v1/devcamp/bootcamps',
        (request , response)=> {
            response
            .status(200)
            .json({
                "success" : true, 
                "mesg" : "mostrar todos los bootcamps"

            })

})
//traer  bootcamps por id
app.get('/api/v1/devcamp/bootcamps/:id',
        (request , response)=> {
            response
            .status(200)
            .json({
                "success" : true, 
                "mesg" :  `Seleccionando bootcamp con  ${request.params.id}`

            })

})

//traer todos los bootcamps
app.post('/api/v1/devcamp/bootcamps',
        (request , response)=> {
            response
            .status(201)
            .json({
                "success" : true, 
                "mesg" :  "crear bootcamp"

            })

})

//traer todos los bootcamps
app.put('/api/v1/devcamp/bootcamps/:id',
        (request , response)=> {
            response
            .status(200)
            .json({
                "success" : true, 
                "mesg" :  `Actualizando bootcamp con ${request.params.id}`

            })

})
//eliminar  bootcamps por id
app.delete('/api/v1/devcamp/bootcamps/:id',
        (request , response)=> {
            response
            .status(200)
            .json({
                "success" : true, 
                "mesg" :  `Eliminando bootcamp con${request.params.id}`

            })

})

//evidencia: uris de curses
app.get('/api/v1/devcamp/curses/:id',
        (request , response)=> {
            response
            .status(200)
            .json({
                "success" : true, 
                "mesg" :  `Seleccionando curses con  ${request.params.id}`

            })

})

app.get('/api/v1/devcamp/curses',
        (request , response)=> {
            response
            .status(200)
            .json({
                "success" : true, 
                "mesg" : "mostrar todos los curses"

            })

})

app.post('/api/v1/devcamp/curses',
        (request , response)=> {
            response
            .status(201)
            .json({
                "success" : true, 
                "mesg" :  "crear curses"

            })

})

app.put('/api/v1/devcamp/curses/:id',
        (request , response)=> {
            response
            .status(200)
            .json({
                "success" : true, 
                "mesg" :  `Actualizando curses con ${request.params.id}`

            })

})

app.delete('/api/v1/devcamp/curses/:id',
        (request , response)=> {
            response
            .status(200)
            .json({
                "success" : true, 
                "mesg" :  `Eliminando curses con  ${request.params.id}`

            })

})

//evidencia: uris de reviews

app.get('/api/v1/devcamp/reviews/:id',
        (request , response)=> {
            response
            .status(200)
            .json({
                "success" : true, 
                "mesg" :  `Seleccionando reviews con  ${request.params.id}`

            })

})


app.get('/api/v1/devcamp/reviews',
        (request , response)=> {
            response
            .status(200)
            .json({
                "success" : true, 
                "mesg" : "mostrar todos los reviews"

            })

})

app.post('/api/v1/devcamp/reviews',
        (request , response)=> {
            response
            .status(201)
            .json({
                "success" : true, 
                "mesg" :  "crear reviews"

            })

})

app.put('/api/v1/devcamp/reviews/:id',
        (request , response)=> {
            response
            .status(200)
            .json({
                "success" : true, 
                "mesg" :  `Actualizando reviews con ${request.params.id}`

            })

})

app.delete('/api/v1/devcamp/reviews/:id',
        (request , response)=> {
            response
            .status(200)
            .json({
                "success" : true, 
                "mesg" :  `Eliminando reviews con  ${request.params.id}`

            })

})


//evidencia: uris de users

app.get('/api/v1/devcamp/users/:id',
        (request , response)=> {
            response
            .status(200)
            .json({
                "success" : true, 
                "mesg" :  `Seleccionando users con  ${request.params.id}`

            })

})


app.get('/api/v1/devcamp/users',
        (request , response)=> {
            response
            .status(200)
            .json({
                "success" : true, 
                "mesg" : "mostrar todos los users"

            })

})
app.post('/api/v1/devcamp/users',
        (request , response)=> {
            response
            .status(201)
            .json({
                "success" : true, 
                "mesg" :  "crear users"

            })

})

app.put('/api/v1/devcamp/users/:id',
        (request , response)=> {
            response
            .status(200)
            .json({
                "success" : true, 
                "mesg" :  `Actualizando users con ${request.params.id}`

            })

})

app.delete('/api/v1/devcamp/users/:id',
        (request , response)=> {
            response
            .status(200)
            .json({
                "success" : true, 
                "mesg" :  `eliminando users con ${request.params.id}`

            })

})


//establecer servidor 
const PUERTO = 4500

app.listen(PUERTO ,
      console.log("Servidor escuchando en el puerto" + PUERTO))