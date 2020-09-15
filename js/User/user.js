//Create User
function createUser(data, callBack) {
    if (!data) {
        return false;
    }
    ajaxRequest('POST', base_path + "api/1.0.0/user", data, function (dataSet) {
        if (typeof callBack !== 'undefined' && callBack != null && typeof callBack === "function") {
            callBack(dataSet);
        }
    });
}

//Get User Other Data As Object
function getOtherDetails() {
    var Obj = {};
    if ($('#working_Experience').val().trim().length > 0) {
        Obj.working_experience = $('#working_Experience').val();
    }
    if ($('#first_Employer').val().trim().length > 0) {
        Obj.first_employer = $('#first_Employer').val();
    }
    if ($('#last_Employer').val().trim().length > 0) {
        Obj.last_employer = $('#last_Employer').val();
    }
    return Obj;
}

//Get All Users
function getAllUsersAPI(callBack) {
    ajaxRequest('GET', base_path + "api/1.0.0/user/all", null, function (dataSet) {
        if (typeof callBack !== 'undefined' && callBack != null && typeof callBack === "function") {
            callBack(dataSet);
        }
    });
}

//All Users Table
function usersTable() {
    getAllUsersAPI(function (result) {
        var tbl = "";
        if (result.length == 0) {
            tbl = "<tr><td colspan='4'>No Data Found</td></tr>";
        } else {
            $.each(result, function (index, row) {
                tbl += '<tr>';
                tbl += '<td>' + ++index + '</td>';
                tbl += '<td>' + row.first_name + '</td>';
                tbl += ((row.employee) ? '<td>' + row.employee.designation + '</td>' : '<td>-</td>');
                tbl += ((row.email != null) ? '<td>' + row.email + '</td>' : '<td>-</td>');
                if (row.employee) {
                    tbl += '<td>' + new Date(row.employee.join_date).toISOString().split('T')[0] + '</td>';
                } else {
                    tbl += '<td>-</td>';
                }
                tbl += '<td><button type="button" value="' + row.id + '" class="btn btn-block btn-success reqActionBtn btn-sm"><i value="' + row.id + '" class="fa fa-edit"></i></button></td>';
                tbl += '</tr>';
            });
        }
        $('#userList tbody').html(tbl);
        $("#userList").DataTable();
    });
}

//Get User By ID
function getUserByIdAPI(id, callBack) {
    ajaxRequest('GET', base_path + "api/1.0.0/user/" + id, null, function (dataSet) {
        if (typeof callBack !== 'undefined' && callBack != null && typeof callBack === "function") {
            callBack(dataSet);
        }
    });
}
//Update User
function updateUserAPI(id, data, callBack) {
    ajaxRequest('PUT', base_path + "api/1.0.0/user/" + id, data, function (dataSet) {
        if (typeof callBack !== 'undefined' && callBack != null && typeof callBack === "function") {
            callBack(dataSet);
        }
    });
}

//Remove User
function removeUserAPI(id, callBack) {
    ajaxRequest('DELETE', base_path + "api/1.0.0/user/" + id, null, function (dataSet) {
        if (typeof callBack !== 'undefined' && callBack != null && typeof callBack === "function") {
            callBack(dataSet);
        }
    });
}

function resetClientSideData() {
//Reset all forms ex by clientside
}

function resetClientSideData() {
    $("#username").val('');
    $("#initials").val('');
    $("#first_Name").val('');
    $("#last_Name").val('');
    $("#surname").val('');
    $("#nic").val('');
    $("#dateOfBirth").val('');
//                $("#gender").val('');
//                $("#title").val('');
    $("#religion").val('');
    $("#nationality").val('');
    $("#race").val('');
    $("#email").val('');
    $("#mobile").val('');
    $("#land_Line").val('');
//                $("#status").val('');
    $("#password").val('');
//                $("#civil_Status").val('');
    $('#saveBtn').val('');
    $('#removeBtn').val('');
    $('#updateBtn').val('');
    $('#saveBtn').removeClass('hidden');
    $('#removeBtn').addClass('hidden');
    $('#updateBtn').addClass('hidden');
    $('#removeEmpBtn').addClass('hidden');
}