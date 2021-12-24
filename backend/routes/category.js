const router = require("express").Router()
let Category = require("../models/category")

router.route("/").get((req, res)=>{
    Category.find()
    .then(categories => res.json(categories))
    .catch(err => res.status(400).json("Error: "+err))
})

router.route("/:id").get((req, res)=>{
    let id = req.params.id
    Category.findById(id)
    .then(category => res.json(category))
    .catch(err => res.status(400).json("Error: "+err))
})

router.route("/add").post((req, res)=>{
    console.log(req.body)
    
    const category = {
        categoryName : req.body.categoryName,
        description : req.body.description
    }
    const newCategory = Category(category)
    newCategory.save()
    .then(()=>res.json("Category added!"))
    .catch(err=>res.status(400).json("Error: "+err))
})

router.route("/update/:id").post((req, res)=>{
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
})

router.route("/delete/:id").delete((req, res)=>{
    let id = req.params.id 
    Category.findByIdAndDelete(id)
    .then(()=>res.json("Category deleted!"))
    .catch(err => res.status(400).json("Error: "+err))
})

module.exports = router