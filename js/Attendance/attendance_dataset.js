function getAttendanceTableUI(callBack) {
    var table = "";
    var id = 1;
    methodAttendanceSYS(null, 4, null, function (dataSet) {
        if (dataSet) {
            $.each(dataSet, function (index, set) {
                table += "<tr>";
                table += "<td>" + id++ + "</td>";
                table += "<td>" + set.leave_type + "</td>";
                table += "<td>" + set.no_of_days + "</td>";
                table += "<td><button value='" + set.id + "' type='button' class='btn btn-block btn-success btn-xs reqActionBtn'>Select</button></td>";
                table += "</tr>";
            });
        } else {
            table = "<td value=''>No Data Found</td>";
        }
        $('#leaveTypeList tbody').html(table);
        if (typeof callBack !== 'undefined' && callBack != null && typeof callBack === "function") {
            callBack();
        }
    });
}

function attendanceAttributeHandler(data, type, callBack) {
    let attribute = '';
    if (data) {
        if (type === 1) {// Type by ID = 1
            attribute = 'id';
        } else if (type === 2) {//Nic 2
            attribute = 'leave_type';
        }
    } else {
        return false;
    }
    ajaxRequest('GET', base_path + "api/1.0.0/leave_configs/" + attribute + "/" + data, null, function (dataSet) {
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
function leaveTypeRequiredFieldHandler(frm_data, action, required_class) {
    var response = true;
    if (frm_data.no_of_days.length == 0) {
        toastr.error('No Of Days Required!');
        response = false;
    }
    if (frm_data.leave_type.length == 0) {
        toastr.error('Leave Type Required!');
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
    var data = {
        "file": $("#leave_type").val()
    };
    return data;
}

function resetAttendClientSideData() {
    $("#leave_type").val('');
    $("#no_of_days").val('');
    //Buttons
    $("#saveBtn").val('');
    $("#updateBtn").val('');
    $("#removeBtn").val('');
    $("#updateBtn").addClass('hidden');
    $("#removeBtn").addClass('hidden');
    $('#saveBtn').removeClass('hidden');
}