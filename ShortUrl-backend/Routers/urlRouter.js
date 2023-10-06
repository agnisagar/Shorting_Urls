const exprees = require("express");
const {
  newUrl,
  go,
  visitHistory,
  getUrlById,
  getAllUrl,
  deleteUrlById,
} = require("../Controllers/urlController");
const router = exprees.Router();
router.route("/").post(newUrl);
router.route("/:stortUrl").get(go);
router.route("/getAllUrl/find/").get(getAllUrl);
router.route("/getUrlById/:id").get(getUrlById);
router.route("/deleteUrlById/:id").delete(deleteUrlById);

router.route("/analytics/:shortId").get(visitHistory);

module.exports = router;
