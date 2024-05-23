'use strict'
import { getFilmes, getFilmesId, postFilme, putFilme } from "./filmes.js";
const id = new URLSearchParams(window.location.search).get('id');

// Definir elementos fora da função para garantir escopo global
const nome = document.getElementById('nome');
const sinopse = document.getElementById('sinopse');
const lancamento = document.getElementById('lancamento');
const relancamento = document.getElementById('relancamento');
const duracao = document.getElementById('duracao');
const valor = document.getElementById('valor');
const poster = document.getElementById('poster');
const classificacao = document.getElementById('classificacao');
const link = document.getElementById('link');
const salvar = document.getElementById('salvar');

// Função para puxar os dados do filme pelo ID
async function dadosFilme() {
    if (id) {
        try {
            const infoFilme = await getFilmesId(id);

            // Atribuir valores aos elementos do formulário
            nome.value = infoFilme.nome || '';
            sinopse.textContent = infoFilme.sinopse || '';
            duracao.value = tratarDuracao(infoFilme.duracao) || '';
            classificacao.value = infoFilme.id_classificacao || '';
            poster.src = infoFilme.foto_capa || '';
            valor.value = infoFilme.valor_unitario || '';
            lancamento.value = infoFilme.data_lancamento ? infoFilme.data_lancamento.slice(0, 10) : '';
            relancamento.value = infoFilme.data_relancamento ? infoFilme.data_relancamento.slice(0, 10) : '';
        } catch (error) {
            console.error('Erro ao obter dados do filme:', error);
        }
    } else {
        console.error('ID do filme não fornecido.');
    }
}

function tratarDuracao(string) {
    if (!string) return '';
    return string.slice(11, 19);
}

// Mudar capa do filme
link.addEventListener('keyup', () => {
    poster.src = link.value;
});

// Botão de salvar alterações
salvar.addEventListener('click', async () => {
    try {
        const nomeInput = nome.value;
        const sinopseInput = sinopse.value;
        const duracaoInput = duracao.value;
        const dataLancamentoInput = lancamento.value;
        const dataRelancamentoInput = relancamento.value;
        const precoInput = valor.value;
        const fotoCapaInput = poster.src;
        const classificacaoInput = classificacao.value;

        const alteracoes = {
            nome: nomeInput,
            sinopse: sinopseInput,
            duracao: duracaoInput,
            data_lancamento: dataLancamentoInput,
            data_relancamento: dataRelancamentoInput,
            valor_unitario: precoInput,
            foto_capa: fotoCapaInput,
            id_classificacao: classificacaoInput
        };

        console.log('Alterações a serem enviadas:', alteracoes);

        const resultado = await putFilme(id, alteracoes);

        if (resultado) {
            window.location.href = './dashboard.html';
        } else {
            console.error('Erro ao salvar as alterações');
        }
    } catch (error) {
        console.error('Erro ao salvar as alterações:', error);
    }
});

// Chamar a função para carregar os dados do filme
dadosFilme();