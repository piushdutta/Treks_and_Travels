var left_cover = document.getElementById("left-cover");
var left_form = document.getElementById("left-form");
var right_cover = document.getElementById("right-cover");
var right_form = document.getElementById("right-form");

let users = {};

function switchSignup() {
    right_form.classList.add("fade-in-element");
    left_cover.classList.add("fade-in-element");
    left_form.classList.add("form-hide");
    left_cover.classList.remove("cover-hide");
    right_form.classList.remove("form-hide");
    right_cover.classList.add("cover-hide");
}

function switchLogin() {
    right_form.classList.add("form-hide");
    right_cover.classList.remove("cover-hide");
    left_form.classList.remove("form-hide");
    left_cover.classList.add("cover-hide");
}

function handleSignup(event) {
    event.preventDefault();
    var username = document.getElementById("signup-username").value;
    var email = document.getElementById("signup-email").value;
    var password = document.getElementById("signup-password").value;
    var cpass = document.getElementById("signup-cpass").value;

    if (password !== cpass) {
        alert("Passwords do not match!");
        return false;
    }

    if (username in users) {
        alert("Username already exists!");
        return false;
    }

    users[username] = { email: email, password: password };
    console.log("Users after signup:", users); 

    alert("Signup successful! Please log in.");
    switchLogin();
    return false;
}

function handleLogin(event) {
    event.preventDefault();
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;

    if (users[username] && users[username].password === password) {
        alert("Login successful!");
        window.location.href = "./Home_page.html";
    } else {
        alert("Invalid username or password!");
    }
    return false;
}
