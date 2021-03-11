



let nome = document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
       txtNome.innerHTML = 'Nome Inválido'
       txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
        emailOk = true
    } else {
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
    }
}

function validaAssunto () {
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto é muito garnde, digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
        assuntoOk = true
    } else {
        txtAssunto.style.display = 'none'
        
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true){
        alert ('Formulário enviado com sucesso!')
    } else {
        alert ('Preencha o formulário corretamente antes de enviar...')
    }
    
}

function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'

}

function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '250px'

}
/*
Case Sensitive - É uma linguagem que reconhece letras maiusculas e minusculas

por Tag: getElementeByTagName()
por Id: getElementById() 
por Nome: getElemetsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()
*/ 