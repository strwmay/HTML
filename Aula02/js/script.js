botao = () => {
    alert(`Olá, eu sou um botão!`)
}

const enviar=()=> {
    let nome = document.getElementById("nome").value
    document.getElementById("resposta").innerHTML = `<h2>Seu formulário foi enviado com sucesso!</h2>`
if(nome == ""){
    alert("Boas vindas!")
} else {
    alert(`Olá ${nome}, boas vindas!`)}
}