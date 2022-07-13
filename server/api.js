const express = require("express");
const cors = require("cors");
const app = express();

const postsController = require("./controllers/posts")

app.use(cors());
app.use(express.json());

app.use('/posts', postsController)

module.exports = app;

// const express = require('express');
// const cors = require('cors');

// const server = express();
// server.use(cors());
// server.use(express.json());

// const dogRoutes = require('./controllers/dogs')
// server.use('/dogs', dogRoutes)

// // Root route
// server.get('/', (req, res) => res.send('Hello, client!'))

// module.exports = server
