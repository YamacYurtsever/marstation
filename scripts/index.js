document.addEventListener("DOMContentLoaded", function () {
	document.querySelectorAll(".menu").forEach((menu) => {
		menu.addEventListener("click", function () {
			let pageName = this.querySelector(".strip p").innerHTML.toLowerCase();
			window.location.href = `${pageName}.html`;
		});
	});
});
