let feldolgoz = document.querySelector("#feldolgoz");

feldolgoz.addEventListener("click", async (event) => {
  event.preventDefault();
  const cim = document.querySelector("#cim").value;
  const hossz = Number(document.querySelector("#hossz").value);
  const plakat = document.querySelector("#plakat").value;
  const idopontok = document.querySelector("#idopontok").value;
  const arkategoria = document.querySelector("#arkategoria").value;

  // console.log(cim, hossz, plakat, idopontok, arkategoria);
  const response = await fetch("/api/mozi/ujfilm", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ cim, hossz, plakat, idopontok, arkategoria }),
  });

  const valasz = await response.json();

  if (response.ok) {
    window.alert(valasz.msg);
    window.location.replace("/api/mozi/filmek");
  }
});
