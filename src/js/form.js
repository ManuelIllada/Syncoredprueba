const formulario = document.queryElementById("formulario");
const registro = document.queryElementById("registro");
const exito = document.queryElementById("exito");

formulario.addEventListener("submit", async (e) => {
  e.preventDefault();

  const respuesta = await fetch(
    "https://sheet.best/api/sheets/0e908ffd-afc2-4dde-8c5f-a46b2cddc8fd",
    {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Nombre: formulario.userName.value,
        Email: formulario.userEmail.value,
        Teléfono: formulario.userPhone.value,
        "Deja un mensaje...": formulario.userMessage.value,
      }),
    }
  );

  console.log(respuesta);

  registro.classList.remove("activo");
  exito.classList.add("activo");
});
