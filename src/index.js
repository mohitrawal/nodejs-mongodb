require('dotenv').config()
const express = require("express")
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const authRoute = require('./routes/auth')
const app = express()
const port = process.env.PORT || 3001
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
	//don't show the log when it is test
		console.log("Connected to %s", process.env.MONGODB_URL);
		console.log("App is running ... \n");
})
.catch(err => {
    console.error("App starting error:", err.message);
    process.exit(1);
});
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.send("<h1>Welcome to my app</h1>")
})
app.use('/api', authRoute)
app.listen(port, (req, res) => {
    console.log(`app is running on ${port} port`);
})