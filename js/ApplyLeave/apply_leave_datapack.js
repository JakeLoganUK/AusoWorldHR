//Required Field
//Current Action = save/1 , update/2
function applyLeaveRequiredFieldHandler(frm_data, action, required_class) {
    var response = true;
    if (frm_data.from_date.length == 0) {
        toastr.error('From Date Required!');
        response = false;
    }
    if (frm_data.to_date.length == 0) {
        toastr.error('To Date Required!');
        response = false;
    }
    if (frm_data.comment.length == 0) {
        toastr.error('Comment Required!');
        response = false;
    }
    if (action == 1) {
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
function formLeaveApplyData() {
    var data = {
//        ac_no: $('#ac_no-type').val(),
        leave_config_id: $('#leave_type').val(),
        from_date: $('#leaveFrom').val(),
        to_date: $('#leaveTo').val(),
        user_id: $('#assignUser').val(),
        comment: $('#comment').val(),
        attachment: $('#attachment').val(),
        status: $('#status').val()
    };
    return data;
}

//Leave Table
function getLeaveApplyTableUI(callBack) {
    var table = "";
    var id = 1;
    methodLeaveApplySYS(null, 4, null, function (dataSet) {
        if (dataSet) {
            $.each(dataSet, function (index, set) {
                table += "<tr>";
                table += "<td>" + id++ + "</td>";
                table += "<td>" + set.comment + "</td>";
                if (set.status == 0) {
                table += "<td><span class='label label-warning'>Pending</span></td>";
                }else if (set.status == 1) {
                table += "<td><span class='label label label-success'>Approved</span></td>";
                }else{
                table += "<td><span class='label label-danger'>Rejected</span></td>";
                }
                table += "<td style='width: 10px'><button type='button' value='" + set.id + "' class='btn btn-block btn-dark reqActionBtn btn-sm'><i class='fa fa-edit'></i></button></td>";
                table += "</tr>";
            });
        } else {
            table = "<td value=''>No Data Found</td>";
        }
        $('#leaveAppliesTbl tbody').html(table);
        if (typeof callBack !== 'undefined' && callBack != null && typeof callBack === "function") {
            callBack();
        }
    });
}

function setOtherButtonValue(e) {
    $("#updateBtn").val(e);
    $("#removeBtn").val(e);
}
function resetLTClientSideData() {
    $("#leaveFrom").val('');
    $("#leaveTo").val('');
    //Buttons
    $("#saveBtn").val('');
    $("#updateBtn").val('');
    $("#removeBtn").val('');
    $("#updateBtn").addClass('hidden');
    $("#removeBtn").addClass('hidden');
    $('#saveBtn').removeClass('hidden');
}