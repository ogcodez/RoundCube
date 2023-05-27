const express = require('express');
const db = require('./db')
const cors = require('cors')

const app = express();

const  PORT = 3002;
app.use(cors());
app.use(express.json())

// Route to get all posts
app.get("/api/get", (req,res)=>{
db.query("SELECT * FROM posts", (err,result)=>{
    if(err) {
    console.log(err)
    } 
res.send(result)
}
    );   
});

// Route for getting the first 10 posts
app.get("/api/getTen", (req,res)=>{
    db.query("SELECT * FROM posts ORDER BY id DESC limit 10;", 
    (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    }
        );   
    });

// Route for creating the post
app.post('/api/create', (req,res)=> {

const name = req.body.name;
const message = req.body.message;

console.log(name,message)

db.query("INSERT INTO posts (message, name) VALUES (?,?)",[message,name], (err,result)=>{
   if(err) {
       console.log(err)
   } 
   console.log(result)
}
);   
})

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})