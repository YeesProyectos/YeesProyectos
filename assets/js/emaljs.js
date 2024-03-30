// emailjs.send("service_4n26u3m", "template_q5uvj2v", {
// 	to_name: "Carlos",
// 	message: "Hola",
// 	to_email: "caleman9791@gmail.com",
// });
(function () {
	emailjs.init("xNMh6_nPnciY4lgs4");
})();


document.addEventListener("DOMContentLoaded", (event) => {
	function enviarCorreo(nombre, mensaje, correo) {
		var templateParams = {
			to_name: nombre,
			message: mensaje,
			to_email: correo,
		};

		emailjs.send('service_4n26u3m', 'template_q5uvj2v', templateParams)
			.then(function (response) {
				console.log('SUCCESS!', response.status, response.text);
			}, function (error) {
				console.log('FAILED...', error);
			});
	}
	alert("DOMContentLoaded");
});
