'use strict'

export async function getDiretor(){
    const url = 'http://localhost:8080/v2/acmefilmes/diretor'
    const response = await fetch(url)
    const data = await response.json()
    

    return data.diretores
}

export async function getDiretorId(id){
    const url = `http://localhost:8080/v2/acmefilmes/diretor/${id}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data.diretor[0]
}

export async function selectNamaDiretor(nome){}

export async function postDiretor(diretor){
    const url = 'http://localhost:8080/v2/acmefilmes/novoDiretor'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(diretor)
    }

    const response = await fetch(url, options)
    console.log(response)

    return response.ok
}

export async function putDiretor(id, genero){}

export async function deleteDiretor(id){
    try{
        await fetch(`http://localhost:8080/v2/acmefilmes/deleteDiretor/${id}`,{
            method: 'DELETE'
        })
        console.log("Diretor excluído com sucesso")
    } catch (error){
        console.error('Erro ao excluir filme: ',error);
    }
}

export async function getDiretorIdPeloNome(nomeDiretor) {
    const url = `http://localhost:8080/v2/acmeFilmes/diretor/Filtro?nome=${nomeDiretor}`;
    const response = await fetch(url);
    const data = await response.json();
    if (data && data.diretor && data.diretor.length > 0) {
        return data.diretor[0].id;
    } else {
        return null;
    }
}

export async function addDiretorFilme(info){
    const url = 'http://localhost:8080/v2/acmefilmes/diretorfilme'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(info)
    }
    const response = await fetch(url, options)
    console.log(response)
    return response.ok 
}

