function comprar(){
    //chamei os valores
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);
  
    if (tipoIngresso == 'pista'){
        comprarPista(quantidade);
    }else if (tipoIngresso == 'superior'){
        comprarSuperior(quantidade);
    }else{
        comprarInferior(quantidade);
    }
            
}

function comprarPista(quantidade){
    let quantidadePista = document.getElementById('qtd-pista').textContent;
    if (quantidade > quantidadePista){
        alert('Quantidade de ingressos tipo pista indisponivel')
    }else{
        quantidadePista = quantidadePista - quantidade;
        document.getElementById('qtd-pista').textContent = quantidadePista;
        alert('compra realizada com sucesso')
    }
}

function comprarSuperior(quantidade){
    let quantidadeSuperior = document.getElementById('qtd-superior').textContent;
    if (quantidade > quantidadeSuperior){
        alert('Quantidade de ingressos tipo superior indisponivel')
    }else{
        quantidadeSuperior = quantidadeSuperior - quantidade;
        document.getElementById('qtd-superior').textContent = quantidadeSuperior;
        alert('compra realizada com sucesso')
    }
}

function comprarInferior(quantidade){
    let quantidadeInferior = document.getElementById('qtd-inferior').textContent;
    if (quantidade > quantidadeInferior){
        alert('Quantidade de ingressos tipo inferior indisponivel')
    }else{
        quantidadeInferior = quantidadeInferior - quantidade;
        document.getElementById('qtd-inferior').textContent = quantidadeInferior;
        alert('compra realizada com sucesso')
    }
}


