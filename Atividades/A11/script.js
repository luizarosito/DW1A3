const API_BASE_URL = "https://viacep.com.br/ws/"
const API_FORMAT = "/json/"


/* Regra para buscar dados de um endereço baseado no CEP digitado */
const cep = document.getElementById("cep")

cep.addEventListener("blur", (e) => {

  let cep = e.target.value
  cep = cep.replace(/\D/g, "")

  if (cep != "") {
    const validacep = /^[0-9]{8}$/
    if (validacep.test(cep)) {
      const url = API_BASE_URL + cep + API_FORMAT
      fetch(url)
        .then(response => response.json())
        .then(data => {
          if (data.erro) {
            alert("CEP não encontrado")
          } else {
            atualizarEndereco(data)
          }
        })
        .catch(error => console.log(error))
    } else {
      alert("CEP inválido")
    }
  } else {
    limpaFormulario();
  }
})

function atualizarEndereco(data) {
  for (const campo in data) {
    if (document.querySelector("#" + campo)) {
      document.querySelector("#" + campo).value = data[campo]
    }
  }
}

function limpaFormulario() {
  document.querySelector("#cep").value = ""
  document.querySelector("#logradouro").value = ""
  document.querySelector("#bairro").value = ""
  document.querySelector("#localidade").value = ""
  document.querySelector("#uf").value = ""
}




/* Botão para copiar o endereço encontrado */
const btnCopiar = document.querySelector("#copiar-endereco")
btnCopiar.addEventListener("click", copiarEndereco)

function copiarEndereco() {
  if (document.querySelector("#logradouro").value == "") {
    alert("Você não pode copiar um endereço vazio.")
    return
  } else {
    const endereco = document.querySelector("#logradouro").value + ", " + document.querySelector("#bairro").value + ", " + document.querySelector("#localidade").value + ", " + document.querySelector("#uf").value

    navigator.clipboard.writeText(endereco)

    alert("Endereço copiado com sucesso.")
  }
}