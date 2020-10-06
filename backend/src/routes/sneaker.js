const express = require("express");
const router = express.Router();
const {
  list,
  create,
  sneakerById,
  sneakerDetails,
} = require("../controller/sneakerController");

router.get("/sneaker", list);
router.get("/sneaker/par/:sneakerById", sneakerDetails);
router.post("/sneaker/create", create);

router.param("sneakerById", sneakerById);

module.exports = router;
