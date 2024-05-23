'use strict'

export async function getFilmes(){
    const url = 'http://localhost:8080/v2/acmefilmes/filmes'
    const response = await fetch(url)
    const data = await response.json()
    console.log();

    return data.filmes
}

export async function getFilme(id){
    const url = `http://localhost:8080/v2/acmefilmes/filme/${id}`
    const response = await fetch(url)
    const data = await response.json()
    return data.filmes[0]
}

// export async function selectNameFilmes(nome){
//     const url = `http://localhost:8080/v2/acmefilmes/filmes/Filtro?nome=${nome}`
//     const response = await fetch(url)
//     const data = await response.json()
//     return data
// }


export async function postFilme(filme){
    const url = 'http://localhost:8080/v2/acmefilmes/filme'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(filme)
    }

    const response = await fetch(url, options)

    return response.ok
}

export async function putFilme(id, filme){
    const url = `http://localhost:8080/v2/filmesAcme/uptadeFilme/${id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(filme)
    }

    const response = await fetch(url, options)

    return response.ok
}




export async function deleteFilme(id){
    try{
        await fetch(`http://localhost:8080/v2/acmefilmes/filme/${id}`,{
            method: 'DELETE'
        })
        console.log("Filme excluído com sucesso")
    } catch (error){
        console.error('Erro ao excluir filme: ',error);
    }
}

export async function getGenero(){
    const url = 'http://localhost:8080/v2/acmeFilmes/genero'
const response = await fetch(url)
const data = await response.json()


return data.filmes
}