// Selecao dos principais elementos do DOM
const botaoMenu = document.getElementById('botao-menu');
const listaMenu = document.getElementById('lista-menu');
const botaoTema = document.getElementById('alternar-tema');
const formulario = document.getElementById('formulario-contato');
const mensagemRetorno = document.getElementById('mensagem-retorno');
// Abre e fecha o menu em telas menores
botaoMenu.addEventListener('click', () => {
    listaMenu.classList.toggle('ativo');
});
// Fecha o menu quando um link e clicado
listaMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        listaMenu.classList.remove('ativo');
    });
});
// Alterna entre tema claro e escuro
botaoTema.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        botaoTema.textContent = 'Tema claro';
    } else {
        botaoTema.textContent = 'Tema escuro';
    }
});
// Funcao para validar formato simples de e-mail
function emailValido(email) {
    const padraoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return padraoEmail.test(email);
}
// Validacao e simulacao de envio do formulario de contato
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    mensagemRetorno.className = 'mensagem-retorno';
    if (nome === '' || email === '' || mensagem === '') {
        mensagemRetorno.textContent = 'Por favor, preencha todos os campos.';
        mensagemRetorno.classList.add('erro');
        return;
    }
    if (!emailValido(email)) {
        mensagemRetorno.textContent = 'Informe um e-mail valido. Exemplo: usuario@dominio.com';
        mensagemRetorno.classList.add('erro');
        return;
    }
    mensagemRetorno.textContent = 'Mensagem enviada com sucesso!';
    mensagemRetorno.classList.add('sucesso');
    // Limpa os campos apos a simulacao do envio
    formulario.reset();
});
