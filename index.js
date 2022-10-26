const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send(courses);
})

app.get("/courses/:id", (req, res) => {
    const id = req.params.id;
    const course = courses.find(curs => curs.id == id);
    res.send(course);
})

app.listen(port, () => {
    console.log(`esho shikhi server running on port ${port}`);
})

// vercel Api link : https://esho-shikhi-server.vercel.app