const { Router } = require("express");
const controllers = require("../controllers");
const middleware = require("../middleware")

const router = Router();

router.get("/", controllers.getAll);
router.get("/:id",  controllers.getOne);
router.post("/", middleware.postValidation, controllers.create);
router.put("/:id",  controllers.edit);
router.delete("/:id",  controllers.delete);

module.exports = router;