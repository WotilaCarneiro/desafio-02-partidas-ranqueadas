function ranking (numWins, numLoses){
    let saldo = numWins - numLoses;
    let nivel = "";
    if (saldo < 10){
        nivel = "Ferro"
    }else if (saldo <=11 && saldo <=20){
        nivel = "Bronze"
    }

}