const { successMessage } = require("../utils/resMessages/resMessages");
const { io } = require("../events.js");

var messages = [{ nickname: "nicok", message: "prueba" }];

function getMessages(req, res) {
  res.send({ ...successMessage(), resultados: messages });
}

function postMessage(req, res) {
  console.log(req.user);
  const user = req.user;
  const newMessage = {
    nickname: user.nickname,
    message: req.body.message,
  };
  messages.push(newMessage);
  res.json(successMessage("Message created"));
}

module.exports = {
  getMessages,
  postMessage,
};
