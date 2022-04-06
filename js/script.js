function convert() {
  let celsius = parseFloat(document.getElementById('tc').value);
  let pulgadas = ("tc" / 2.54).toFixed();
  let yardas = ("tc" / 91.44).toFixed();
  document.getElementById("tf").innerHTML = pulgadas;
  document.getElementById("tk").innerHTML = yardas;
}
