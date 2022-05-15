// Generator Part//
function getPassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*()+?><:{}[]";
    var passwordLength = 16;
    var password = "";

    for (var i = 0; i < passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber +1);
    
    
      document.getElementById('password').value = password  
    
    }
        
}
//End Generator Part//       


//Validation Part//
function validador (){

    var valor = document.getElementById('senha').value;

         if(valor === document.getElementById('password').value ){
             window.location.href="pagina-dois.html";
         }
         else{
             alert('Senha Incorreta :(')
         }

        }

       //End Validation Part// 