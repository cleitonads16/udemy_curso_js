
(function(){
    'use strict'
    var $form = document.querySelector("form");
    var login = document.getElementById("usuario");
    var senha = document.getElementById("senha");
    // btn = document.getElementById("btn");

    $form.addEventListener('submit', function(e){
        if(login.value === "" || senha.value === ""){
            alert("Por favor preencha todos os campos")
            e.preventDefault();
        }
    });
})()
