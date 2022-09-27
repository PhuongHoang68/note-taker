const htmlRoutes= require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");
const express = require("express");

const app = express;


//setting a port
const PORT = process.env.PORT || 3001;

//handling data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.use(express.static('public'));


//telling our server where to file our Routes files
app.use('api', apiRoutes);
app.use('/', htmlRoutes);

//port listener 
app.listen(PORT, ()=> {
    console.log(`App listening on PORT: ${PORT}`);
});