'use strict'

export async function getAtores(){
    const url = 'http://localhost:8080/v2/acmefilmes/atores'
    const response = await fetch(url)
    const data = await response.json()
    console.log();

    return data.Ators
}

export async function getAtor(id){
    const url = `http://localhost:8080/v2/acmefilmes/ator/${id}`
    const response = await fetch(url)
    const data = await response.json()
    return data.Ators[0]
}

// export async function selectNameAtors(nome){
//     const url = `http://localhost:8080/v2/acmeAtors/Ators/Filtro?nome=${nome}`
//     const response = await fetch(url)
//     const data = await response.json()
//     return data
// }


export async function postAtor(Ator){
    const url = 'http://localhost:8080/v2/acmefilmes/novoAtor'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Ator)
    }

    const response = await fetch(url, options)

    return response.ok
}

export async function putAtor(id, Ator){
    const url = `http://localhost:8080/v2/acmefilmes/updateAtores${id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Ator)
    }

    const response = await fetch(url, options)

    return response.ok
}




export async function deleteAtor(id){
    try{
        await fetch(`http://localhost:8080/v2/acmefilmes/deleteAtor${id}`,{
            method: 'DELETE'
        })
        console.log("Ator excluído com sucesso")
    } catch (error){
        console.error('Erro ao excluir Ator: ',error);
    }
}