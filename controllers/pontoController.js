const Ponto = require("../models/Ponto");

let pontoController = {
	cadastrarPonto: (req, res) => {
		const { matricula } = req.body;
		Ponto.salvarCheckin(matricula);
		let ponto = Ponto.listarPonto(matricula);
		console.log(ponto)
		res.render("resumo", { title: "Resumo" , ponto});
	},
	alterarLunchout: (req, res) => {
		const { matricula } = req.body;
		Ponto.salvarLunchout(matricula);
		let ponto = Ponto.listarPonto(matricula);
		console.log(ponto)
		res.render("resumo", { title: "Resumo" , ponto});
	},
	alterarLunchin: (req, res) => {
		const { matricula } = req.body;
		Ponto.salvarLunchin(matricula);
		let ponto = Ponto.listarPonto(matricula);
		console.log(ponto)
		res.render("resumo", { title: "Resumo" , ponto});
	},
	finalizarPonto: (req, res) => {
		const { matricula } = req.body;
		Ponto.salvarCheckout(matricula);
		let ponto = Ponto.listarPonto(matricula);
		console.log(ponto)
		res.render("resumo", { title: "Resumo" , ponto});
	},
};

module.exports = pontoController;
