function gerarQrCode() {
   var inputText = document.querySelector("input");
 
   if (inputText.value == "") {
     alert("Campo vazio. Digite algo");
   } else {
     //Geração do qrcode
     var QrCodeC = document.querySelector(".qrcode");
     QrCodeC.innerHTML = "";
 
     var btnSalvar = document.querySelector("#btnSalvar");
     btnSalvar.style.display = "block";
 
     var config = {
       text: inputText.value,
       width: 200,
       height: 200,
     };
 
     new QRCode(QrCodeC, config);
   }
 }
 
 function salvarQrCode() {
   var a = document.createElement("a");
   var img = document.querySelector("img");
 
   a.href = img.src;
   a.download = "qrcode.png";
   a.click();
 }
 