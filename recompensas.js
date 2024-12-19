// Objeto que contiene las recompensas por rango
const rangos = {
    "Bronce 1": { victorias: 5, monedas: 200, gemas: 5 },
    "Bronce 2": { victorias: 10, monedas: 300, gemas: 10 },
    "Bronce 3": { victorias: 15, monedas: 400, gemas: 15 },
    "Plata 1": { victorias: 20, monedas: 500, gemas: 20 },
    "Plata 2": { victorias: 25, monedas: 700, gemas: 25 },
    "Plata 3": { victorias: 30, monedas: 900, gemas: 30 },
    "Oro 1": { victorias: 35, monedas: 1200, gemas: 35 },
    "Oro 2": { victorias: 40, monedas: 1500, gemas: 40 },
    "Oro 3": { victorias: 45, monedas: 1800, gemas: 45 },
    "Platino 1": { victorias: 50, monedas: 2200, gemas: 50 },
    "Platino 2": { victorias: 55, monedas: 2600, gemas: 55 },
    "Platino 3": { victorias: 60, monedas: 3000, gemas: 60 },
    "Diamante 1": { victorias: 65, monedas: 3500, gemas: 70 },
    "Diamante 2": { victorias: 70, monedas: 4000, gemas: 75 },
    "Diamante 3": { victorias: 75, monedas: 4500, gemas: 80 },
    "Rubí 1": { victorias: 80, monedas: 5000, gemas: 85 },
    "Rubí 2": { victorias: 85, monedas: 5500, gemas: 90 },
    "Rubí 3": { victorias: 90, monedas: 6000, gemas: 95 },
    "Esmeralda 1": { victorias: 95, monedas: 6500, gemas: 100 },
    "Esmeralda 2": { victorias: 100, monedas: 7000, gemas: 105 },
    "Esmeralda 3": { victorias: 105, monedas: 7500, gemas: 110 },
    "Amatista 1": { victorias: 110, monedas: 8000, gemas: 115 },
    "Amatista 2": { victorias: 115, monedas: 8500, gemas: 120 },
    "Amatista 3": { victorias: 120, monedas: 9000, gemas: 125 },
    "Critonit 1": { victorias: 125, monedas: 9500, gemas: 130 },
    "Critonit 2": { victorias: 130, monedas: 10000, gemas: 135 },
    "Critonit 3": { victorias: 135, monedas: 10500, gemas: 140 },
    "Energont 1": { victorias: 140, monedas: 11000, gemas: 150 },
    "Energont 2": { victorias: 145, monedas: 11500, gemas: 155 },
    "Energont 3": { victorias: 150, monedas: 12000, gemas: 160 },
    "Heroic 1": { victorias: 155, monedas: 12500, gemas: 165 },
    "Heroic 2": { victorias: 160, monedas: 13000, gemas: 170 },
    "Heroic 3": { victorias: 165, monedas: 13500, gemas: 175 },
    "Elite 1": { victorias: 170, monedas: 14000, gemas: 180 },
    "Elite 2": { victorias: 175, monedas: 14500, gemas: 185 },
    "Elite 3": { victorias: 180, monedas: 15000, gemas: 190 },
    "Master 1": { victorias: 185, monedas: 16000, gemas: 195 },
    "Master 2": { victorias: 190, monedas: 17000, gemas: 200 },
    "Master 3": { victorias: 195, monedas: 18000, gemas: 205 },
    "Deidad 1": { victorias: 200, monedas: 20000, gemas: 220 },
    "Deidad 2": { victorias: 210, monedas: 22000, gemas: 240 },
    "Deidad 3": { victorias: 220, monedas: 25000, gemas: 260 },
    "Infiniti": { victorias: 250, monedas: 30000, gemas: 300 }
  };
  
  // Función para calcular las recompensas
  function calcularRecompensas() {
    // Obtener los nombres de los jugadores
    const ganador = document.getElementById('jugadorGanador').value;
    const perdedor = document.getElementById('jugadorPerdedor').value;
  
    // Verificar si se ingresaron los nombres de los jugadores
    if (!ganador || !perdedor) {
      alert('Por favor, ingresa los nombres de ambos jugadores.');
      return;
    }
  
    // Obtener el rango de los jugadores (si es que tienen uno)
    const rangoGanador = document.getElementById('rangoGanador').value.trim();
    const rangoPerdedor = document.getElementById('rangoPerdedor').value.trim();
  
    // Verificar si los rangos existen en el objeto de rangos
    const tieneRangoGanador = rangos[rangoGanador];
    const tieneRangoPerdedor = rangos[rangoPerdedor];
  
    // Recompensa base para el ganador (entre 1000 y 2000 monedas, entre 5 y 10 gemas)
    const baseMonedasGanador = Math.floor(Math.random() * 1001) + 1000;
    const baseGemasGanador = Math.floor(Math.random() * 6) + 5;
  
    // Recompensa base para el perdedor (entre 500 y 1000 monedas, entre 1 y 5 gemas)
    const baseMonedasPerdedor = Math.floor(Math.random() * 501) + 500;
    const baseGemasPerdedor = Math.floor(Math.random() * 5) + 1;
  
    // Si el ganador tiene rango, se suman las recompensas de su rango
    let totalMonedasGanador = baseMonedasGanador;
    let totalGemasGanador = baseGemasGanador;
  
    if (tieneRangoGanador) {
      totalMonedasGanador += rangos[rangoGanador].monedas;
      totalGemasGanador += rangos[rangoGanador].gemas;
    }
  
    // Si el perdedor tiene rango, se dividen sus recompensas de rango a la mitad
    let totalMonedasPerdedor = baseMonedasPerdedor;
    let totalGemasPerdedor = baseGemasPerdedor;
  
    if (tieneRangoPerdedor) {
      const rangoMonedas = Math.round(rangos[rangoPerdedor].monedas / 2);
      const rangoGemas = Math.round(rangos[rangoPerdedor].gemas / 2);
      
      totalMonedasPerdedor += rangoMonedas;
      totalGemasPerdedor += rangoGemas;
    }
  
    // Mostrar los resultados
    document.getElementById('resultadoGanador').innerHTML = `
      <strong>${ganador} (Ganador):</strong><br>
      Monedas: ${totalMonedasGanador} <br>
      Gemas: ${totalGemasGanador} <br>
      Rango: ${rangoGanador || 'Sin rango'}<br>
    `;
  
    document.getElementById('resultadoPerdedor').innerHTML = `
      <strong>${perdedor} (Perdedor):</strong><br>
      Monedas: ${totalMonedasPerdedor} <br>
      Gemas: ${totalGemasPerdedor} <br>
      Rango: ${rangoPerdedor || 'Sin rango'}<br>
    `;
  }
  