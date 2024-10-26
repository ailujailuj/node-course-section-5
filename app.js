const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()

const homeRoutes = require('./routes/home');
const usersRoutes = require('./routes/user');

app.use(bodyParser.urlencoded({extended: false}))

app.use(homeRoutes)
app.use(usersRoutes)

const rootDir = require('./util/path')

app.use(express.static(path.join(rootDir, 'public')))

app.listen(3000);