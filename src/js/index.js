const btnAdvice = document.getElementById('btn-advice');
let adviceId = document.getElementById('advice-id');
let adviceDescription = document.getElementById('advice-description');

btnAdvice.addEventListener('click', () => {

async function gerarConselho () {
    try {
        const resposta = await fetch("https://api.adviceslip.com/advice");
        const dados = await resposta.json();
        //console.log(dados)
        adviceId.innerText = dados.slip.id;
        adviceDescription.innerText = dados.slip.advice;

        adviceDescription.classList.remove('fadeIn');
        setTimeout(function() {
            adviceDescription.classList.add('fadeIn');
        }, 1);
    } catch (erro) {
        console.log('Conselho não disponível: ${erro');
}
}
gerarConselho();
});

/* PASSO A PASSO */
//1. Pegar o elemento de  **botão** para ser adicionado o **evento de clique** nele
//2. Pegar o elemento de **id do conselho** 
//3. Pegar o elemento de **descrição do conselho**
//4. Após conseguirmos os elementos do html, é necessário a criação da **função responsável por pegar os dados da API**. A melhor forma de se consumir a api é usando **async await**. 
//5. Importante que durante a chamada a api seja feito o tratamento dos erros usando o **try-catch**.
//6. Dentro da função, após pegarmos os dados da API, é necessário atualizar o conteúdo do id e descrição do conselho que colocamos em uma variável usando o **innertText**.  
//7. Por fim, basta chamar a função criada.
//8. Atribuir a função que criamos para ser executada no evento do clique do botão ou se preferir, criar o escopo da função dentro do listener. 