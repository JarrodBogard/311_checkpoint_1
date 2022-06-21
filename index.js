const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const usersRouter = require("./routes/users.js");
const port = process.env.PORT || 4000;

app.use(bodyParser.json());

app.use("/", usersRouter);

app.listen(port, () => {
  console.log("app is listening on:", port);
});

////////////// error handling  ////////////////
// app.use(logErrors)
// app.get('/', (req, res) => {
//   throw new Error("Hello error!")
// })
// app.get("/error", (req, res, next) => {
//   next(new Error("this is an error"))
// })
////////////////////////////////////////////

// const sampleUser = require("./data/sampleUser")
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
