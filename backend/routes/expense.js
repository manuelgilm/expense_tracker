const router = require("express").Router()
const Expense = require("../models/expense")
const Category = require("../models/category")
const User = require("../models/user")

router.route("/").get((req, res)=>{
    Expense.find()
    .then(expenses => res.json(expenses))
    .catch(err => res.status(400).json("Error: "+err))
})

router.route("/:id").get((req,res)=>{
    Expense.findById()
    .then(expense => res.json(expense))
    .catch(err => res.status(400).json("Error: "+err))
})

router.route("/add").post((req,res)=>{
    const expense = {
        amount: req.body.amount,
        description:req.body.description
    }
    User.findOne({username:req.body.username},(err,user)=>{
        if(user === null){
            res.status(400).json("Error: "+err)
        }else{
            expense.username = req.body.username
            Category.findOne({categoryName:req.body.categoryName},(err,category)=>{
                if(category === null){
                    res.status(400).json("Error: "+err)
                }else{
                    expense.categoryName = req.body.categoryName
                    const newExpense = Expense(expense)
                    newExpense.save()
                    .then(()=>res.json("Expense added!"))
                    .catch(err => res.status(400).json("Error: "+err))
                }
            })
        }
    })
})

router.route("/update/:id").post((req,res)=>{
    let id = req.params.id
    Expense.findById(id)
    .then(expense=>{
        expense.categoryName = req.body.categoryName,
        expense.username = req.body.username,
        expense.amount = req.body.amount,
        expense.description = req.body.description

        expense.save()
        .then(()=>res.json("Expense update!"))
        .catch(err => res.status(400).json("Error: "+err))
    })
    .catch(err => res.status(400).json("Error: "+err))
})

router.route("/delete/:id").delete((req,res)=>{
    let id = req.params.id
    Expense.findByIdAndDelete(id)
    .then(()=>res.json("Expense deleted!"))
    .catch(err => res.status(400).json("Error: "+err))
})

router.route("/findbycategory/:categoryname").get((req, res)=>{
    let categoryname = req.params.categoryname
    Expense.find({categoryName:categoryname},(err, expenses)=>{
        if(expenses===null){
            res.status(400).json("Error: "+err)
        }else{
            res.json(expenses)
        }
    })
})
module.exports = router