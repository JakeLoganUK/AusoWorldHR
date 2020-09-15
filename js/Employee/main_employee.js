//Create Employee
function createEmployee(data, callBack) {
    if (!data) {
        return false;
    }
    ajaxRequest('POST', base_path + "api/1.0.0/employee", data, function (dataSet) {
        if (typeof callBack !== 'undefined' && callBack != null && typeof callBack === "function") {
            callBack(dataSet);
        }
    });
}

//Get Employee Extra Info
function getEmployeeExtraDetails() {
    var Obj = {};
    if ($('#blood_Group').val().trim().length > 0) {
        Obj.blood_group = $('#blood_Group').val();
    }
    if ($('#edu_1').val().trim().length > 0) {
        Obj.edu_1 = $('#edu_1').val();
    }
    if ($('#edu_2').val().trim().length > 0) {
        Obj.edu_2 = $('#edu_2').val();
    }
    if ($('#residence_Address').val().trim().length > 0) {
        Obj.residence_address = $('#residence_Address').val();
    }
    if ($('#emergency_Contact').val().trim().length > 0) {
        Obj.emergency_contact = $('#emergency_Contact').val();
    }
    if ($('#sPName').val().trim().length > 0) {
        Obj.spname = $('#sPName').val();
    }
    if ($('#sPContact').val().trim().length > 0) {
        Obj.spcontact = $('#sPContact').val();
    }
    return Obj;
}

//Get All Employee
function getAllEmployeeAPI(callBack) {
    ajaxRequest('GET', base_path + "api/1.0.0/employee/all", null, function (dataSet) {
        if (typeof callBack !== 'undefined' && callBack != null && typeof callBack === "function") {
            callBack(dataSet);
        }
    });
}

//All Employee Table
function employeeTable() {
    getAllEmployeeAPI(function (result) {
        var tbl = "";
        if (result.length == 0) {
            tbl = "<tr><td colspan='4'>No Data Found</td></tr>";
        } else {
            $.each(result, function (index, row) {
                tbl += '<tr>';
                tbl += '<td>' + ++index + '</td>';
                tbl += '<td>' + row.user_name + '</td>';
                tbl += '<td>' + row.first_name + '</td>';
                tbl += '<td>' + row.nic + '</td>';
                tbl += '<td>' + row.status + '</td>';
                tbl += '<td><button type="button" value="' + row.id + '" class="btn btn-block btn-success reqActionBtn btn-sm">Select</button></td>';
                tbl += '</tr>';
            });
        }
        $('#employeeList tbody').html(tbl);
    });
}

//Get Employee By ID
function getEmployeeByIdAPI(id, callBack) {
    ajaxRequest('GET', base_path + "api/1.0.0/employee/" + id, null, function (dataSet) {
        if (typeof callBack !== 'undefined' && callBack != null && typeof callBack === "function") {
            callBack(dataSet);
        }
    });
}

//Get Employee By Yser ID
function getEmployeeByUserAPI(id, callBack) {
    ajaxRequest('GET', base_path + "api/1.0.0/employee/user_id/" + id, null, function (dataSet) {
        if (typeof callBack !== 'undefined' && callBack != null && typeof callBack === "function") {
            callBack(dataSet);
        }
    });
}

//Update Employee
function updateEmployeeAPI(id, data, callBack) {
    ajaxRequest('PUT', base_path + "api/1.0.0/employee/" + id, data, function (dataSet) {
        if (typeof callBack !== 'undefined' && callBack != null && typeof callBack === "function") {
            callBack(dataSet);
        }
    });
}

//Remove Employee
function removeEmployeeAPI(id, callBack) {
    ajaxRequest('DELETE', base_path + "api/1.0.0/employee/" + id, null, function (dataSet) {
        if (typeof callBack !== 'undefined' && callBack != null && typeof callBack === "function") {
            callBack(dataSet);
        }
    });
}