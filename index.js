const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
	res.json([{ title: "Hello, world!", message: "Are you ok?" }]);
});

app.listen(port);
