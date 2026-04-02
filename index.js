const express = require('express');
const port = 4000
const app = express()
const methodRouter  = require('./routers/methods')
app.use(express.json())


app.get('/',(req,res)=>{
    res.status(200).send("HOME PAGE")
})


app.use('/',methodRouter)

app.use((err, req, res, next) => {
    const status = err.status || 500;

    res.status(status).json({
        error: status === 500 ? "Internal Server Error" : err.message
    });
});

app.listen(port,()=>{
    console.log(`Listing at : http://localhost:${port}`);
})