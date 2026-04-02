const express = require('express');
const {v4: uuidv4} = require('uuid');
const Router = express.Router()
const { todos } = require('../content/Todo-list.json')





Router.get("/list",(req,res)=>{
    if(!todos || todos.length === 0){
        res.status(404).json({
            message : "No Todos found"
        })
    }
    res.status(200).json({
        success : true ,
        data : todos
    })
})

Router.get("/list/:id",(req,res)=>{

    const { id } = req.params
    const todo = todos.find((each)=>each.id === id)

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
    const { title, content, completed } = req.body;

    if(!title || !content || completed === undefined){
        return res.status(400).json({
            success : false,
            message : "Please provide all the fields"
        })
    }
    todos.push({id : uuidv4() ,title ,content ,completed})
    res.status(201).json({
        success : true ,
        message : 'To-do List created',
        data : todos
    })
})

Router.put('/list/:id',(req,res)=>{
    const {id} = req.params;
    const data = req.body;

    const todo = todos.find((each)=>each.id === id)
    if(!todo){
        return res.status(404).json({
            success : false,
            message : `No To-do with ID:${id}`
        })
    }
    const allowedUpdation = ["title","content" ,"completed"];
    const update = Object.keys(req.body);
    const isValided = update.every(field => allowedUpdation.includes(field));

if (!isValided) {
    return res.status(400).json({
        message: "Invalid fields in update"
    });
}    

    const updateTodo = todos.map((each)=>{
        if(each.id === id){
            return {...each,...data}
        }
        return each
    })
    res.status(200).json({
        success:true,
        data:updateTodo,
        message:"Todo list Updated Successfully"
    })
})

Router.delete('/list/:id',(req,res)=>{
    const {id} = req.params;        
    const todo = todos.find((each)=>each.id === id)
    if(!todo){
        return res.status(404).json({   
            success: false, 
            message : `No Todo with ID:${id}`   
        })
    }
    const deletetodo = todos.filter((each)=>each.id !== id)
    res.status(200).json({
        success:true,  
        data: deletetodo,
        message:"Todo Deleted Successfully"
    })
})


module.exports = Router;