function iniciarContador() {
  const destino = new Date('2025-12-04T00:00:00');
  const contenedor = document.getElementById('contador');
  if (!contenedor) return;

  const pad = (n) => String(n).padStart(2, '0');

  function actualizarContador() {
    const ahora = new Date();
    const diferencia = destino - ahora;

    if (diferencia <= 0) {
      contenedor.innerHTML = `
        <span>00 días</span>
        <span>00 hs</span>
        <span>00 min</span>
        <span>00 seg</span>
      `;
      clearInterval(intervalo);
      return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
    const segundos = Math.floor((diferencia / 1000) % 60);

    contenedor.innerHTML = `
      <span>${pad(dias)} días</span>
      <span>${pad(horas)} hs</span>
      <span>${pad(minutos)} min</span>
      <span>${pad(segundos)} seg</span>
    `;
  }

  const intervalo = setInterval(actualizarContador, 1000);
  actualizarContador();
}

iniciarContador();