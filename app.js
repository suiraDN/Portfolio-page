const header = document.querySelector("header");

window.addEventListener("scroll", function () {
	header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
	menu.classList.toggle("bx-x");
	navlist.classList.toggle("active");
};

window.onscroll = () => {
	menu.classList.remove("bx-x");
	navlist.classList.remove("active");
};

const sr = ScrollReveal({
	distance: "30px",
	duration: 2700,
	reset: true,
});

sr.reveal(".home-text", { delay: 350, origin: "left" });
sr.reveal(".home-img", { delay: 350, origin: "right" });

sr.reveal(".sub-service,.about,.portfolio,.service,.cta,.contact", {
	delay: 200,
	origin: "bottom",
});

// function sendEmail() {
// 	Email.send({
// 		SecureToken: "9f6bed1a-863b-4722-a095-451d2a566039",
// 		To: "dariusnaw@gmail.com",
// 		From: "dariusnaw@gmail.com",
// 		Subject: document.getElementById("subject").value,
// 		Body:
// 			"Name: " +
// 			document.getElementById("name").value +
// 			"<br> Email: " +
// 			document.getElementById("email").value +
// 			"<br> Message: " +
// 			document.getElementById("message").value,
// 	}).then((message) => alert(message));
// }

let nameErr = document.getElementById("name");
let emailErr = document.getElementById("email");
let subjectErr = document.getElementById("subject");
let messageErr = document.getElementById("message");
let submitErr = document.getElementById("submit_error");
let submitOk = document.getElementById("submit_ok");

function validateName() {
	let name = document.getElementById("name").value;

	if (name.lenght == 0) {
		nameErr.style.border = "1px solid red";
		nameErr.style.background = "#ffc8c8";
		return false;
	}
	if (!name.match(/([A-Za-z])\w+/g)) {
		nameErr.style.border = "1px solid red";
		nameErr.style.background = "#ffc8c8";

		return false;
	}
	nameErr.style.border = "1px solid green";
	nameErr.style.background = "#e8f0fe";

	return true;
}

function validateEmail() {
	let email = document.getElementById("email").value;

	if (email.lenght == 0) {
		emailErr.style.border = "1px solid red";
		emailErr.style.background = "#ffc8c8";
		return false;
	}
	if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
		emailErr.style.border = "1px solid red";
		emailErr.style.background = "#ffc8c8";
		return false;
	}
	emailErr.style.border = "1px solid green";
	emailErr.style.background = "#e8f0fe";
	return true;
}

function validateSubject() {
	let subject = document.getElementById("subject").value;

	if (subject.lenght == 0) {
		subjectErr.style.border = "1px solid red";
		subjectErr.style.background = "#ffc8c8";
		return false;
	}
	if (!subject.match(/([A-Za-z])\w+/g)) {
		subjectErr.style.border = "1px solid red";
		subjectErr.style.background = "#ffc8c8";
		return false;
	}
	subjectErr.style.border = "1px solid green";
	subjectErr.style.background = "#e8f0fe";
	return true;
}

function validateMessage() {
	let message = document.getElementById("message").value;
	let req = 10;
	let left = req - message.length;

	if (left > 0) {
		messageErr.style.border = "1px solid red";
		messageErr.style.background = "#ffc8c8";
		return false;
	}
	messageErr.style.border = "1px solid green";
	messageErr.style.background = "#e8f0fe";
	return true;
}

function validateForm() {
	if (
		!validateName() ||
		!validateEmail() ||
		!validateSubject() ||
		!validateMessage()
	) {
		submitErr.style.display = "block";
		submitErr.innerHTML = "<i class='bx bx-error' ></i> Incorrect values";
		setTimeout(function () {
			submitErr.style.display = "none";
		}, 4000);
		return false;
	} else {
		Email.send({
			SecureToken: "9f6bed1a-863b-4722-a095-451d2a566039",
			To: "dariusnaw@gmail.com",
			From: "dariusnaw@gmail.com",
			Subject: document.getElementById("subject").value,
			Body:
				"Name: " +
				document.getElementById("name").value +
				"<br> Email: " +
				document.getElementById("email").value +
				"<br> Message: " +
				document.getElementById("message").value,
		}).then((message) => console.log(message));
		submitOk.style.display = "block";
		submitOk.innerHTML =
			"<i class='bx bxs-check-circle'></i> Email send successfully";
		setTimeout(function () {
			submitOk.style.display = "none";
		}, 4000);
	}
}
