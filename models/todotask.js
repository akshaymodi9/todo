// importing dependicies
var mongoose=require('mongoose')
var schema=mongoose.Schema

//create schema of mongodb collection
var todoSchema=new schema({

    taskname:{type:String,required:true},
    description:{type:String,required:true},
    status:{type:String,required:true}

})

//exporting the schema
module.exports=mongoose.model('todotask',todoSchema)