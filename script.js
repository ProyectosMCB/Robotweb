document.addEventListener('DOMContentLoaded', () => {
  const iniciar = document.getElementById('iniciar');
  const siguiente = document.getElementById('siguiente');
  const combateArea = document.getElementById('combate-area');
  const setup = document.getElementById('setup');
  const cuadrosContainer = document.getElementById('cuadros-container');

  let nombres = { red: '', blue: '' };
  let turnos = [];
  const colores = ['red', 'blue'];

  // Lógica de inicialización del combate
  iniciar.addEventListener('click', () => {
    const nombreRojo = document.getElementById('nombreRojo').value;
    const nombreAzul = document.getElementById('nombreAzul').value;

    if (nombreRojo && nombreAzul) {
      nombres = { red: nombreRojo, blue: nombreAzul };
      setup.classList.add('hidden');
      combateArea.classList.remove('hidden');
      generarTurnos();
      mostrarTurno();
    } else {
      alert('Debe ingresar nombres para ambos colores.');
    }
  });

  // Evento para mostrar el siguiente turno
  siguiente.addEventListener('click', mostrarTurno);

  // Función para generar los turnos de forma alternada
  function generarTurnos() {
    let lastColor = null;
    let count = 0;

    // Generar hasta 20 turnos alternados, max 2 turnos consecutivos por color
    for (let i = 0; i < 20; i++) {
      let color;
      do {
        color = colores[Math.floor(Math.random() * colores.length)];
      } while (color === lastColor && count >= 2); // Evitar más de 2 turnos consecutivos

      turnos.push(color);
      count = color === lastColor ? count + 1 : 1;
      lastColor = color;
    }
  }

  // Función para mostrar el siguiente turno en pantalla
  function mostrarTurno() {
    const color = turnos.shift();  // Sacamos el siguiente turno del array
    if (color) {
      const cuadro = document.createElement('div');
      cuadro.className = `cuadro-turno ${color}`;
      cuadro.textContent = nombres[color];

      cuadrosContainer.appendChild(cuadro);

      // Si ya no hay más turnos, ocultamos el botón "Siguiente"
      if (turnos.length === 0) {
        siguiente.classList.add('hidden');
      }
    }
  }
});
