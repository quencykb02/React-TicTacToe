const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const cors = require('cors')
const port = 5000;
const sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database('./tictactoe.db')

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
app.post('/tictactoe', (request, respond) => {
    // checken of player en score binnen komen.
    console.log("this player won");
    console.log(request.body.player)

    // INSERT INTO stats (player, score) VALUES(?, ?)//



    // update score where player = ? //
    db.run('UPDATE stats SET score = score + 1 WHERE player = ?', [request.body.player], (err) => {
        if (err) {
            return console.error(err.message);
        }
    });

    //  db.run(laat de huidige score zien)
    // respond.json(huidige score);

    db.all('SELECT * FROM stats', (err, row) => {
        console.log(row)
        if (row.length > 0) {
            respond.send(row);
            // respond.json({ row }) // stuur het score op als response naar waar dit gecalled is.

        } else {
            respond.status(403).send({ errorCode: '403' });
        }
    });

    



})



app.listen(port, () => console.log(`example app listening on port ${port}`))
