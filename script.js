const typeArea = document.querySelector(".addtext");
let mensaje = document.querySelector(".encriptedmsg");

function Encriptbotton(){
    const textoEncriptado= encriptar(typeArea.value)
    mensaje.value=textoEncriptado;
   typeArea.value="";
   mensaje.style.backgroundImage="none";
}
function Desencriptbotton(){
    const textoEncriptado= desencriptar(typeArea.value)
    mensaje.value=textoEncriptado;
   typeArea.value="";
}
function encriptar(stringEncripted){
    let matrizencript =[["e","enter"], ["i", "imes"],["o", "ober"], ["u", "ufat"], ["a", "ai"]]
    stringEncripted=stringEncripted.toLowerCase()

    for(let i=0; i<matrizencript.length; i++){
        if(stringEncripted.includes(matrizencript[i][0])){
stringEncripted=stringEncripted.replaceAll(matrizencript[i][0], matrizencript[i][1])
        }
    }
return stringEncripted;
}

function desencriptar(stringDesncripted){
    let matrizencript =[["e","enter"], ["i", "imes"],["o", "ober"], ["u", "ufat"], ["a", "ai"]]
    stringDesncripted=stringDesncripted.toLowerCase()

    for(let i=0; i<matrizencript.length; i++){
        if(stringDesncripted.includes(matrizencript[i][1])){
        stringDesncripted=stringDesncripted.replaceAll(matrizencript[i][1], matrizencript[i][0])
        }
    }
return stringDesncripted;
}