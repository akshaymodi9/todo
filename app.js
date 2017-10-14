//importing dependicies
var express =require('express')
var bodyParser=require('body-parser')
var mongoose=require('mongoose')
var todoroute=require('./routes/todo')

//Instantiation
var app=express()

//configuration
app.set('port',3500)
app.set('mongodbUrl','mongodb://localhost:27017/todo')

//cors
app.use(function(req,res,next){
    res.header("Access-control-Allow-Origin","*");
    res.header("Access-control-Allow-Headers","Origin,X-Requested-with,Content-Type,Accept")
    res.header("Access-control-Allow-Methods","PUT,POST,GET,DELETE")
    next()

})
//middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//setting routes
app.use('/api',todoroute)

//mongodb connection
mongoose.connect(app.get('mongodbUrl'), { useMongoClient: true })

//connection success
mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB: "+app.get('mongodbUrl'))
})

//connection failure
mongoose.connection.on("error", (err) => {
    if (err)
        console.log("Connection failed " + err)
})

//start server
app.listen(app.get('port'),function(req,res,next){
    console.log("Rest api server running on port: "+app.get('port'))
})

