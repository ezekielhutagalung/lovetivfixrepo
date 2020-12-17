const express = require("express")
const app = express()
const port = 3000


app.set('view engine', 'ejs')

app.use(express.urlencoded({extended : false}))

const routes = require('./routes/index.js')

app.use('/', routes)

app.use(express.static(__dirname + './public'))
app.use( express.static( "public" ) );

app.listen(port, function(){
    console.log(`this app is listeng on ${port}`)
})
