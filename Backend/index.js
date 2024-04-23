const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

//Connect mongoDB database
const mongooseURI = "mongodb://127.0.0.1:27017/twitterClone";
mongoose.connect(mongooseURI);

//user Schema
const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
});
const User = new mongoose.model('User', UserSchema);

//post schema
const PostSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    title: String,
    content: String,
})
const Post = new mongoose.model('Post', PostSchema);

//Query Schema
const QuerySchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    query: String
});
const Query = new mongoose.model('Query', QuerySchema);

//verify token middleware
function verifyToken(req, res, next) {
    const token = req.headers['authentication'];
    if (!token) res.status(403).send('A token is requried for authentication');
    try {
        req.user = jwt.verify(token.split(' ')[1], 'Your_Secret_Key');
        next();
    } catch (error) {
        res.status(500).send('Invalid token');
    }
}

//register
app.post('/register', async (req, res) => {
    try {
        const hashedPass = bcrypt.hashSync(req.body.password, 8);
        const user = new User({ username: req.body.username, password: hashedPass });
        await user.save();
        res.status(201).send("User registered successfully");
    } catch (error) {
        res.status(500).send(`Error registering user`);
    }
});

//login
app.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (user) {
            if (bcrypt.compareSync(req.body.password, user.password)) {
                const token = jwt.sign({ userId: user._id }, 'Your_Secret_Key');
                res.json(token);
            } else {
                res.status(401).send("Invalid Credentials");
            }
        } else {
            res.status(404).send('User Not Found');
        }
    } catch (error) {
        res.status(500).send('Error during login');
    }
})

//create post
app.post('/post', verifyToken, async (req, res) => {
    try {
        const post = new Post({ userId: req.user.userId, title: req.body.title, content: req.body.content });
        await post.save();
        res.status(201).send(`Post created successfully`);
    } catch (error) {
        res.status(500).send('Error creating post');
    }
})

//get all posts
app.get('/posts', verifyToken, async (req, res) => {
    try {
        const posts = await Post.find();
        res.send(posts);
    } catch (error) {
        res.status(500).send("Posts not found");
    }
})

//to post Query
app.post('/query', async (req, res) => {
    try {
        const query = new Query({
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            query: req.body.query
        });
        await query.save();
        res.status(201).send(`Query posted Successfully`);

    } catch (error) {
        res.status(500).send(`Error posting query`);
    }
})

const port = 3000;
app.listen(port, () => {
    console.log(`Listening to port no. ${port}`);
})