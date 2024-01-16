const router = require("express").Router();

router.use("/auth", require("./auth.routes.js"));
router.use("/messages", require("./messages.routes.js"));

module.exports = router;
