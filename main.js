document.querySelector("#file-selector").addEventListener("change", pegarData);

let moedas = document.querySelector("#moedas");
let chaves = document.querySelector("#chaves");
let snowboards = document.querySelector("#snowboards");
let bVerm = document.querySelector("#bVerm");
let bAzul = document.querySelector("#bAzul");
let inputs = [];

function pegarData(event){
  const file = document.querySelector("#file-selector").files[0];
  if (file){
    //document.querySelector("p").innerHTML = file;
    console.log(file);
    var reader = new FileReader();
    reader.readAsText(file, "UTF-8");
    reader.onload = (event) =>{
    alterarData(event.target.result);
    }
  }
}

function alterarData(data){
  let id = 1;
  let money = 22;
  let patt = /\\"1\\":{\\"value\\":[0-9]*/g;
  console.log(patt);
  console.log(data.search(patt));
  data = data.replace(patt, /\\"1":{"value":/ + money);
}

function bla(){
  console.log(moedas.value);
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
