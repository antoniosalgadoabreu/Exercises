
function verificarCampoVazio() {

    //capturando os valores das inputs
    let nome = document.getElementById("iNome").value;
    let email = document.getElementById("iEmail").value;
    let assunto = document.getElementById("iAssunto").value;
    let mensagem = document.getElementById("iMensagem").value;

    //trim nos valores
    nome = nome.trim();
    email = email.trim();
    assunto = assunto.trim();
    mensagem = mensagem.trim();

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
    if (assunto == "") {
        document.getElementById("ierroAssunto").innerHTML = "Campo vazio";
        document.getElementById("ierroAssunto").style.color = "red";
    } else {
        document.getElementById("ierroAssunto").innerHTML = "";
    }
    if (mensagem == "") {
        document.getElementById("ierroMensagem").innerHTML = "Campo vazio";
        document.getElementById("ierroMensagem").style.color = "red";
    } else {
        document.getElementById("ierroMensagem").innerHTML = "";
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
    // console.log(valor);
    //console.log(valor.substring(valor.length - 4));
    //console.log(valor.substring(valor.length - 7));
    if ( valor.substring(valor.length - 4) == ".com" || valor.substring(valor.length - 7) == ".com.br") {
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
