

const express = require("express")
const app = express()

const path = require("path")
app.use(express.static(path.join(__dirname, 'views')))

const parseUrl = require("body-parser");
let encodeUrl = parseUrl.urlencoded({ extended: true});

app.get('/', (req, res) => {
	console.log("test")
	console.log(path.join(__dirname, "views", "Validate_form.html"))
	res.sendfile(path.join(__dirname, "views", "Validate_form.html"))

})
const validId = require('./validate')
app.post("/Validate", encodeUrl, (req, res) =>{
	console.log("form data validation")
	console.log(req.body)
	console.log(req.body.id_code)
	res.send(validId.isikukood(req.body.id_code))

})
app.listen(3000, () =>{
	 console.log(`Example app is started at http://localhost:3000`)
})
