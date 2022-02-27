'use strict';
const express = require ('express');
const {food} = require('../models/index.js');
const routers = express.Router();


routers.get('/food',getFood);
routers.post('/food',addfood)
routers.get('/food/:id',getFoodById)
routers.delete('/food/:id',deleteFood)
routers.put('/food/:id',updatedfood)




async function getFood(req,res){
    let allfood = await food.findAll();
    res.status(200).json(allfood);
}

async function addfood(req,res) {
  let newfood = req.body;
  let addedfood = await food.create(newfood);
  res.status(201).json(addedfood);
}
async function getFoodById(req,res){
    let addedId = parseInt(req.params.id);
    let foodAskedFor = await food.findOne({where:{id:addedId}});
    res.status(200).json(foodAskedFor);
}

async function deleteFood(req,res){
    let deletedId = parseInt(req.params.id);
    let deletedfood = await food.destroy({where:{id:deletedId}});
    res.status(204).json(deletedfood);
}

async function updatedfood(req,res){
 let body =req.body;
 let id = req.params.id;  
 let foodAskedFor = await food.findOne({where:{id:id}});
    const Updatedfood = await foodAskedFor.update(body);
    res.status(201).json(Updatedfood);
}




module.exports = routers ;