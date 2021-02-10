const express = require("express");
const { prototype } = require("module");
const app = express();

app.listen(3000, () => {
	console.log("listening at 3000");
});
app.use(express.static("public"));
