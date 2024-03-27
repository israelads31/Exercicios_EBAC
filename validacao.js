document.getElementById('meuFormulario').addEventListener('submit', function (e) {
  e.preventDefault();

  const campoA = document.getElementById('campoA').value;
  const campoB = document.getElementById('campoB').value;

  if (parseInt(campoB) > parseInt(campoA)) {
    document.getElementById('mensagem').textContent = 'Formulário validado com sucesso!';
    document.getElementById('mensagem').style.color = 'green';
  } else {
    document.getElementById('mensagem').textContent = 'Formulário não foi validado.';
    document.getElementById('mensagem').style.color = 'red';
  }
});