const { successMessage } = require("../utils/resMessages/resMessages");
const { io } = require("../events.js");

var messages = [{ user: "nicok", message: "prueba" }];

function getMessages(req, res) {
  res.status(403).send({ ...successMessage(), resultados: messages });
}

function postMessage(req, res) {
  const user = req.user;
  const newMessage = {
    user: user.nickname,
    message: req.body.message,
  };
  messages.push(newMessage);
  res.json(successMessage("Message created"));
}

module.exports = {
  getMessages,
  postMessage,
};
