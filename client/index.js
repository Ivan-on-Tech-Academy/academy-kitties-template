var web3 = new Web3(Web3.givenProvider);
 
var instance;
var user;
var contractAddress = "0x6Fd48F5D62EaE22EF6d27466ef2ea642a7B26557";
 
$(document).ready(function(){
    window.ethereum.enable().then(function(accounts){
        instance = new web3.eth.Contract(abi, contractAddress, {from: accounts[0]})
        user = accounts[0];
 
        console.log(instance);
 
        instance.events.Birth().on('data', function(event){
            console.log(event);
            let owner = event.returnValues.owner;
            let kittenId = event.returnValues.kittenId;
            let mumId = event.returnValues.mumId;
            let dadId = event.returnValues.dadId;
            let genes = event.returnValues.genes
            $("#kittyCreation").css("display", "block");
            $("#kittyCreation").text("owner:" + owner
                                    +" kittyId:" + kittenId
                                    +" mumId:" + mumId
                                    +" dadId:" + dadId
                                    +" genes:" + genes)
        })
        .on('error', console.error);
 
    })
})

//Get kittues for breeding that are not selected
async function breedKitties(gender) {
    var arrayId = await instance.methods.getKittyByOwner(user).call();
    for (i = 0; i < arrayId.length; i++) {
      appendBreed(arrayId[i],gender)
    }
}
  
//Appending cats to breed selection
async function appendBreed(id,gender) {
    var kitty = await instance.methods.getKitty(id).call()  
    breedAppend(kitty[0], id, kitty.generation,gender)
}
  
//Appending cats to breed selection
async function breed(dadId,mumId) {
    try {
        var newKitty = await instance.methods.breed(dadId,mumId).send()  
        console.log(newKitty)
        setTimeout(()=>{
            go_to('catalogue.html')
        },2000)
    } catch (err){
        console.log(err)
    }  
}

//Appending cats for catalog
async function appendKitty(id) {
    var kitty = await instance.methods.getKitty(id).call()  
    appendCat(kitty[0], id, kitty['generation'])
}
  
  
async function singleKitty() {
    var id = get_variables().catId
    var kitty = await instance.methods.getKitty(id).call()
    singleCat(kitty[0], id, kitty['generation'])
}
 
 
 
 
function createKitty(){
    var dnaStr = getDna();
    instance.methods.createKittyGen0(dnaStr).send({}, function(error, txHash){
        if(error)
            console.log(err);
        else
            console.log(txHash);
    })
}

async function getKitties(){  

    var arrayId;
    var kitty;
    try{    
      arrayId = await instance.methods.getKittyByOwner(user).call();
    } catch(err){
      console.log(err);
    }
    for (i = 0; i < arrayId.length; i++){
      kitty = await instance.methods.getKitty(arrayId[i]).call();
      appendCat(kitty[0],i, kitty.generation)
    }
    console.log(kitty);
    
}

function go_to(url) {
    window.location.href = url;
}
function empty(str) {
    return (!str || 0 === str.length);
}