'use strict'
import {postDiretor} from "./filmes.js"

// Import das tags do HTML pelo ID
const titulo = document.getElementById('titulo')
const duracao = document.getElementById('duracao')
const dataLancamento = document.getElementById('lancamento')
const dataRelancamento = document.getElementById('relancamento')
const cadastrar = document.getElementById('cadastrar')
const poster = document.getElementById('poster')
const idClassificacao = document.getElementById('classificacao')
const idNacionalidade = document.getElementById('nacionalidade')



cadastrar.addEventListener('click', ()=>{

    const tituloInput = titulo.value
    const duracaoInput = duracao.value
    const dataLancamentoInput = dataLancamento.value
    const dataRelancamentoInput = dataRelancamento.value
    const capaInput = poster.src
    const classificacaoInput = idClassificacao.value
    const nacionalidadeInput = idNacionalidade.value
    const insert ={
        nome: tituloInput,
        data_nascimento: dataLancamentoInput,
        data_falecimento: dataRelancamentoInput,
        biografia: duracaoInput,
        foto: capaInput,
        sexo_id: classificacaoInput,
        nacionalidade_id: nacionalidadeInput    
    }

    console.log(idNacionalidade)

    postDiretor(insert)
    console.log(insert)
    window.location.href = './dashDiretor.html'
})

link.addEventListener('keyup', ()=>{
    poster.src = link.value 
})