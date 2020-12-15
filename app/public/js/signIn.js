document.getElementById('login_btn').onclick = () => {
    let username = document.getElementById('unameSI').value;
    let psswrd = document.getElementById('pswrdSI').value;
    let snackMsg = document.getElementById('snackbar');
    
    if (psswrd == "" || username == "") {
        //snackMsg.value = "Login failed, please confirm your login and password";
        snackMsg.innerHTML = "Error! Can't login, invalid username/password, please try again!";
        snackMsg.className = "show";
        setTimeout(function(){ snackMsg.className = snackMsg.className.replace("show", ""); }, 3000);
    }
    else {
        snackMsg.innerHTML = "Login Successful!";
        snackMsg.className = "show";
        setTimeout(function(){ snackMsg.className = snackMsg.className.replace("show", ""); }, 3000);
    }
}

document.getElementById('createAcc_btn').onclick = () => {
    let username = document.getElementById('unameSU').value;
    let psswrd = document.getElementById('pwrdSU').value;
    let psswrdCon = document.getElementById('pwrdConSU').value;
    let snackMsg = document.getElementById('snackbar');

    if (psswrd == "" || username == "" || psswrdCon == "") {
        snackMsg.innerHTML = "Error! Can't create account, invalid username/password"
        snackMsg.className = "show";
        setTimeout(function(){ snackMsg.className = snackMsg.className.replace("show", ""); }, 3000);
    }
    else if (psswrd != psswrdCon) {
        snackMsg.innerHTML = "Your new password entries do not match please try again!";
        snackMsg.className = "show";
        setTimeout(function(){ snackMsg.className = snackMsg.className.replace("show", ""); }, 3000);
    }
    else {
        snackMsg.innerHTML = "Account Created Successfully";
        snackMsg.className = "show";
        setTimeout(function(){ snackMsg.className = snackMsg.className.replace("show", ""); }, 3000);
    }
}

