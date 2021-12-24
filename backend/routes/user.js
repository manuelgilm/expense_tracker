const router = require("express").Router();
let User = require("../models/user");

router.route("/").get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: "+err))
})

router.route('/:id').get((req, res) => {
    let id = req.params.id
    User.findById(id)
      .then(user => res.json(user))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route("/add").post((req, res) => {
    const user = {
        username : req.body.username,
        email : req.body.email,
        password : req.body.password
    }
    const newUser = User(user)  ;
    newUser.save()
    .then(()=>res.json("User added!"))
    .catch(err => res.status(400).json("Error: "+err))
})

router.route("/update/:id").post((req,res)=>{
    let id = req.params.id
    User.findById(id)
    .then(user => {
        user.username = req.body.username
        user.email = req.body.email
        user.password = req.body.password 

        user.save()
        .then(() => res.json("User Updated!"))
        .catch(err => res.status(400).json("Error: "+err))
    })
    .catch(err => res.status(400).json("Error: "+err))
})

router.route("/delete/:id").delete((req,res)=>{
    let id = req.params.id
    User.findByIdAndDelete(id)
    .then(()=> res.json("User deleted!"))
    .catch(err => res.status(400).json("Error: "+err))
})

module.exports = router