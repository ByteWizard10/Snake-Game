function validation() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var cpassword = document.getElementById('cpassword').value;

    var usercheck = /^[A-Za-z\s]{3,30}$/;
    var emailcheck = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    var passwordcheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,20}$/;

    // Username validation
    if (usercheck.test(username)) {
        document.getElementById('usernameerror').innerHTML = " ";
    } else {
        document.getElementById('usernameerror').innerHTML = "**Invalid Username";
        return false;
    }

    // Email validation
    if (emailcheck.test(email)) {
        document.getElementById('emailerror').innerHTML = " ";
    } else {
        document.getElementById('emailerror').innerHTML = "**Invalid Email";
        return false;
    }

    // Password validation
    if (passwordcheck.test(password)) {
        document.getElementById('passworderror').innerHTML = "";
    } else {
        document.getElementById('passworderror').innerHTML = "**Invalid Password";
        return false;
    }

    // Confirm password validation
    if (password === cpassword) {
        document.getElementById('cpassworderror').innerHTML = "";
    } else {
        document.getElementById('cpassworderror').innerHTML = "**Passwords do not match";
        return false;
    }

    return true; // If all validations pass, form can be submitted
}
redirectto()
{
    window.location.href='../ht'
}
