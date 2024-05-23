'use strict'
import {getFilmes, getFilme, deleteFilme} from "./filmes.js"

function criarCard (filme){

    const branco = document.createElement('div')
    branco.classList.add( 'w-[800px]', 'h-[97px]', 'pt-[15px]' ,'drop-shadow-lg' , 'flex', 'justify-center' , 'bg-white', 'rounded-[20px]', 'drop-shadow-lg')

    const cinza = document.createElement('div')
    cinza.classList.add( 'w-[766px]', 'row-auto' ,'h-[70px]', 'self-start' , 'fixed' , 'flex', 'items-stretch', 'font-bold' , 'pl-[10px]' , 'text-xl','drop-shadow-[0_35px_35px_rgba(0,0,0.20,0.50)]' , 'bg-[#D9D9D9]', 'rounded-[8px]')

     const id = document.createElement('p')
     id.textContent = filme.id

    const button = document.createElement('button')

    const titulo = document.createElement('p')
    titulo.textContent = filme.nome

    const icone = document.createElement('divi')
    icone.classList.add('flex' , 'gap-10' , 'ml-10')

    const iconeEditar = document.createElement('i')
    iconeEditar.classList.add('bx', 'bx-edit-alt', 'cursor-pointer')

    const iconeExcluir = document.createElement('i')
    iconeExcluir.classList.add('fixed','bx', 'bx-trash', 'cursor-pointer')

    // icone.append(iconeEditar,iconeExcluir)
    button.append(id, titulo, iconeEditar, iconeExcluir)
    cinza.append(button)
    branco.append(cinza)
    
    iconeEditar.addEventListener('click',()=>{
        window.location.href='../telaAtualizar/editar.html?id='+filme.id
    })
    
    iconeExcluir.addEventListener('click',()=>{
        deleteFilme(filme.id)
        window.location.reload()
    })



    return branco
    
}

async function preencherContainer(){
    const container = document.getElementById('pai')


    const filmes = await getFilmes()

    filmes.forEach (filme => {
        const card = criarCard(filme)
        container.appendChild(card)
        console.log(card)
    })
}

preencherContainer()