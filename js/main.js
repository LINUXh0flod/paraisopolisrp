

function click1() {
   window.location.href = "teladeregistro.html"
}


var email = window.document.getElementById('iemail')
var senha = window.document.getElementById('isenha')
function entrar() {
if (email.value === 'linux25@gmail.com' && senha.value === '346263') {
    window.location.href = "home1.html" 
  } else {
    window.alert('Senha incorreta')
  }
   }