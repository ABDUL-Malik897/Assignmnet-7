const express = require('express');

const Router = express.Router()

const { todos } = require('../content/Todo-list.json')





Router.get("/list",(req,res)=>{
    res.status(200).json({
        success : true ,
        data : todos
    })
})

Router.get("/list/:id",(req,res)=>{

    const { id } = req.params
    const todo = todos.find((each)=>each.id === Number(id))

    if(!todo){
        return res.status(404).json({
            success : false,
            message : `No To-do with ID:${id}`
        })
    }

    res.status(200).json({
        success : true,
        data : todo
    })
})


Router.post('/list',(req,res)=>{
    const { id ,title, content, completed } = req.body;

    if(!id || !title || !content || completed === undefined){
        return res.status(404).json({
            success : false,
            message : "Please provide all the fields"
        })
    }

    const todo = todos.find((each)=>each.id === Number(id))
    if(todo){
        return res.status(404).json({
            success : false ,
            message : `To-do list with  ID:${id} already exists`
        })
    }

    todos.push({id ,title ,content ,completed})
    res.status(200).json({
        success : true ,
        message : 'To-do List created'
    })
})

Router.put('/list/:id',(req,res)=>{
    const {id} = req.params;
    const data = req.body;

    const todo = todos.find((each)=>each.id === Number(id))
    if(!todo){
        return res.status(404).json({
            success : false,
            message : `No To-do with ID:${id}`
        })
    }

    const updateTodo = todos.map((each)=>{
        if(each.id === Number(id)){
            return {...each,...data}
        }
        return each
    })
    res.status(200).json({
        success:true,
        data:updateTodo,
        msg:"Todo list Updated Successfully"
    })
})

Router.delete('/list/:id',(req,res)=>{
    const {id} = req.params;        
    const todo = todos.find((each)=>each.id === Number(id))
    if(!todo){
        return res.status(404).json({   
            success: false, 
            msg : `No Todo with ID:${id}`   
        })
    }
    const deletetodo = todos.filter((each)=>each.id !== Number(id))
    res.status(200).json({
        success:true,  
        data:deletetodo,
        msg:"Todo Deleted Successfully"
    })
})


module.exports = Router;