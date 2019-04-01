require('dotenv').config()
const express = require('express')
const app = express()
const bcrypt = require('bcrypt');





app.use(express.urlencoded({extended : true}))


app.use('/', require('./routes'))


// app.get('/', (req, res)=>{
//     res.send('tes')
// })


app.listen(3000)