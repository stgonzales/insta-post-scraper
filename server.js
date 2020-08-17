const express = require('express');
const app = express();
const routes = require('./routes');
const cors = require('cors');

const port = 3050

app.use(cors())

app.get("/", routes.index)
app.get("/:id", routes.getSpecificInsta)

app.listen(port, ()=>{
    console.log(`Listening to port ${port}`);
})