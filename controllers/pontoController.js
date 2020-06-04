const Ponto = require("../models/Ponto");

let pontoController = {
	cadastrarPonto: (req, res) => {
		const { matricula } = req.body;
		Ponto.salvarCheckin(matricula);
		let teste = Ponto.listarPonto(matricula);
		console.log(teste)
		res.redirect("/resumo");
	},
	alterarLunchout: (req, res) => {
		const { matricula } = req.body;
		Ponto.salvarLunchout(matricula);
		let teste = Ponto.listarPonto(matricula);
		console.log(teste)
		res.redirect("/resumo");
	},
	alterarLunchin: (req, res) => {
		const { matricula } = req.body;
		Ponto.salvarLunchin(matricula);
		let teste = Ponto.listarPonto(matricula);
		console.log(teste)
		res.redirect("/resumo");
	},
	finalizarPonto: (req, res) => {
		const { matricula } = req.body;
		Ponto.salvarCheckout(matricula);
		let teste = Ponto.listarPonto(matricula);
		console.log(teste)
		res.redirect("/resumo");
	},
};

module.exports = pontoController;
