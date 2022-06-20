const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const users = require("./data/index")
// const sampleUser = require("./data/sampleUser")
const port = process.env.PORT || 4000

app.use(bodyParser.json())

////////////// error handling  ////////////////
// app.use(logErrors)
// app.get('/', (req, res) => {
  //   throw new Error("Hello error!")
  // })
  // app.get("/error", (req, res, next) => {
  //   next(new Error("this is an error"))
  // })
  ////////////////////////////////////////////

  app.get('/users', (req, res) => res.json(users))
  
  app.get("/users/:id", (req, res) => {
    const id = req.params.id
    const foundUser = users.find(user => user.id === Number(id))
    res.json(foundUser)
  })
  
  //// hard-code version using sampleuser.js ////
  // app.post("/users", (req, res) => {
    
    //   // const newUser = {
      //   //   "id": users.length + 1,
//   //   ...req.body
//   // }
//   users.push(sampleUser)
//   res.json(users)
// })
//////////////////////////////////////////////

app.post("/users", (req, res) => {
  const newUser = {
    "id": users.length + 1,
    ...req.body
  }
  
  users.push(newUser)
  res.json(users)
})

app.put("/users/:id", (req, res) => {
  const id = req.params.id
  const foundUser = users.find(user => user.id === Number(id))
  const foundIndex = users.findIndex(user => user.id === Number(id))
  
  const updatedUser = {
    ...foundUser,
    ...req.body
  }
  users.splice(foundIndex, 1, updatedUser)
  res.json(updatedUser)
})

app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  
  const foundIndex = users.findIndex(user => user.id == Number(id));
  
  users.splice(foundIndex, 1);
  res.json({message: `Deleted user entry with id: ${id}`})
})

// middleware error handling //

// function logErrors (err, req, res, next) {
  //   console.error(err.stack)
  //   next(err)
  // }
  
  // app.use((err, req, res, next) => {
  //   console.log(err.message)
  //   res.status(400).json(err.message)
  //   // res.send({})
  // })

  // app.all("*", (req, res) => {
  //   res.status(404).json("Page Not Found")
  // })

  app.listen(port, () => {
    console.log('app is listening on:', port)
  })