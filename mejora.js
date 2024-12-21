// Función para generar la mejora
function generarMejora(valor) {
    const nombre = document.getElementById('nombre').value;
    const vidaActual = parseInt(document.getElementById('vidaActual').value);
    const combateActual = parseInt(document.getElementById('combateActual').value);
  
    if (!nombre || isNaN(vidaActual) || isNaN(combateActual)) {
      alert('Por favor, ingresa todos los campos correctamente.');
      return;
    }
  
    let nuevaVida = vidaActual;
    let nuevoCombate = combateActual;
    let habilidadMejorada = '';
    let resultado = '';
  
    // Función para asignar mejoras aleatorias entre vida y combate
    function asignarMejoras(valor) {
      let puntosVida = 0;
      let puntosCombate = 0;
  
      // Mejora +1, +2 y +3 se distribuyen de manera aleatoria entre vida y combate
      if (valor === 1) {
        puntosVida = 1;
        puntosCombate = 1;
      } else if (valor === 2) {
        const combinacion = Math.floor(Math.random() * 3); // Combinaciones 1-1, 0-2, 2-0
        if (combinacion === 0) {
          puntosVida = 1;
          puntosCombate = 1;
        } else if (combinacion === 1) {
          puntosVida = 0;
          puntosCombate = 2;
        } else {
          puntosVida = 2;
          puntosCombate = 0;
        }
      } else if (valor === 3) {
        // Mejora +3: Se distribuyen aleatoriamente los 3 puntos entre vida y combate
        const puntosTotales = 3;
        const puntosVidaAleatorio = Math.floor(Math.random() * (puntosTotales + 1)); // Puede ser entre 0 y 3
        const puntosCombateAleatorio = puntosTotales - puntosVidaAleatorio; // El resto va a combate
  
        puntosVida = puntosVidaAleatorio;
        puntosCombate = puntosCombateAleatorio;
      }
  
      return { puntosVida, puntosCombate };
    }
  
    if (valor === 1) {
      // Mejora +1: Se mejora una sola habilidad, vida o combate
      const elegirHabilidad = Math.random() < 0.5 ? 'vida' : 'combate';
      if (elegirHabilidad === 'vida') {
        nuevaVida = vidaActual + 1;
        habilidadMejorada = 'vida';
      } else {
        nuevoCombate = combateActual + 1;
        habilidadMejorada = 'combate';
      }
    } else if (valor === 2) {
      // Mejora +2: Se mejora entre 3 combinaciones posibles (1-1, 0-2, 2-0)
      const combinacion = Math.floor(Math.random() * 3); // 0, 1, o 2
  
      // Aquí garantizamos que siempre se sumen exactamente 2 puntos.
      if (combinacion === 0) {
        nuevaVida = vidaActual + 1;
        nuevoCombate = combateActual + 1;
        habilidadMejorada = '1-1';
      } else if (combinacion === 1) {
        nuevaVida = vidaActual + 0;
        nuevoCombate = combateActual + 2;
        habilidadMejorada = '0-2';
      } else if (combinacion === 2) {
        nuevaVida = vidaActual + 2;
        nuevoCombate = combateActual + 0;
        habilidadMejorada = '2-0';
      }
    } else if (valor === 3) {
      // Mejora +3: Se distribuyen los 3 puntos aleatoriamente entre vida y combate
      const { puntosVida, puntosCombate } = asignarMejoras(3);
  
      nuevaVida = vidaActual + puntosVida;
      nuevoCombate = combateActual + puntosCombate;
      habilidadMejorada = 'ambas';
    }
  
    // Mostrar el resultado con colores
    if (habilidadMejorada === 'vida') {
      resultado = `
        <h3>Resultado de la Mejora para ${nombre}:</h3>
        <p><span style="color: red;"><strong>Vida Actual:</strong> ${vidaActual}</span> → <span style="color: green;">${nuevaVida}</span></p>
        <p><strong>Combate Actual:</strong> <span style="color: black;">${combateActual}</span></p>
      `;
    } else if (habilidadMejorada === 'combate') {
      resultado = `
        <h3>Resultado de la Mejora para ${nombre}:</h3>
        <p><strong>Vida Actual:</strong> <span style="color: black;">${vidaActual}</span></p>
        <p><span style="color: red;"><strong>Combate Actual:</strong> ${combateActual}</span> → <span style="color: green;">${nuevoCombate}</span></p>
      `;
    } else if (habilidadMejorada === 'ambas') {
      resultado = `
        <h3>Resultado de la Mejora para ${nombre}:</h3>
        <p><span style="color: red;"><strong>Vida Actual:</strong> ${vidaActual}</span> → <span style="color: green;">${nuevaVida}</span></p>
        <p><span style="color: red;"><strong>Combate Actual:</strong> ${combateActual}</span> → <span style="color: green;">${nuevoCombate}</span></p>
      `;
    } else if (habilidadMejorada === '1-1') {
      resultado = `
        <h3>Resultado de la Mejora para ${nombre}:</h3>
        <p><span style="color: red;"><strong>Vida Actual:</strong> ${vidaActual}</span> → <span style="color: green;">${nuevaVida}</span></p>
        <p><span style="color: red;"><strong>Combate Actual:</strong> ${combateActual}</span> → <span style="color: green;">${nuevoCombate}</span></p>
      `;
    } else if (habilidadMejorada === '0-2') {
      resultado = `
        <h3>Resultado de la Mejora para ${nombre}:</h3>
        <p><strong>Vida Actual:</strong> <span style="color: black;">${vidaActual}</span></p>
        <p><span style="color: red;"><strong>Combate Actual:</strong> ${combateActual}</span> → <span style="color: green;">${nuevoCombate}</span></p>
      `;
    } else if (habilidadMejorada === '2-0') {
      resultado = `
        <h3>Resultado de la Mejora para ${nombre}:</h3>
        <p><span style="color: red;"><strong>Vida Actual:</strong> ${vidaActual}</span> → <span style="color: green;">${nuevaVida}</span></p>
        <p><strong>Combate Actual:</strong> <span style="color: black;">${combateActual}</span></p>
      `;
    }
  
    document.getElementById('resultado-cuadro').innerHTML = resultado;
  }
  
