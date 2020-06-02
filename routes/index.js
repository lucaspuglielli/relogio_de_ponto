const express = require("express");
const router = express.Router();
const pontoController = require("../controllers/pontoController");

/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", { title: "Ponto" });
});

router.get("/resumo", function (req, res, next) {
	res.render("resumo", { title: "Resumo" });
});

router.get("/checkin", function (req, res, next) {
	res.render("checkin", { title: "Check-in" });
});
router.post("/checkin", pontoController.cadastrarPonto);

router.get("/lunchout", function (req, res, next) {
	res.render("lunchout", { title: "Lunch-out" });
});
router.put("/lunchout", pontoController.alterarLunchout);

router.get("/lunchin", function (req, res, next) {
	res.render("lunchin", { title: "Lunch-in" });
});
router.put("/lunchin", pontoController.alterarLunchin);

router.get("/checkout", function (req, res, next) {
	res.render("checkout", { title: "Check-out" });
});
router.put("/checkout", pontoController.finalizarPonto);

module.exports = router;
