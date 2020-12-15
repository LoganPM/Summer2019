document.getElementById('login_btn').onclick = () => {
    let username = document.getElementById('unameSI').value;
    let psswrd = document.getElementById('pswrdSI').value;

    if (psswrd == "" || username == ""){
        document.getElementById('alerts').value = "invalid username or password, please try again";
    }
    else {
        document.getElementById('alerts').value = "Welcome!";
    }
}

document.getElementById('createAcc_btn').onclick = () => {
    let username = document.getElementById('unameSU').value;
    let psswrd = document.getElementById('pwrdSU').value;
    let psswrdCon = document.getElementById('pwrdConSU').value;
   
    if (psswrd == "" || username == "" || psswrdCon == "") {
        document.getElementById('alerts').value = "invalid username or password, please try again";
    }
    else if (psswrd != psswrdCon) {
        document.getElementById('alerts').value = "Your password entries do not match please try again!";
    }
    else {
        document.getElementById('alerts').value = "Welcome! Thanks for signing up";
    }
}
