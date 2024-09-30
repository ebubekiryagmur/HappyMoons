const express = require('express');
const router = express.Router();
const Category = require('../models/category');

router.get('/', async(req, res)=> {
    try{
        const categories = await Category.getAll(req.query);
        res.json(categories);
    }catch(err){
     res.status(400).json({message:'Hata oldu tekrar deneyiniz'});
    }
});

router.get('/:id', async(req, res)=> {
    try{
        const category = await Category.getById(req.params.id)
        if(!category){
            return res.status(404).json({message:"Hata oldu tekrar deneyiniz"});
        }
        res.json(category);
    }catch(err){
        res.status(400).json({message: 'Hata oldu tekrar deneyiniz'})
    }
});

router.post('/', async(req, res)=> {
    try{
        const newCategory = await Category.create(req.body);
        res.status(201).json(newCategory);
    }catch(err){
        res.status(400).json({message: 'Hata oldu tekrar deneyiniz'});
    }
}); 

router.patch('/:id', async(req, res)=> {
    try{
        const upCategory = await Category.update(req.params.id, req.body);
        res.json(upCategory)
    }catch(err){
        res.status(400).json({message: 'Hata oldu tekrar deneyiniz'});
    }
});

router.delete('/:id', async(req, res)=> {
    try{
        const deleteCategory = await Category.delete(req.params.id);
        res.json(deleteCategory);
    }catch(err){
        res.status(400).json({message: 'Hata oldu tekrar deneyiniz'})
    }
});
module.exports = router;