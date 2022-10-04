function pegarData(option){
  let moedas = document.querySelector("#moedas").value;
  let chaves = document.querySelector("#chaves").value;
  let snowboards = document.querySelector("#snowboards").value;
  let bVerm = document.querySelector("#bVerm").value;
  let bAzul = document.querySelector("#bAzul").value;
  let inputs = [moedas, chaves, snowboards, bVerm, bAzul];

  const fileSelector = document.querySelector("#file-selector").files[0]; // first file in files list
  if (fileSelector){
    var reader = new FileReader();
    reader.readAsText(fileSelector, "UTF-8");
    reader.onload = (event) =>{
      let file = event.target.result;
      alterarData(file, inputs, option);
    }
  }
}

function alterarData(data, valor, option){
  for (let item = 0; item < valor.length; item++){
    if (valor[item] == ""){
      valor[item] = 0;
    }
  }
  data = data.replace(/\\"1\\":{\\"value\\":[0-9]*/, `\\"1\\":{\\"value\\":${valor[0]}`);
  data = data.replace(/\\"2\\":{\\"value\\":[0-9]*/, `\\"2\\":{\\"value\\":${valor[1]}`);
  data = data.replace(/\\"3\\":{\\"value\\":[0-9]*/, `\\"3\\":{\\"value\\":${valor[2]}`);
  data = data.replace(/\\"4\\":{\\"value\\":[0-9]*/, `\\"4\\":{\\"value\\":${valor[3]}`);
  data = data.replace(/\\"5\\":{\\"value\\":[0-9]*/, `\\"5\\":{\\"value\\":${valor[4]}`);
  
  switch (option) {
    case 1:
      criarDownload(data);
    case 2:
      mostrarResultado(data);
  }
}

function mostrarResultado(data){
  //let textArea = document.querySelector("#result");
  //textArea.innerText = data;
  let div = document.getElementById("resultado");
  div.innerHTML = `<textarea name="result" id="result" cols="60" rows="30">${data}</textarea>`;
}

function criarDownload(file){
  let blob = new Blob([file], {type: "text/plain"});
  saveAs(blob, "wallet.json");
}
