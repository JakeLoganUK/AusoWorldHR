//Handle User Auth
userAuthAPI(function (e) {
    localStorage.setItem('copr_uname', e.first_name + ' ' + e.last_name);
    localStorage.setItem('copr_utype', e.is_admin);
    localStorage.setItem('copr_auth_set', JSON.stringify(e));
    $('.corp_log_user').text(e.first_name + ' ' + e.last_name);
    let role0f_User = e.is_admin;
    if (role0f_User == 0) {
        $('.nPaM').remove(); //Not privilaged Admin
        $('.viewUr').text('View Attendance');
    } else if (role0f_User === 1) {
        //Do Nothing Its Admin
    } else if (role0f_User === 2) {
        $('.nPaM').remove(); //Not privilaged Admin
    } else if (role0f_User === 3) {
        $('.nPaM').remove(); //Not privilaged Admin
    } else if (roleOf_User === 4) {
        $('.nPaM').remove(); //Not privilaged Admin
    } else {
        alert(3);
    }
});