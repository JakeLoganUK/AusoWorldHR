//Get All Users
function getAllUsersAPI(callBack) {
    ajaxRequest('GET', base_path + "api/1.0.0/user/all", null, function (dataSet) {
        if (typeof callBack !== 'undefined' && callBack != null && typeof callBack === "function") {
            callBack(dataSet);
        }
    });
}