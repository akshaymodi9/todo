var todo=require('../models/todotask')
var express=require('express')

var router = express.Router();


//REST api
//get all task
router.get('/',function(req,res,next){

    todo.find((err,doc)=>{
        if(err) res.json(err)
        else res.json(doc)
    })
})
//find task by id
router.get('/:id',function(req,res,next){
    
        todo.findById(req.params.id,(err,doc)=>{
            if(err) res.json(err)
            else res.json(doc)
        })
    })

//find task by name
router.get('/task/:name',function(req,res,next){

    todo.find({'taskname':req.params.name},(err,doc)=>{
        if(err) res.json(err)
        else res.json(doc)
    })
})
//add new task
router.post('/',function(req,res,next){

    var newtask=new todo(req.body)
    newtask.save((err,doc)=>{
        if(err) res.json(err)
        else res.json({msg:'task added',data:doc})
    })
})
//update task
router.put('/:id',function(req,res,next){

    todo.findByIdAndUpdate({_id:req.params.id},{status:req.body.status},(err,doc)=>{
        if(err) res.json(err)
        else res.json({msg:"Status Updated",data:doc})
    })
})

//delete task
router.delete('/:id',function(req,res,next){

    todo.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(err) res.json()
        else res.json({msg:"Task deleted"})
    })
})

module.exports=router