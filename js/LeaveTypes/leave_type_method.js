//Method API
function methodLeaveTypeSYS(data, method, id, callBack) {
    //Current Usage Explained - POST/1 , PUT/2 , DELETE/3 , GET/4
    let DATA_METHOD = '';
    let URL = '';

    if (method === 1) {
        DATA_METHOD = 'POST';
        URL = base_path + 'api/1.0.0/leave_configs';
    } else if (method === 2) {
        DATA_METHOD = 'PUT';
        URL = base_path + 'api/1.0.0/leave_configs/' + id;
    } else if (method === 3) {
        DATA_METHOD = 'DELETE';
        URL = base_path + 'api/1.0.0/leave_configs/' + id;
    } else if (method === 4) {
        DATA_METHOD = 'GET';
        URL = base_path + 'api/1.0.0/leave_configs';
    } else {
        return false;
    }
    ajaxRequest(DATA_METHOD, URL, data, function (dataSet) {
        if (typeof callBack !== 'undefined' && callBack != null && typeof callBack === "function") {
            callBack(dataSet);
        }
    });
}