function verificarCampoVazio() {
			
    let nome = document.getElementById("inome").value;
    let cpf = document.getElementById("icpf").value;
    let email = document.getElementById("iemail").value;
    let telefone = document.getElementById("itelefone").value;
    let cidade = document.getElementById("icidade").value;
    
    if (nome=="") {
        document.getElementById("ierro1").innerHTML = "Campo vazio";
        document.getElementById("ierro1").style.color = "red";
    }else{
        document.getElementById("ierro1").innerHTML = "";
        
        }
    if (cpf=="") {
        document.getElementById("ierro2").innerHTML = "Campo vazio";
        document.getElementById("ierro2").style.color = "red";
    }else{
        document.getElementById("ierro2").innerHTML = "";
        
    }
    if (email=="") {
        document.getElementById("ierro3").innerHTML = "Campo vazio";
        document.getElementById("ierro3").style.color = "red";
    }else{
        document.getElementById("ierro3").innerHTML = "";
        
    }
    if (telefone=="") {
        document.getElementById("ierro4").innerHTML = "Campo vazio";	
        document.getElementById("ierro4").style.color = "red";
    }else{
        document.getElementById("ierro4").innerHTML = "";
        
    }
    if (cidade=="") {
        document.getElementById("ierro5").innerHTML = "Campo vazio";
        document.getElementById("ierro5").style.color = "red";
    }else{
        document.getElementById("ierro5").innerHTML = "";
        
    }
}
function checkNumero(valor, campo){
    let aux = valor;
    let numero = "0123456789";

	aux = aux.trim();

    if (campo == "cpf") {

        for (let i =0; i<numero.length; i++){
            while(aux.includes(numero.charAt(i))){
                aux = aux.replace(numero.charAt(i), "");
            }
        }
        if (aux != "") {
            document.getElementById("ierro2").innerHTML = "Somente números";
            document.getElementById("ierro2").style.color = "red";
        }else{
            document.getElementById("ierro2").innerHTML = "";

        }
        verificarQuantidadeCaracteres(valor, campo);

    } else {
        
        for (let i =0; i<numero.length; i++){
            while(aux.includes(numero.charAt(i))){
                aux = aux.replace(numero.charAt(i), "");
            }
        }
        if (aux != "") {
            document.getElementById("ierro4").innerHTML = "Somente números";
            document.getElementById("ierro4").style.color = "red";
        }else{
            document.getElementById("ierro4").innerHTML = "";
        }
        verificarQuantidadeCaracteres(valor, campo);
    }	
}
function verificarQuantidadeCaracteres(valor2, campo2){
    if (campo2 == "cpf") {
        if (valor2.length != 11) {
            document.getElementById("ierro7").innerHTML = "CPF exige 11 caracteres";
            document.getElementById("ierro7").style.color = "red";
        }else{
            document.getElementById("ierro7").innerHTML = "";
            
            let cpfFormat;
            
            cpfFormat = valor2.substring(0,3) + "." + valor2.substring(3,6) + "." +
            valor2.substring(6,9) +"-"+ valor2.substring(9);

            document.getElementById("icpf").value = cpfFormat;
        }
    } else {
        if (valor2.length != 11) {
            document.getElementById("ierro6").innerHTML = "Telefone exige 11 caracteres";
            document.getElementById("ierro6").style.color = "red";
        }else{
            document.getElementById("ierro6").innerHTML = "";
            
            let telFormat;
            
            telFormat = "(" + valor2.substring(0,2) + ") " + valor2.substring(2,7) + "-" +
            valor2.substring(7);

            document.getElementById("itelefone").value = telFormat;
        }
    }	
}
function verificarEmail (valor3){
	
	valor3 = valor3.trim();
	
    if (valor3.includes("@") && valor3.includes(".com")) {
        document.getElementById("ierro8").innerHTML = "";
        
    }else{
        document.getElementById("ierro8").innerHTML = "O campo e-mail exige conter @ e .com";
        document.getElementById("ierro8").style.color = "red";
    }
}	