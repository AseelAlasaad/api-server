'use strict';

const express=require('express');
const router=express.Router();

const {foodCollection}=require('../models/index');

router.get('/food',getfood);
router.post('/food',createfood);
router.put('/food/:id',updatefood);
router.delete('/food/:id',deletefood);
router.get('/food/:id',getfood);

async function getfood(req,res)
{const id = parseInt(req.params.id);
    let food=await foodCollection.read(id);
    res.status(200).json(food);
}


async function createfood(req,res)
{   let newfood=req.body;
    let food=await foodCollection.create(newfood);
    res.status(201).json(food);
}

async function updatefood(req,res){
    const id = parseInt(req.params.id);
    const obj=req.body;
    const updateOnefood=await foodCollection.update(id,obj);
    res.status(201).json(updateOnefood);
}



async function deletefood(req,res){
    const id = parseInt(req.params.id);
    const deleteonefood=await foodCollection.delete(id);
    res.status(204).json(deleteonefood);
}

module.exports=router