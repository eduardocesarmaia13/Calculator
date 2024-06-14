function calcular(tipo, valor) {
  var display = document.getElementById('resultado');

  if (tipo === 'acao') {
      if (valor === 'c') {
          display.value = '';
      } else if (['+', '-', '*', '/', '.'].includes(valor)) {
          display.value += valor;
      } else if (valor === '=') {
          try {
              display.value = eval(display.value);
          } catch (e) {
              display.value = 'Erro';
          }
      }
  } else if (tipo === 'valor') {
      display.value += valor;
  }
}
