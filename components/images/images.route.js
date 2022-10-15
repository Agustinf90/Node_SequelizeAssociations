const router = require("express").Router();
const mysql = require("mysql");

const uploadController = require("../images/controller/images.controller");
const isAdmin = require("../../middlewares/isAdmin");

router.post(
  "/",
  isAdmin.isAdmin,
  uploadController.upload,
  uploadController.uploadFile
);

module.exports = router;
