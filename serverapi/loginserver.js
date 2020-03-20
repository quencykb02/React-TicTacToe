const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const cors = require('cors')
const port = 5000;
const sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database('./login.db')

app.use(
    bodyparser.urlencoded({
        extended: false
    })
)

app.use(
    bodyparser.json(

    )
)
app.use(
    cors()
)


app.get('/', function (request, respond) {
    respond.send("Hello World!")

})
app.post('/login', (request, respond) => {
db.all('SELECT * FROM users WHERE name=? AND password=?', [request.body.name, request.body.password], (err,row) =>{
    if(row.length > 0){
        respond.json({row})
    }else {
        respond.status(403).send({ errorCode: '403' });
    }
})

})
// app.post('/register', (request, respond) => {
//     db.all('INSERT INTO users (name, password, email) ', [request.body.name, request.body.password, request.body.email], (err,row) =>{
//         if(){
//             respond.json({row})
//         }else {
//             respond.status(403).send({ errorCode: '403' });
//         }
//     });
    
    
//     })


app.listen(port, () => console.log(`example app listening on port ${port}`))
