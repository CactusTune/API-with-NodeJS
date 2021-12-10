const express = require('express');
const route = express.Router();
var users = require('./database')


//CREATE NEW USER
route.post('/users', (req,res)=>{
    const IncomingAccount = (req.body)
    users.push(IncomingAccount)
    res.json(users)
})

//GET ALL USERS
route.get('/users', (req,res)=>{
    res.json({userdata : users})
})

//UPDATE A USER
route.put('/users/:id', (req,res)=>{
    const userid = Number(req.params.id)
    const body = req.body
    const user = users.find((user)=>user.id===userid)
    const index = users.indexOf(user)

    if(!user){
        res.status(500).send(`Error while updating for id ${id}`)
    }else{
        const updatedUser = {...user, ...body}
        users[index]=updatedUser
        res.json(updatedUser)
    }
})

//GET A USER
route.get('/users/:id',(req,res)=>{
    const userid = Number(req.params.id)
    const getUser = users.find((user)=>{user.id===userid})

    if(!getUser){
        res.status(500).send(`Error while looking for id ${id}`)
    }else{
        res.json({userdata : [getUser]})
    }
})

//DELETE A USER
route.get('/users/:id', (req,res)=>{
    const userid = Number(req.params.id)
    const deleteUser = users.delete((user)=>{user.id === userid})

    if(!deleteUser){
        res.status(500).send(`Error deleting for id ${id}`)
    }
    else{
        users = deleteUser;
        res.send(deleteUser)
    }


})

module.exports = route