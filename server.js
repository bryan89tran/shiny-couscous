const express = require("express");
const http = require("http");

// our localhost port
const PORT = 4001;

const app = express();
app.use(express.static("build"));

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./static/index.html"));
});

server = app.listen(PORT, function() {
  console.log(`http://localhost:${PORT}!`);
});

var io = require("socket.io")(server);

// This is what the socket.io syntax is like, we will work this later
io.on("connection", socket => {
  console.log("User connected");

  socket.on("SEND_MESSAGE", function(data) {
    io.emit("RECEIVE_MESSAGE", data);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
