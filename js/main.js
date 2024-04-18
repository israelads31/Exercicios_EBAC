$(document).ready(function () {
  $('#telefone').mask('(00) 00000-0000', { placeholder: '(XX) XXXXX-XXXX' })
  $('#cpf').mask('000.000.000-40', { placeholder: 'XXX.XXX.XXX-XX' })
  $('#cep').mask('00000-000', { placeholder: 'XXXXX-XXX' })

  $('form').validate({
    rules: {
      nomeCompleto: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: true,
      },
      cpf: {
        required: true,
      },
      endereco: {
        required: true,
      },
      cep: {
        required: true,
      }
    },
    messages: {
      nomeCompleto: '* Por favor, adicione um nome',
      email: '* Por favor, adicione um email válido',
      telefone: '* Por favor, adicione um número válido',
      cpf: '* Por favor, adicione um CPF válido',
      endereco: '* Por favor, adicione um endereço válido',
      cep: '* Por favor, adicione um CEP válido',
    },
    submitHandler: function (form) {
      console.log(form);
    },
    invalidHandler: function (e, validador) {
      var camposIncorretos = validador.numberOfInvalids();
      if (camposIncorretos) {
        alert(`Existem ${camposIncorretos} campos incorretos`)
      }
    }
  })
})