const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const express = require("express");

//CREATE EXPRESS APP
const app = express();
app.use(cors());
app.use(bodyParser.json());

// DECLARE JWT-secret
const JWT_Secret = "your_secret_key";

let testUser = { email: "t@t.com", password: "1234" };

app.post("/api/authenticate", (req, res) => {
  console.log(res.body)

  if (req.body) {
    let user = req.body;
    console.log(user);

    if (
      testUser.email === req.body.email &&
      testUser.password === req.body.password
    ) {
      let token = jwt.sign(user, JWT_Secret);
      res.status(200).send({
        signed_user: user,
        token: token,
      });
    } else {
      res.status(403).send({
        errorMessage: "Authorisation required!",
      });
    }
  } else {
    res.status(403).send({
      errorMessage: "Please provide email and password",
    });
  }
});

app.get('/', (req, res) => {
  res.status(200).send(' I cool sever ')
})



const auth = async (req, res, next) => {
  try{
      if (!req.header('Authorization')) {
        throw new Error('Автозизуйтес');
      }
      const token = req.header('Authorization').replace('Bearer ', '');
      console.log(token)

      const decodedUser = jwt.verify(token, JWT_Secret);
      console.log(decodedUser)
 
      if(decodedUser.email !== testUser.email){
          throw new Error('Не тот юзер')
      }

      next()
  } catch (error) {
      res.status(401).send({error: error.message})
  }
}

app.get('/api/user-info', auth, (req, res) => {
  res.status(200).send(testUser)
})

app.listen(5000, () => console.log("Server started on port 5000"));
