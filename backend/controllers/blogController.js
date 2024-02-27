const asyncHandler = require('express-async-handler');
const connection = require('../config/database');

// @desc    Get all blogs
// @route   GET /api/blogs
// @access  Private
const index = asyncHandler(async (req, res) => {
	db = connection();
	db.all('SELECT * FROM blogs', (err, rows) => {
		if (err) res.send(err);
		else res.json(rows);
	});
	db.close();
});
// @desc    Get a blog
// @route   GET /api/blogs/:id
// @access  Private
const show = asyncHandler(async (req, res) => {
	const id = req.params.id;
	db = connection();
	db.get('SELECT * FROM blogs WHERE id=?', [id], function (err, row) {
		if (err) res.send(err);
		else res.json(row);
	});
	db.close();
});
// @desc    Create a blog
// @route   POST /api/blogs
// @access  Private
const store = asyncHandler(async (req, res) => {
	const { title, excerpt, body } = req.body;
	db = connection();
	db.run(
		'INSERT INTO blogs VALUES (?, ?, ?)',
		[title, excerpt, body],
		function (err, row) {
			if (err) res.send(err);
			else res.json(row);
		}
	);
	db.close();
});
// @desc    UPDATE a blog
// @route   PUT /api/blogs/:id
// @access  Private
const update = asyncHandler(async (req, res) => {
	const id = req.params.id;
	const { title, excerpt, body } = req.body;
	db = connection();
	db.get(
		'UPDATE FROM blogs SET title=?, excerpt=?, body=?  WHERE id=?',
		[title, excerpt, body, id],
		function (err, row) {
			if (err) res.send(err);
			else res.json(row);
		}
	);
	db.close();
});
// @desc    DELETE a blog
// @route   DELETE /api/blogs/:id
// @access  Private
const destroy = asyncHandler(async (req, res) => {
	const id = req.params.id;
	db = connection();
	db.get('DELETE FROM blogs WHERE id=?', [id], function (err, row) {
		if (err) res.send(err);
		else res.json(row);
	});
	db.close();
});

module.exports = { index, show, store, update, destroy };
