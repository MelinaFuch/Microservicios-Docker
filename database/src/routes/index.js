const { Router } = require("express");
const controllers = require("../controllers");
const { validateModel } = require("../middleware");

const router = Router();

router.get("/:model", validateModel, controllers.getAll);
router.get("/:model/:id", validateModel, controllers.getOne);
router.post("/:model", validateModel, controllers.create);
router.put("/:model/:id", validateModel, controllers.edit);
router.delete("/:model/:id", validateModel, controllers.delete);

module.exports = router;