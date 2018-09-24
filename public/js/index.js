var socket = io();
socket.on("connect", function() {
  console.log("Connected to server");
});

socket.on("disconnect", function() {
  console.log("Disconnected from server");
});

socket.on("newMessage", function(data) {
  console.log("New Message", data);

  jQuery("#messages").append(`<li>from ${data.from}: ${data.text}</li>`);
});


jQuery("#message-form").on("submit", function(e) {
  e.preventDefault();

  socket.emit(
    "createMessage",
    {
      from: "User",
      text: jQuery("#input-message").val()
    },
    function() {}
  );
});
