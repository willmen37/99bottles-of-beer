const express = require("express");

const app = express();
let PORT = 5000;
let beers = 98

app.get('/', (req, res)=>{
    res.send(` 99 Bottles of Beer on the wall <a href=${beers}>take one down, </a> pass it around`)
})


app.get('/:beers',(req,res)=>{
    
    req.params.beers > 0 ? res.send(` ${req.params.beers} Bottles of beer on the wall.<a  href=${req.params.beers-1}> take one down,</a> pass it around  `)
    : res.redirect("/")
})
    
app.listen(PORT, ()=>{
    console.log(`listening on PORT ${PORT}` )
})
