'use strict'

import {getFilmes, getFilme, deleteFilme, postFilme} from "./filmes.js"

const nome = document.getElementById('nome')
const sinopse = document.getElementById('sinopse')
const dataNascimento = document.getElementById('dataNascimento ')
const sexo = document.getElementById('sexo')
const cadastrar = document.getElementById('cadastrar')

cadastrar.addEventListener('click' , async() => {

   try {
    const nomeInput = nome.value
    const sinopseIpunt = sinopse.value
    const dataNascimentoInput = dataNascimento .value
    const sexoInput = sexo.value
    const insert = {
        nome: nomeInput,
        sinopse: sinopseIpunt,
        data_nascimento: dataNascimentoInput,
        sexo: sexoInput,
        
    }

    const teste = await postFilme(insert)
    console.log(teste);
    console.table(insert)
    if(insert){
         window.location.href = '../telaCms/ator.hmtl'
    }
    else{
        alert("errooooo")
    }
   } catch (error) {
    alert(error)
   }
    

})