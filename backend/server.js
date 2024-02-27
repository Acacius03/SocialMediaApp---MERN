const env = require('dotenv').config();
const express = require('express');
const app = express();

// MIDDLEWARE
// // needed middlewares in order to access request body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/blogs', require('./routes/blogRoutes'));

app.get('*', (req, res) => res.send('404 not found'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server Listens on port ${PORT}`);
});
