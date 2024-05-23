'use strict'

import {getFilmes, getFilme, deleteFilme, postFilme} from "./filmes.js"

const titulo = document.getElementById('titulo')
const sinopse = document.getElementById('sinopse')
const duracao = document.getElementById('duracao')
const dataLancamento = document.getElementById('dataLancamento')
const dataRelancamento = document.getElementById('dataRelancamento')
const valor = document.getElementById('valor')
const poster = document.getElementById('poster')
const genero_id = document.getElementById('genero')
const classificacao_id = document.getElementById('classificacao')
const cadastrar = document.getElementById('cadastrar')

cadastrar.addEventListener('click' , async() => {

   try {
    const tituloInput = titulo.value
    const sinopseIpunt = sinopse.value
    const duracapInput = duracao.value
    const dataLancamentoInput = dataLancamento.value
    const dataRelancamentoInput = dataRelancamento.value
    const valorInput = valor.value
    const capaInput = poster.value
    const generoInput = genero_id.value
    const classificacaoInput = classificacao_id.value
    const insert = {
        nome: tituloInput,
        sinopse: sinopseIpunt,
        duracao: duracapInput,
        data_lancamento: dataLancamentoInput,
        data_relancamento: dataRelancamentoInput,
        valor_unitario: valorInput,
        foto_capa: capaInput,
        genero_id: generoInput,
        classificacao_id: classificacaoInput
    }

    const teste = await postFilme(insert)
    console.log(teste);
    console.table(insert)
    if(insert){
         window.location.href = '../telaCms/telaCms.html'
    }
    else{
        alert("errooooo")
    }
   } catch (error) {
    alert(error)
   }
    

})

