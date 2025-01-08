/*
write a fuction that take a boolean 
true or false for shopping and alert if the allawance 
has increase or not 

*/

//define function
function erans(){
    let shopping = prompt("Would you my shopping for me?")
    let allowance = 45;
    let normalAllowa = 30;
    
    if (shopping === 'no'){
        alert("Your allawwnce is Ghc" + allowance)
    } else if( shopping === 'yes'){
        alert("your allowance is Ghc" + allowance - normalAllowa)
    }
     else{
        alert("No allowance for you today!")
    }
}

// call or run the function
erans();