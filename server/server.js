const path = require("path");
const http = require("http");
const express = require("express");
const socketIO = require("socket.io");

const publicPath = path.join(__dirname, "../public");
const port = process.env.PORT || 3000;

var app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

io.on("connection", socket => {
  console.log("Now user connected");

  socket.emit("newEmail", {
    from: "rafa@example.com",
    text: "Que lo que",
    createAt: 123
  });

  socket.emit("newMessage", {
    from: "edhyel@example.com",
    text: "8Fi9",
    createAt: 12
  });

  socket.on("createMessage", newMessage => {
    console.log("createMessage", newMessage);
  });

  socket.on("disconnect", () => {
    console.log("User was disconnected");
  });
});

console.log(publicPath);

server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
