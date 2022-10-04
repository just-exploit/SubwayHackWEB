//let file = document.querySelector("#file-selector").addEventListener("change", pegarData);

function pegarData(){
  let moedas = document.querySelector("#moedas").value;
  let chaves = document.querySelector("#chaves").value;
  let snowboards = document.querySelector("#snowboards").value;
  let bVerm = document.querySelector("#bVerm").value;
  let bAzul = document.querySelector("#bAzul").value;
  let inputs = [moedas, chaves, snowboards, bVerm, bAzul];

  const file = document.querySelector("#file-selector").files[0]; // first file in files list
  if (file){
    var reader = new FileReader();
    reader.readAsText(file, "UTF-8");
    reader.onload = (event) =>{
      let file_content = event.target.result;
    for (let item = 0; item < inputs.length; item++){
      file_content = alterarData(file_content, item, inputs[item])
    }
    document.querySelector('textarea').innerText = file_content
      /*console.log(item);
      console.log(file_content)
      document.querySelector('textarea').innerText = file_content;*/
    }
  }
}

function alterarData(data, id, valor){
  //let patt = new RegExp(`\\\"${id}\\\":{\\\"value\\\":[0-9]*`);
  let patt = RegExp(`/\\"${id}\\":{\\"value\\":[0-9]*/`);
  let newPatt = `\\"${id}\\":{\\"value\\":${valor}`;
  console.log(data.search(patt))
  return data.replace(patt, newPatt);
}
/*let p = document.querySelector("p");
p.innerHTML = '{"version":3,"data":"{\"lastSaved\":\"2022-08-29T10:17:24.172974Z\",\"patchVersion\":0,\"currencies\":{\"3\":{\"value\":10,\"expirationType\":0},\"2\":{\"value\":5,\"expirationType\":0},\"4\":{\"value\":5,\"expirationType\":0},\"5\":{\"value\":5,\"expirationType\":0},\"1\":{\"value\":10000,\"expirationType\":0}},\"lootboxQueue\":{\"unopenedLootboxes\":[]},\"currencyAllowedInRun\":{},\"lootBoxesOpened\":{},\"ownedOnlyBuyOnceProducts\":[]}"}';
/*
money = 1 
keys = 2
snowboard = 3
boost_verm = 4
boost_azul = 5
moeda_spike = 23
moeda_yutani = 24
moeda_tricky = 22
moeda_jake = 20
moeda_fresh = 21
*/
