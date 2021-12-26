const router = require("express").Router()
let Category = require("../models/category")

router.route("/").get((req, res)=>{
    if(req.isAuthenticated()){
        Category.find()
        .then(categories => res.json(categories))
        .catch(err => res.status(400).json("Error: "+err))
    }else{
        res.status(401).json("Not Authorized")
    }
})

router.route("/:id").get((req, res)=>{
    if(req.isAuthenticated()){
        let id = req.params.id
        Category.findById(id)
        .then(category => res.json(category))
        .catch(err => res.status(400).json("Error: "+err))
    }else{
        res.status(401).json("Not Authorized")
    }
})

router.route("/add").post((req, res)=>{
    if(req.isAuthenticated()){
        const category = {
            categoryName : req.body.categoryName,
            description : req.body.description
        }
        const newCategory = Category(category)
        newCategory.save()
        .then(()=>res.json("Category added!"))
        .catch(err=>res.status(400).json("Error: "+err))
    }else{
        res.status(401).json("Not Authorized")
    } 
})

router.route("/update/:id").post((req, res)=>{
    if(req.isAuthenticated()){
        let id = req.params.id
        Category.findById(id)
        .then(category =>{
            category.categoryName = req.body.categoryName,
            category.description = req.body.description
    
            category.save()
            .then(()=>res.json("Category updated!"))
            .catch(err => res.status(400).json("Error: "+err))
        })
        .catch(err => res.status(400).json("Error: "+err))
    }else{
        res.status(401).json("Not Authorized")
    }
})

router.route("/delete/:id").delete((req, res)=>{
    if(req.isAuthenticated()){
        let id = req.params.id 
        Category.findByIdAndDelete(id)
        .then(()=>res.json("Category deleted!"))
        .catch(err => res.status(400).json("Error: "+err))
    }else{
        res.status(401).json("Not Authorized")
    }
})

module.exports = router