const router = require("express").Router();

const charactersController = require("./controller/characters.controller");
const auth = require("../../middlewares/auth");

router.get("/", auth.checkToken, charactersController.getCharacters);
router.get("/detail", auth.checkToken, charactersController.getCharacterDetail);
router.get("/character", auth.checkToken, charactersController.getCharacterById);
router.post("/", charactersController.createCharacters);
router.put("/:characterId", charactersController.updateCharacter);
router.delete("/:characterId", charactersController.deleteCharacter);

// update de los productos x carrito y delete carrito

module.exports = router;
