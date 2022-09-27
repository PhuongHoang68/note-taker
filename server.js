const htmlRoutes= require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");
const express = require("express");

const app = express();


//setting a port
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));

//handling data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



//telling our server where to file our Routes files by creating end-points
app.use('api', apiRoutes);
app.use('/', htmlRoutes);

//port listener 
app.listen(PORT, ()=> {
    console.log(`App listening on PORT: ${PORT}`);
});