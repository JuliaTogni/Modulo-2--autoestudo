function ordenação(){

    let input = $("#array").val()
    let foco = $("#valor-foco").val()
    
    console.log(input)

    input = input.split(",")

    // input.map((val)=>{
    //     array.push(Number(val))
    // })


    input.sort()





    console.log(input)
    let focoResult =input.indexOf(foco) + 1

    if(focoResult == 0){
        focoResult = "Esse valor não existe na sua sequência"
    }

    //alert('Ordenados de forma crescente ' + input + '<br> O número de' + foco + ' Número de ' + foco + ' está na ' + focoResult + ' º posição ')
    let p = $("#resultado3").html(`Ordenados de forma crescente ${input} <br> O numero de ${foco} está na ${focoResult} º`)
}