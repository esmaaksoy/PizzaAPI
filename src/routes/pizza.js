"use strict";

const router = require("express").Router();

const pizza = require("../controllers/pizza");
const { isAdmin } = require("../middlewares/permissions");

const upload = require("../middlewares/upload");

router
  .route("/")
  .get(pizza.list)
  .post(isAdmin, upload.array("images"), pizza.create);

router
  .route("/:id")
  .get(pizza.read)
  .put(isAdmin, upload.array("images"), pizza.update)
  .patch(isAdmin, upload.array("images"), pizza.update)
  .delete(isAdmin, pizza.delete);

module.exports = router;
