var n100 = 0;
var n50 = 0;
var n20 = 0;
var n10 = 0;
var n5 = 0;
var n2 = 0;
var n1 = 0;
function clicar(){
    var total = document.getElementById('dinheiro').value;
    if (total >= 100){
        n100 = parseInt(total/100) // o parseInt faz o número ignorar a vírgula
        total = total - (n100*100)
    } 
    if ( total >= 50){
        n50 = parseInt(total/50)
        total = total - (n50*50)
    } 
    if ( total >= 20){
        n20 = parseInt(total/20)
        total = total - (n20*20)
    }
    if ( total >= 10){
        n10 = parseInt(total/10)
        total = total - (n10*10)
    }
    if ( total >= 5){
        n5 = parseInt(total/5)
        total = total - (n5*5)
    }
    else if ( total >= 2){
        n2 = parseInt(total/2)
        total = total - (n2*2)
    }
    
    alert('O total de cédulas é: ' + n100 + ' notas de 100 reais' + ' e ' + n50 + ' notas de 50 reais' + ' e '+ n20 + ' notas de 20 reais' + ' e ' + n10 + ' notas de 10 reais' + ' e ' + n5 + ' notas de 5 reais' +' e ' + n2 + ' notas de 2 reais' + total + ' notas de 1 real')
}