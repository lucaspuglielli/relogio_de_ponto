const Ponto = require("../models/Ponto");

let pontoController = {
	cadastrarPonto: (req, res) => {
		const { matricula } = req.body;
		Ponto.salvarCheckin(matricula);
		res.redirect("/resumo");
	},
	alterarLunchout: (req, res) => {
		const { matricula } = req.body;
		Ponto.salvarLunchout(matricula);
		res.redirect("/resumo");
	},
	alterarLunchin: (req, res) => {
		const { matricula } = req.body;
		Ponto.salvarLunchin(matricula);
		res.redirect("/resumo");
	},
	finalizarPonto: (req, res) => {
		const { matricula } = req.body;
		Ponto.salvarCheckout(matricula);
		res.redirect("/resumo");
	},
};

module.exports = pontoController;
