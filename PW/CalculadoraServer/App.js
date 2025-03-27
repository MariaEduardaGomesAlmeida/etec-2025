const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')

app.use(cors(
    {
        origin:'*'
    }
));

app.use(express.json())

app.use(

    express.urlencoded({
        extended: true
    })
)

app.get("/status", (req, res, next) => {
    res.json({ mensagem: 'Está funcionando!' });
});


app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "Front-End", "index.html"));
});



app.listen(5000, ()=>{console.log("Funcionando na porta 5000")})