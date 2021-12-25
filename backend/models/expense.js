const mongoose = require("mongoose")
const Schema = mongoose.Schema

const expenseSchema = new Schema({
    categoryName:{
        type: String,
        required:true,
        trim:true,
    },
    username:{
        type:String,
        required:true,
        trim:true
    },
    amount:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true
    }
}, {
    timestamps:true
})

const Expense = mongoose.model("Expense", expenseSchema)
module.exports = Expense