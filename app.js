const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./config/db')
// const exphbs = require('express-handlebars')
const path = require("path")
const {engine} = require('express-handlebars')

// Load config
dotenv.config({ path: './config/config.env' })

connectDB()

const app = express()

//logging
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}



// handlebars
app.engine('.hbs', engine({ extname: '.hbs', defaultLayout: "main"}));
app.set('view engine', '.hbs')
app.set("views", "./views")


// Routes
app.use('/', require('./routes/index'))

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`server running in ${process.env.NODE_ENV} mode on port  ${PORT}`)
})