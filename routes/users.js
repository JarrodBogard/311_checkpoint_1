const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users");

router.get("/", usersController.listUsers);
router.get("/:id", usersController.showUsers);
router.post("/", usersController.createUser);
router.put("/:id", usersController.updatedUser);
router.delete("/:id", usersController.deleteUser);

module.exports = router;
