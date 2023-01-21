import express from "express";
import postsRouter from "./routes/posts";
import bodyParser from "body-parser";
import cors from "express"

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercepts OPTIONS method
    if ('OPTIONS' === req.method) {
      // respond with 200
      res.send(200);
    }
    else {
    // move on
      next();
    }
});

app.options("/*", (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.send(200);
  });


app.use('/api/posts', postsRouter)

export default app