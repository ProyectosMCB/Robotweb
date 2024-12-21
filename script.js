document.addEventListener('DOMContentLoaded', () => {
  const iniciar = document.getElementById('iniciar');
  const siguiente = document.getElementById('siguiente');
  const combateArea = document.getElementById('combate-area');
  const setup = document.getElementById('setup');
  const cuadrosContainer = document.getElementById('cuadros-container');

  let nombres = { red: '', blue: '' };
  let turnos = [];
  const colores = ['red', 'blue'];

  iniciar.addEventListener('click', () => {
    const nombreRojo = document.getElementById('nombreRojo').value;
    const nombreAzul = document.getElementById('nombreAzul').value;

    if (nombreRojo && nombreAzul) {
      nombres = { red: nombreRojo, blue: nombreAzul };
      
      // Desaparecer cuadros con los nombres
      const cuadros = document.querySelectorAll('.box');
      cuadros.forEach((cuadro) => {
        cuadro.classList.add('cuadro-desapareciendo');
        cuadro.addEventListener('animationend', () => cuadro.remove()); // Elimina el cuadro tras la animación
      });
      
      // Desaparecer el botón "Iniciar"
      iniciar.classList.add('cuadro-desapareciendo');
      iniciar.addEventListener('animationend', () => iniciar.remove()); // Elimina el botón tras la animación

      // Mostrar el área de combate
      setup.classList.add('hidden');
      combateArea.classList.remove('hidden');
      generarTurnos();
      mostrarTurno();
    } else {
      alert('Debe ingresar nombres para ambos colores.');
    }
  });

  siguiente.addEventListener('click', mostrarTurno);

  function generarTurnos() {
    let lastColor = null;
    let count = 0;

    // Generar turnos alternados sin límite
    for (let i = 0; i < 100; i++) {
      let color;
      do {
        color = colores[Math.floor(Math.random() * colores.length)];
      } while (color === lastColor && count >= 2);

      turnos.push(color);
      count = color === lastColor ? count + 1 : 1;
      lastColor = color;
    }
  }

  function mostrarTurno() {
    const color = turnos.shift();
    if (color) {
      // Desaparecer cuadros anteriores
      const cuadrosPrevios = document.querySelectorAll('.cuadro-turno');
      cuadrosPrevios.forEach((cuadro) => {
        cuadro.classList.add('cuadro-desapareciendo');
        cuadro.addEventListener('animationend', () => cuadro.remove());
      });

      // Mostrar el nuevo turno
      const cuadro = document.createElement('div');
      cuadro.className = `cuadro-turno ${color}`;
      cuadro.textContent = nombres[color];
      cuadrosContainer.appendChild(cuadro);
    }
  }
});

