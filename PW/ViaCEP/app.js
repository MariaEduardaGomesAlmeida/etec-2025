async function buscarDados(){
    let cep = document.getElementById('cep').value;
    let url = 'https://viacep.com.br/ws/'+cep+'/json/';
 
    //realizar a requisição
    let resp = await fetch(url)
    let infos = await resp.json()

    //dados
    let logradouro = infos.logradouro;
    let bairro = infos.bairro;
    let cidade = infos.localidade;
    let estado = infos.uf;
 
    let dadosCep = document.getElementById('resultado');
    dadosCep.innerHTML = 
    `
    <h1>Informações:</h1>
    <p><strong>Logradouro:</strong> ${logradouro}</p>
    <p><strong>Bairro:</strong> ${bairro}</p>
    <p><strong>Cidade:</strong> ${cidade}</p>
    <p><strong>Estado:</strong> ${estado}</p>
    `
}

async function limparDados() {
    document.getElementById('cep').value = '';
    document.getElementById('resultado').innerHTML = ''; 
}
