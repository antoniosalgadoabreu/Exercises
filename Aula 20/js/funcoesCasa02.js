
function verificarCampoVazio() {

    //capturando os valores das inputs
    let nome = document.getElementById("iNome").value;
    let email = document.getElementById("iEmail").value;
    let nomePai = document.getElementById("iNomePai").value;
    let nomeMae = document.getElementById("iNomeMae").value;

    //trim nos valores
    nome = nome.trim();
    email = email.trim();
    nomePai = nomePai.trim();
    nomeMae = nomeMae.trim();

    //Mensagem de erro no "p" correspondente de cada input
    if (nome == "") {
        document.getElementById("ierroNome").innerHTML = "Campo vazio";
        document.getElementById("ierroNome").style.color = "red";
    } else {
        document.getElementById("ierroNome").innerHTML = "";
    }
    if (email == "") {
        document.getElementById("ierroEmail").innerHTML = "Campo vazio";
        document.getElementById("ierroEmail").style.color = "red";
    } else {
        document.getElementById("ierroEmail").innerHTML = "";
    }
    if (nomePai == "") {
        document.getElementById("ierroNomePai").innerHTML = "Campo vazio";
        document.getElementById("ierroNomePai").style.color = "red";
    } else {
        document.getElementById("ierroNomePai").innerHTML = "";
    }
    if (nomeMae == "") {
        document.getElementById("ierroNomeMae").innerHTML = "Campo vazio";
        document.getElementById("ierroNomeMae").style.color = "red";
    } else {
        document.getElementById("ierroNomeMae").innerHTML = "";
    }
}
function verificarEmail(valor) {
    //trim no valor recebido e deixar tudo minusculo
    valor = valor.trim();
    valor = valor.toLowerCase();

    //caracter especial
    let especial = 'ç&*$#%!: ;?/\|+-,{}[]()';

    //contador de caracter especial tirando o @
    let cont1 = 0;

    //contador de @
    let cont2 = 0;

    for (let i = 0; i < valor.length; i++) {
        for (let j = 0; j < especial.length; j++) {
            //conta quantidade de caacteres especiais, se cont1 > 0 operação é finalizada
            if (valor.charAt(i) == especial.charAt(j)) {
                cont1++;
                break;
            }
        }
        //conta quantidade de @
        if (valor.charAt(i) == "@") {
            cont2++;
        }
    }
    //console.log(valor);
    //console.log(valor.substring(valor.length - 4));
    //console.log(valor.substring(valor.length - 7));
    if (valor.substring(valor.length - 4) == ".com" || valor.substring(valor.length - 7) == ".com.br") {
        if (cont2 != 1 || cont1 > 0) {
            document.getElementById("ierroEmail2").innerHTML = "Verificar os caracteres digitados no campo";
            document.getElementById("ierroEmail2").style.color = "red";
            document.getElementById("iEmail").style.borderColor = "red";
        } else {
            if (cont2 == 1) {
                document.getElementById("ierroEmail2").innerHTML = "";
                document.getElementById("iEmail").style.borderColor = "lightgreen";
            } else {
                document.getElementById("ierroEmail2").innerHTML = "O campo e-mail exige conter @ e .com";
                document.getElementById("ierroEmail2").style.color = "red";
                document.getElementById("iEmail").style.borderColor = "red";
            }
        }
    } else {
        document.getElementById("ierroEmail2").innerHTML = "Verificar os caracteres digitados no campo";
        document.getElementById("ierroEmail2").style.color = "red";
        document.getElementById("iEmail").style.borderColor = "red";
    }

}
function stylePretoEmail() {

    //para o caso da input voltar a ficar vazia
    let email = document.getElementById("iEmail").value;

    email = email.trim();

    if (email == null || email == "") {
        document.getElementById("ierroEmail2").innerHTML = "";
        document.getElementById("iEmail").style.borderColor = "black";
    }
}

function checkNumero(valor, campo) {
    let aux = valor;
    let numero = "0123456789";

    aux = aux.trim();

    for (let i = 0; i < numero.length; i++) {
        while (aux.includes(numero.charAt(i))) {
            aux = aux.replace(numero.charAt(i), "");
        }
    }
    if (aux != "") {
        document.getElementById("ierro" + campo).innerHTML = "Somente números";
        document.getElementById("ierro" + campo).style.color = "red";
    } else {
        document.getElementById("ierro" + campo).innerHTML = "";

    }
    verificarQuantidadeCaracteres(valor, campo);
}

function verificarQuantidadeCaracteres(valor2, campo2) {

    let quantidade = 0;

    if (campo2 == "Rg") {

        quantidade = 9;
    } else {

        quantidade = 11
    }
    if (valor2.length != quantidade) {

        document.getElementById("ierro" + campo2).innerHTML = campo2 + " exige " + quantidade + " caracteres";
        document.getElementById("ierro" + campo2).style.color = "red";
    } else {

        document.getElementById("ierro" + campo2).innerHTML = "";

        let cpfFormat;
        let telFormat;
        let celFormat;
        let rgFormat;

        switch (campo2) {
            case "Cpf":
                cpfFormat = valor2.substring(0, 3) + "." + valor2.substring(3, 6) + "." +
                    valor2.substring(6, 9) + "-" + valor2.substring(9);
                document.getElementById("i" + campo2).value = cpfFormat;
                break;
            case "Tel":
                telFormat = "(" + valor2.substring(0, 2) + ") " + valor2.substring(2, 7) + "-" +
                    valor2.substring(7);
                document.getElementById("iTel").value = telFormat;
                break;
            case "Cel":
                celFormat = "(" + valor2.substring(0, 2) + ") " + valor2.substring(2, 7) + "-" +
                    valor2.substring(7);
                document.getElementById("iCel").value = celFormat;
                break;
            case "Rg":
                rgFormat = valor2.substring(0, 3) + "." + valor2.substring(3, 6) + "." +
                    valor2.substring(6, 9) + "-" + valor2.substring(9);
                document.getElementById("i" + campo2).value = rgFormat;
                break;
        }
    }
}