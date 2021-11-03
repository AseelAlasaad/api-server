'use strict';

const express=require('express');
const router=express.Router();

const {addressCollection}=require('../models/index');

router.get('/address',getaddress);
router.post('/address',createaddress);
router.put('/address/:id',updateaddress);
router.delete('/address/:id',deleteaddress);


async function getaddress(req,res)
{const id = parseInt(req.params.id);
    let address=await addressCollection.read(id);
    res.status(200).json(address);
}


async function createaddress(req,res)
{   let newaddress=req.body;
    let address=await addressCollection.create(newaddress);
    res.status(201).json(address);
}

async function updateaddress(req,res){
    const id = parseInt(req.params.id);
    const obj=req.body;
    const updateOneaddress=await addressCollection.update(id,obj);
    res.status(201).json(updateOneaddress);
}



async function deleteaddress(req,res){
    const id = parseInt(req.params.id);
    const deleteoneAddress=await addressCollection.delete(id);
    res.status(204).json(deleteoneAddress);
}

module.exports=router