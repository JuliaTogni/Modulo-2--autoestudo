function ordenaçao(){
    let valores = [];

    let arrayInput = document.getElementById('array');
    let valorFoco = document.getElementById('valor-foco');

    arrayInput.value.split(',').forEach( array => {
        valores.push(array.trim());
    });

    valores.sort((a , b) => a - b)
    
    console.log(valores)
}