const router = require("express").Router();
const passport = require("passport")

const User = require("../models/user")
passport.use(User.createStrategy())
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

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
    if(req.isAuthenticated()){
        const user = {
            username : req.body.username,
            email : req.body.email,
            password : req.body.password
        }
        const newUser = User(user)  ;
        newUser.save()
        .then(()=>res.json("User added!"))
        .catch(err => res.status(400).json("Error: "+err))
    }else{
        res.redirect("/login")
    }
})

router.route("/update/:id").post((req,res)=>{
    if (req.isAuthenticated()){
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
    }else{
        res.redirect("/login")
    }
})

router.route("/delete/:id").delete((req,res)=>{
    if(req.isAuthenticated()){
        let id = req.params.id
        User.findByIdAndDelete(id)
        .then(()=> res.json("User deleted!"))
        .catch(err => res.status(400).json("Error: "+err))
    }else{
        res.redirect("/login")
    }
})

router.route("/register").post((req, res)=>{
    const newUser = {
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    }
    User.register(newUser, req.body.password , function(err,user){
        if(err){
            console.log(err)
            res.json("Error: "+err)
        }
        else{
          passport.authenticate("local")(req,res,()=>{
            res.json("Registered Successfully!")
          })
        }
      })
})

router.route("/login").post((req, res)=>{
    const user = new User({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    })

    req.login(user,err=>{
        if(err){
            res.status(400).json("Error: "+err)
        }else{
            passport.authenticate("local")(req,res,()=>{
                res.json("User Authenticated Successfully!")
            })
        }
    })
})

module.exports = router