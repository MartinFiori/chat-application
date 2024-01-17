const router = require("express").Router();
const { isAuth } = require("../middlewares/isAuth.middleware");
const {
  getMessages,
  postMessage,
} = require("../controllers/messages.controller");

router.get("/", [isAuth], getMessages);
router.post("/", [isAuth], postMessage);

module.exports = router;
