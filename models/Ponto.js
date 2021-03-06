const fs = require("fs");

let ponto = fs.readFileSync("ponto.json", { encoding: "utf-8" });

ponto = JSON.parse(ponto);

const fecharPonto = (ponto) => {
	fs.writeFileSync("ponto.json", JSON.stringify(ponto));
};

function listarPonto(matricula) {
	let existe = ponto.filter((busca) => busca.matricula == matricula);
	if (existe.length > 0){
		return existe[existe.length - 1]
	} else {
		let pontoVazio = {
			matricula: "Não encontrada",
			checkin: "",
			almocoout: "",
			almocoin: "",
			checkout: "",
		}
		return pontoVazio
	}
}

function currentTime(date) {
	let newDate = new Date(date.getTime() - /*date.getTimezoneOffset()*/ 180*60*1000);
	let ano = newDate.getFullYear();
	let mes = newDate.getMonth();
	let dia = newDate.getDate();
	let hora = newDate.getHours();
	let min = newDate.getMinutes();
	let seg = newDate.getSeconds();

	function checkNumber(i) {
		if (i < 10) {i = "0" + i};
		return i;
	}

	mes = checkNumber(mes + 1);
	dia = checkNumber(dia);
	hora = checkNumber(hora);
	min = checkNumber(min);
	seg = checkNumber(seg);


	newDate = `${hora}:${min}:${seg} - ${dia}/${mes}/${ano}`

	return newDate;
}

function salvarCheckin(matricula) {
	let existe = ponto.filter((busca) => busca.matricula == matricula);
	if (existe.length > 0 && existe[existe.length - 1].checkout == "") {
		console.log("Check-in ja realizado");
	} else {
		let checkin = new Date();
		let novoPonto = {
			matricula,
			checkin: currentTime(checkin),
			almocoout: "",
			almocoin: "",
			checkout: "",
		};
		ponto.push(novoPonto);
		console.log("Check-in realizado com sucesso");
		fecharPonto(ponto);
	}
}

function salvarLunchout(matricula) {
	let existe = ponto.filter((busca) => busca.matricula == matricula);
	if (
		existe.length > 0 &&
		existe[existe.length - 1].almocoout != "" &&
		existe[existe.length - 1].checkout == ""
	) {
		console.log("Lunch-out ja realizado");
	} else {
		for (let i = 0; i < ponto.length; i++) {
			if (ponto[i].matricula == matricula && ponto[i].almocoout == "") {
				let almocoout = new Date();
				ponto[i].almocoout = currentTime(almocoout);
				console.log("Lunch-out realizado com sucesso");
				fecharPonto(ponto);
			}
		}
	}
	if (existe.length == 0) {
		console.log("Check-in não realizado");
	}
}

function salvarLunchin(matricula) {
	let existe = ponto.filter((busca) => busca.matricula == matricula);
	if (
		existe.length > 0 &&
		existe[existe.length - 1].almocoout != "" &&
		existe[existe.length - 1].almocoin != "" &&
		existe[existe.length - 1].checkout == ""
	) {
		console.log("Lunch-in ja realizado");
	} else {
		if (
			existe.length > 0 &&
			existe[existe.length - 1].almocoout == "" &&
			existe[existe.length - 1].checkout == ""
		) {
			console.log("Lunch-out não realizado");
		} else {
			for (let i = 0; i < ponto.length; i++) {
				if (ponto[i].matricula == matricula && ponto[i].almocoin == "") {
					let almocoin = new Date();
					ponto[i].almocoin = currentTime(almocoin);
					console.log("Lunch-in realizado com sucesso");
					fecharPonto(ponto);
				}
			}
		}
	}
	if (existe.length == 0) {
		console.log("Check-in não realizado");
	}
}

function salvarCheckout(matricula) {
	let existe = ponto.filter((busca) => busca.matricula == matricula);
	if (existe.length > 0 && existe[existe.length - 1].checkout != "") {
		console.log("Check-out ja realizado");
	} else {
		if (
			(existe.length > 0 &&
				existe[existe.length - 1].almocoout == "" &&
				existe[existe.length - 1].checkout == "") ||
			(existe.length > 0 &&
				existe[existe.length - 1].almocoin == "" &&
				existe[existe.length - 1].checkout == "")
		) {
			for (let i = 0; i < ponto.length; i++) {
				if (ponto[i].matricula == matricula && ponto[i].checkout == "") {
					let checkout = new Date();
					ponto[i].almocoout = "Não realizado";
					ponto[i].almocoin = "Não realizado";
					ponto[i].checkout = currentTime(checkout);
					console.log("Check-out realizado com sucesso");
					fecharPonto(ponto);
				}
			}
		} else {
			for (let i = 0; i < ponto.length; i++) {
				if (ponto[i].matricula == matricula && ponto[i].checkout == "") {
					let checkout = new Date();
					ponto[i].checkout = currentTime(checkout);
					console.log("Check-out realizado com sucesso");
					fecharPonto(ponto);
				}
			}
		}
	}
	if (existe.length == 0) {
		console.log("Check-in não realizado");
	}
}



module.exports = {
	listarPonto,
	salvarCheckin,
	salvarLunchout,
	salvarLunchin,
	salvarCheckout,
};
