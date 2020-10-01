//Method API
function methodLeaveGroupSYS(data, method, id, callBack) {
    //Current Usage Explained - POST/1 , PUT/2 , DELETE/3 , GET/4
    let DATA_METHOD = '';
    let URL = '';

    if (method === 1) {
        DATA_METHOD = 'POST';
        URL = base_path + 'api/1.0.0/leave_groups';
    } else if (method === 2) {
        DATA_METHOD = 'PUT';
        URL = base_path + 'api/1.0.0/leave_groups/' + id;
    } else if (method === 3) {
        DATA_METHOD = 'DELETE';
        URL = base_path + 'api/1.0.0/leave_groups/' + id;
    } else if (method === 4) {
        DATA_METHOD = 'GET';
        URL = base_path + 'api/1.0.0/leave_groups';
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

function selectedApplication_table(obj, callBack) {
    var tbl = "";
    if (obj.length == 0) {
        tbl = "<tr><td colspan='3'>No Data Found</td></tr>";
    } else {
        $.each(obj, function (index, row) {
            tbl += '<tr>';
            tbl += '<td>' + ++index + '</td>';
            tbl += '<td>' + row.leave_type + '</td>';
            tbl += '<td><button value="' + row.id + '" type="button" class="btn btn-danger app_removeBtn">Remove</button></td>';
            tbl += '</tr>';
        });
    }
    $('#tblLeaveTypeSetup tbody').html(tbl);
    if (typeof callBack !== 'undefined' && callBack != null && typeof callBack === "function") {
        callBack();
    }
}

function getLeaveGroupTableUI(callBack) {
    var table = "";
    var id = 1;
    methodLeaveGroupSYS(null, 4, null, function (dataSet) {
        if (dataSet) {
            $.each(dataSet, function (index, set) {
                table += "<tr>";
                table += "<td>" + id++ + "</td>";
                table += "<td>" + set.name + "</td>";
//                table += "<td><button value='" + set.id + "' type='button' class='btn btn-block btn-success btn-xs reqActionBtn'>Select</button></td>";
                table += "<td style='width: 10px'><button type='button' value='" + set.id + "' class='btn btn-block btn-dark reqActionBtn btn-sm'><i class='fa fa-edit'></i></button></td>";
                table += "</tr>";
            });
        } else {
            table = "<td value=''>No Data Found</td>";
        }
        $('#leaveGroupList tbody').html(table);
        if (typeof callBack !== 'undefined' && callBack != null && typeof callBack === "function") {
            callBack();
        }
    });
}

function leaveGroupAttributeHandler(data, type, callBack) {
    let attribute = '';
    if (data) {
        if (type === 1) {// Type by ID = 1
            attribute = 'id';
        } else if (type === 2) {//Nic 2
            attribute = 'leave_groups';
        }
    } else {
        return false;
    }
    ajaxRequest('GET', base_path + "api/1.0.0/leave_groups/" + attribute + "/" + data, null, function (dataSet) {
        if (typeof callBack !== 'undefined' && callBack != null && typeof callBack === "function") {
            callBack(dataSet);
        }
    });
}

function setOtherButtonValue(e) {
    $("#updateBtn").val(e);
    $("#removeBtn").val(e);
}

//Required Field
//Current Action = save/1 , update/2
function leaveGroupRequiredFieldHandler(frm_data, action, required_class) {
    var response = true;
    if (frm_data.leave_types.length == 0) {
        toastr.error('Please Add Leave Types Before Create Group!');
        response = false;
    }
    if (frm_data.name.length == 0) {
        toastr.error('Group Type Name Required!');
        response = false;
    }
    if (action === 1) { //Actions only in Save

    }
    $(required_class).each(function () {
        if ($(this).val().length === 0) {
//            $(this).addClass("has-error");
        } else {
//            $(this).removeClass("has-error");
        }
    });
    return response;
}

//Get Page DataSets
function formLeaveData() {
    var nameArray = ITEM_LIST.map(function (el) {
        return el.id;
    });
    var data = {
        "name": $("#leave_group").val(),
        "leave_types": nameArray
    };
    return data;
}

function resetLGClientSideData() {
    $("#leave_group").val('');
    //Buttons
    $("#saveBtn").val('');
    $("#updateBtn").val('');
    $("#removeBtn").val('');
    $("#updateBtn").addClass('hidden');
    $("#removeBtn").addClass('hidden');
    $('#saveBtn').removeClass('hidden');
}