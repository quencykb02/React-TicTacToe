const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const cors = require('cors')
const port = 5000;
const sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database('./maindatabase.db')

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


app.post('/tictactoe', (request, respond) => {
    // checken of player en score binnen komen.
    console.log("this player won");
    console.log(request.body.winner)

    // INSERT INTO stats (player, score) VALUES(?, ?)//


    // checken of the winnaar in de database zit of niet
    let winner = null;
    db.get('SELECT * FROM stats WHERE player = ?', [request.body.winner]), (err, row) => {
        if (err) {
            console.log(err);
        }
        console.log(row);
        winner = row;
    }

    console.log(winner)

    if (winner) {
        winner.score += 1;
        db.run('UPDATE stats SET score = ? WHERE player = ?', [winner.score, request.body.winner], (err) => {
            if (err) {
                return console.error(err.message);
            }
            console.log(`UPDATE row`)
        });
    } else {
        db.run('INSERT INTO stats (player, score) VALUES(?, ?)', [request.body.winner, 1], (err) => {
            if (err) {
                return console.error(err.message);
            }
            console.log(`INSERT INTO row:`)
        });
    }

    console.log(winner);
    respond.send(winner);

    // db.all('SELECT * FROM stats', (err, row) => {
    //     console.log(row)
    //     if (row.length > 0) {
    //         respond.send(row);
    //         // respond.json({ row }) // stuur het score op als response naar waar dit gecalled is.

    //     } else {
    //         respond.status(403).send({ errorCode: '403' });
    //     }
    // });
})


app.post('/login', (request, respond) => {
    db.all('SELECT * FROM users WHERE name=? AND password=?', [request.body.name, request.body.password], (err, row) => {
        if (row.length > 0) {
            respond.json({ row })
        } else {
            respond.status(403).send({ errorCode: '403' });
        }
    })

})
app.post('/register', (request, respond) => {
    console.log(request.body.userinputName)
    console.log(request.body.userinputPassword)
    db.all('INSERT INTO users (name, password) VALUES (?, ?) ', [request.body.userinputName, request.body.userinputPassword], (err, row) => {
        if (err != null) {
            respond.status(403).send({ errorCode: "403" })
        } else {
            respond.status(200).send({ errorCode: "200" })
        }
    });
})





app.listen(port, () => console.log(`example app listening on port ${port}`))
