const authController = require("../controller/auth");
const router = express.Router();

router.get("/signup", authController.signup);

module.exports = router;
