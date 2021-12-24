const mongoose = require("mongoose")
const Schema = mongoose.Schema

const expenseSchema = new Schema({
    categoryId:{
        type: String,
        required:true,
        unique: true,
        trim:true,
    },
    userId:{
        type:String,
        required:true,
        unique:true,
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