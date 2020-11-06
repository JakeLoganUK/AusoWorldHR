function leaveApplyAttributeHandler(data, type, callBack) {
    let attribute = '';
    if (data) {
        if (type === 1) {// Type by ID = 1
            attribute = 'id';
        } else if (type === 2) {//Nic 2
            attribute = 'user_id';
        }
    } else {
        return false;
    }
    ajaxRequest('GET', base_path + "api/1.0.0/leave_apply/" + attribute + "/" + data, null, function (dataSet) {
        if (typeof callBack !== 'undefined' && callBack != null && typeof callBack === "function") {
            callBack(dataSet);
        }
    });
}