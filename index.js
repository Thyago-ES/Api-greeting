const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
	res.json([{ title: "Hello, world!", message: "Are you ok?" }]);
});

const port = process.env.PORT || 5000;
app.listen(port);
