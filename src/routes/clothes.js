'use strict';

const express=require('express');
const router=express.Router();

const {clothesCollection}=require('../models/index');

router.get('/clothes',getclothes);
router.post('/clothes',createclothes);
router.put('/clothes/:id',updateclothes);
router.delete('/clothes/:id',deleteclothes);
router.get('/clothes/:id',getclothes);

async function getclothes(req,res)
{const id = parseInt(req.params.id);
    let clothes=await clothesCollection.read(id);
    res.status(200).json(clothes);
}


async function createclothes(req,res)
{   let newclothes=req.body;
    let clothes=await clothesCollection.create(newclothes);
    res.status(201).json(clothes);
}

async function updateclothes(req,res){
    const id = parseInt(req.params.id);
    const obj=req.body;
    const updateOneclothes=await clothesCollection.update(id,obj);
    res.status(201).json(updateOneclothes);
}



async function deleteclothes(req,res){
    const id = parseInt(req.params.id);
    const deleteoneclothes=await clothesCollection.delete(id);
    res.status(204).json(deleteoneclothes);
}

module.exports=router