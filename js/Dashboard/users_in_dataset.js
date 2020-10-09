//Get All Users
function getAllUsersAPI(callBack) {
    ajaxRequest('GET', base_path + "api/1.0.0/user/all", null, function (dataSet) {
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


//Debug On Dashboard
if (debug_on === 1) {
    //alert('DEBUG ON');
    if (base_url === 'file:///C:/xampp/htdocs/HRM/AusoWorldHR/') {
        alert("Seems to be you still didn't change (base_url) path.Please change it! -> Path: js/funtions.js ");
    }
}