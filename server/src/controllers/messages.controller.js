const { successMessage } = require("../utils/resMessages/resMessages");

var messages = [];

function getMessages(req, res) {
  res.status(403).send({ ...successMessage(), resultados: messages });
}

function postMessage(req, res) {
  const user = req.user;
  messages.push({
    user: user.nickname,
    message: req.body.message,
  });
  res.send("se mandó todo");
}

module.exports = {
  getMessages,
  postMessage,
};
