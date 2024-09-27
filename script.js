function responsiveMenu() {
  var nav = document.getElementById("nav");
  if (nav.className === "responsive") {
    nav.className = "nav";
  } else {
    nav.className = "responsive";
  }
}

const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";

  const serviceID = "default_service";
  const templateID = "template_v0lvk2q";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Enviar Email";
      Swal.fire({
        title: "Email enviado",
        icon: "sucess",
        confirmButtonText: "Aceptar",
      });
    },
    (err) => {
      btn.value = "Enviar Email";
      alert(JSON.stringify(err));
    }
  );
});
