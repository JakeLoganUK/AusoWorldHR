//Update User Profile
function profileUpdateAPI(id, data, callBack) {
    ajaxRequest('PUT', base_path + "api/1.0.0/user/" + id, data, function (dataSet) {
        if (typeof callBack !== 'undefined' && callBack != null && typeof callBack === "function") {
            callBack(dataSet);
        }
    });
}
//User Auth
function userAuthAPI(callBack) {
    ajaxRequest('GET', base_path + "api/1.0.0/user/auth", null, function (dataSet) {
        if (typeof callBack !== 'undefined' && callBack != null && typeof callBack === "function") {
            callBack(dataSet);
        }
    });
}

var auth_Pack = JSON.parse(localStorage.getItem("copr_auth_set"));
function formProfileUser() {
    var data = {
        "user_name": $("#username").val(),
        "is_admin": auth_Pack['is_admin'],
        "initials": $("#initials").val(),
        "first_name": $("#first_Name").val(),
        "last_name": $("#last_Name").val(),
        "surname": $("#surname").val(),
        "nic": $("#nic").val(),
        "date_of_birth": $("#dateOfBirth").val(),
        "gender": $("#gender").val(),
        "title": $("#title").val(),
        "religion": $("#religion").val(),
        "nationality": $("#nationality").val(),
        "race": $("#race").val(),
        "email": $("#email").val(),
        "mobile": $("#mobile").val(),
        "land_line": $("#land_Line").val(),
        "status": $("#status").val(),
        "civil_status": $("#civil_Status").val()
    };
    return data;
}