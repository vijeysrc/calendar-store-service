var express = require("express"),
    app = express(),
    port = 8000;

app.use(express.static("examples/angular"));
app.use(express.static("dist"));
app.use(express.static("node_modules/bootstrap/dist"));
app.use(express.static("node_modules/angular"));

app.listen(port, function () {
  console.log("Serving AngularJs example app at ", port);
});
