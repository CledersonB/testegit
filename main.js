function login(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username == "admin" && password == "admin"){
        alert("Login successfully");
        window.location = "success.html"; // Redirecting to other page.
        return false;
    }
    else{
        alert("Login failed");
        return false;
    }
}