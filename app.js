var express = require("express")
var bodyParser = require("body-parser")
var cookieParser = require("cookie-parser")
var path = require("path")
var app = express()
var mongoose = require("mongoose")
var db = mongoose.connect("mongodb://localhost/test")
db.connection.once("open", () => {
	console.log("数据库链接成功！")
})
app.use(express.static(path.join(__dirname, 'public')))
var schema = new mongoose.Schema({
	username: {
		type: String
	},
	password: {
		type: String
	}
})
var users = mongoose.model("users", schema)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: true
}))
app.use(cookieParser())

app.engine('.html', require('ejs').__express)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'html')

var status = false

function requireAuthentication(req, res, next) {
	// console.log("authentication")
	if (req.cookies.usersinfo) {
		var id = req.cookies.usersinfo.split("&"),
			username = id[0],
			password = id[1]
		users.find({
			username: username,
			password: password
		}, (err, user) => {
			if (user.length) {
				status = true
			}
		})
	}
	next()
}
app.all('*', requireAuthentication)

app.get("/", (req, res) => {
	res.render('index', {
		title: "index",
		login: status,
		username: "mooniitt"
	})
})

/*注册*/
app.get("/register", (req, res) => {
	res.render('register', {
		title: 'Register'
	})
})
app.post("/register", (req, res) => {
	var username = req.body.username,
		password = req.body.password
	users.find({
		username: username
	}, (err, user) => {
		if (user.length === 0) {
			new users({
				username: username,
				password: password
			}).save()
			res.redirect('/login')
				// res.send("register successed!")
		} else {
			res.send("wait 2000ms")
		}
	})
})

/*登录*/
app.get("/login", (req, res) => {
	res.render('login', {
		title: "Login"
	})
})
app.post("/login", (req, res) => {
	var username = req.body.username,
		password = req.body.password,
		id = `${username}&${password}`
	users.find({
		username: username,
		password: password
	}, (err, user) => {
		if (user.length != 0) {
			res.cookie("usersinfo", id)
			res.send(`welcome ${username}!!`)
		} else {
			res.send("this account is not exist or your password is wrong!")
		}
	})
})

/*退出登录*/
app.get("/loginout", (req, res) => {
	res.render("index", {
		login: false,
		title: 'index'
	})
})

app.get("/store", (req, res) => {
	res.render("store", {
		title: 'store'
	})
})

app.listen("3333", (err) => {
	if (!err) {
		console.log("Server on port 3333")
	}
})