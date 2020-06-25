var web3 = new Web3(Web3.givenProvider);
 
var instance;
var user;
var contractAddress = "0x01aB0Cd2A3f72F8Fa2b76DC327F6270cCAEA152F";
 
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
      appendCat(kitty[0],i)
    }
    console.log(kitty);
    
}