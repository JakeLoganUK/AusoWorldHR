function leaveTypesCombo(callBack) {
    var cbo = "";
    methodLeaveTypeSYS(null, 4, null, function (dataSet) {
        if (dataSet) {
            $.each(dataSet, function (index, set) {
                cbo += '<option value="' + set.id + '">' + set.leave_type + '</option>';
            });
        } else {
            cbo = "<option value=''>No Data Found</option>";
        }
        $('#leave_type').html(cbo);
        if (typeof callBack !== 'undefined' && callBack != null && typeof callBack === "function") {
            callBack();
        }
    });
}

//Method API
function methodLeaveApplySYS(data, method, id, callBack) {
    //Current Usage Explained - POST/1 , PUT/2 , DELETE/3 , GET/4
    let DATA_METHOD = '';
    let URL = '';

    if (method === 1) {
        DATA_METHOD = 'POST';
        URL = base_path + 'api/1.0.0/leave_apply';
    } else if (method === 2) {
        DATA_METHOD = 'PUT';
        URL = base_path + 'api/1.0.0/leave_apply/' + id;
    } else if (method === 3) {
        DATA_METHOD = 'DELETE';
        URL = base_path + 'api/1.0.0/leave_apply/' + id;
    } else if (method === 4) {
        DATA_METHOD = 'GET';
        URL = base_path + 'api/1.0.0/leave_apply';
    } else {
        return false;
    }
    ajaxRequest(DATA_METHOD, URL, data, function (dataSet) {
        if (typeof callBack !== 'undefined' && callBack != null && typeof callBack === "function") {
            callBack(dataSet);
        }
    });
}

function leaveTypesCombo(callBack) {
    var cbo = "";
    methodLeaveTypeSYS(null, 4, null, function (dataSet) {
        if (dataSet) {
            $.each(dataSet, function (index, set) {
                cbo += '<option value="' + set.id + '">' + set.leave_type + '</option>';
            });
        } else {
            cbo = "<option value=''>No Data Found</option>";
        }
        $('#leave_type').html(cbo);
        if (typeof callBack !== 'undefined' && callBack != null && typeof callBack === "function") {
            callBack();
        }
    });
}

//Method Upload API
function methodLeaveApplyUPLOAD(data, method, id, callBack) {
    //Current Usage Explained - POST/1 , PUT/2 , DELETE/3 , GET/4
    let DATA_METHOD = '';
    let URL = '';

    if (method === 1) {
        DATA_METHOD = 'POST';
        URL = base_path + 'api/1.0.0/leave_apply';
    } else if (method === 2) {
        DATA_METHOD = 'PUT';
        URL = base_path + 'api/1.0.0/leave_apply/' + id;
    } else if (method === 3) {
        DATA_METHOD = 'DELETE';
        URL = base_path + 'api/1.0.0/leave_apply/' + id;
    } else if (method === 4) {
        DATA_METHOD = 'GET';
        URL = base_path + 'api/1.0.0/leave_apply';
    } else {
        return false;
    }
    submitDataWithFile(URL, data, function (dataSet) {
        if (typeof callBack !== 'undefined' && callBack != null && typeof callBack === "function") {
            callBack(dataSet);
        }
    }, DATA_METHOD);
}