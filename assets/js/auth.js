// assets/js/auth.js

function loginUser(email, password) {
    return $.ajax({
        url: 'http://127.0.0.1:8000/login/', // Ajustez avec l'URL de votre API si nécessaire
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ email: email, password: password }),
        success: function(response){
            // Stocker le token dans le localStorage ou les cookies
            localStorage.setItem('access_token', response.access_token);
            localStorage.setItem('refresh_token', response.refresh_token);

            window.location.href = 'http://localhost:63343/ERP-front/index.html';
        },
        error: function(error){
            // Afficher un message d'erreur à l'utilisateur
            alert("Invalid credentials. Please try again.");
        }
    });
}

$(document).ready(function(){
    $("#loginForm").submit(function(e){
        e.preventDefault();
        var email = $("#exampleInputEmail").val();
        var password = $("#exampleInputPassword").val();
        loginUser(email, password);
    });
});
