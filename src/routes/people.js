
'use strict';

const express = require('express');

const router = express.Router();

const {peopleCollection}=require('../models/index');

router.post('/people',createpeople);
router.get('/people',getpeople);
router.put('/people/:id',updatepeople);
router.delete('/people/:id',deletepeople);

async function createpeople(req,res)
{   let newpeople=req.body;
    let people=await peopleCollection.create(newpeople);
    res.status(201).json(people);
}


async function getpeople(req,res)
{
    const id = parseInt(req.params.id);
    let people=await peopleCollection.read(id);
    res.status(200).json(people);
}

async function updatepeople(req,res){
    const id = parseInt(req.params.id);
    const obj=req.body;
    const updateOnepeople=await peopleCollection.update(id,obj);
    res.status(201).json(updateOnepeople);
}



async function deletepeople(req,res){
    const id = parseInt(req.params.id);
    const deleteonepeople=await peopleCollection.delete(id);
    res.status(204).json(deleteonepeople);
}


module.exports=router;
