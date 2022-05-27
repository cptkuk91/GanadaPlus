const authController = require("../controller/auth");
const router = require("express").Router();
router.get("/signup", authController.signUp);
module.exports = router;
//# sourceMappingURL=auth.js.map