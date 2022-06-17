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

function showMensagem() {
    let divId = $("#msgContent")

    if (divId.attr("class") == "normal") {
        divId.attr("class", "hiddenmsgContent")

        
    } else {
        divId.attr("class", "normal")

    }
}

// Quickly show all divs that have the hidden style class
$( ".hiddenIdContent" ).show( 1300 );

$( ".hiddenmsgContent" ).show( 1300 );

//rota

function informacoes() {
    $.get('http://localhost:8222/informacoes', (res) =>{
        console.log(res)

        $('#nome').html(res.Nome)
        $('#profissao').html(res.Profissao)
        $('#nacionalidade').html(res.Nacionalidade)
        $('#idade').html(res.Idade)
        $('#estado_civil').html(res.Estado_civil)

    })
}

//POST

function sendMessage() {
    let nome = document.querySelector("#nomeForms").value
    let txt = document.querySelector("#texto").value

    console.log(nome)
    $.ajax({
        url: 'http://localhost:${port}/contato', 
        method: 'POST',
        data: {
            name: nome,
            text: txt
        },
        success: function() {
            alert('Mensagem enviada com sucesso!')
        },
        contentType: "application/json; charset=utf-8" 
    })
}