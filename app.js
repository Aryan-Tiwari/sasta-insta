const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./config/db')
const exphbs = require('express-handlebars')

// Load config
dotenv.config({ path: './config/config.env' })

connectDB()

const app = express()

//logging
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

// handlebars
// app.engine('.hbs', exphbs({defaultLayout: "main", extname: '.hbs'}))
// app.set('view engine', '.hbs')

// app.engine('handlebars', engine());
// app.set('view engine', 'handlebars');


const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`server running in ${process.env.NODE_ENV} mode on port  ${PORT}`)
})