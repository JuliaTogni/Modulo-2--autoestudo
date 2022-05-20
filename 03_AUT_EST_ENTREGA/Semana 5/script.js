//Há uma função para cada área do currículo, e foi utilizado `let` ao invés de var, para que o nome fosse mantido durante todo o projeto sem nenhum problema
function showExperience() {
    let divId = $("#expContent")

    if (divId.attr("class") == "normal") {
        divId.attr("class", "hiddenExpContent")

    } else {
        divId.attr("class", "normal")

    }
}

function showStudies() {
    let divId = $("#graContent") //Aqui entra a parte do JQuery para coletar o item com a id studiesContent
  
    // Algoritmo para mudar a classe da div no html, fazendo com que seu display esteja como none, ou normal
    if (divId.attr("class") == "normal") {
        divId.attr("class", "hiddenGraContent")

    } else {
        divId.attr("class", "normal")
    }
}

function showLanguages() {
    let divId = $("#idContent")

    if (divId.attr("class") == "normal") {
        divId.attr("class", "hiddenIdContent")

        
    } else {
        divId.attr("class", "normal")

    }
}

// Quickly show all divs that have the hidden style class
$( ".hiddenIdContent" ).show( 1300 );