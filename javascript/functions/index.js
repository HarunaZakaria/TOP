/*
write a fuction that take a boolean 
true or false for shopping and alert if the allawance 
has increase or not 

*/

//define function
function erans(){
    let shopping = prompt("Would you my shopping for me?")
    let allowance = 45;
    
    if (shopping === 'yes'){
        alert("Your allawwnce is Ghc" + allowance)
    } else if( shopping === 'no'){
        alert("your allowance is Ghc" + allowance - 30)
    }
     else{
        alert("No allowance for you today!")
    }
}

// call or run the function
erans();