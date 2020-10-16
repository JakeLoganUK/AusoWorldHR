if (localStorage.getItem('othKey') == undefined) {
    location.replace('index.html')
}

//User Auth Controller
let user_role = localStorage.getItem('copr_utype');
if (user_role == 0) {//User
    $('.nPaM').remove(); //Not privilaged Admin(nPaM)
} else if (user_role == 1) {//Admin
    //Do Nothing Its Admin
} else if (user_role == 2) {//Editor
    $('.nPaM').remove();
} else if (user_role == 3) {//HR
    $('.nPaM').remove();
} else if (user_role == 4) {//IT
    $('.nPaM').remove();
} else {
//NA
}