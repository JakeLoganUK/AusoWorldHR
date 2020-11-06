//Leave Table
function pendingLeavesTableUI(callBack) {
    var table = "";
    var id = 1;
    let uId = localStorage.getItem('copr_usrid');
    leaveApplyAttributeHandler(uId, 2, function (dataSet) {
        if (dataSet) {
            $.each(dataSet, function (index, set) {
                table += "<tr>";
                table += "<td>" + set.user_id + "</td>";
                table += "<td>" + set.leave_config_id + "</td>";
                table += "<td>" + set.comment + "</td>";
//                if (set.status == 0) {
//                    table += "<td><span class='label label-warning'>Pending</span></td>";
//                } else if (set.status == 1) {
//                    table += "<td><span class='label label label-success'>Approved</span></td>";
//                } else {
//                    table += "<td><span class='label label-danger'>Rejected</span></td>";
//                }
                table += "<td style='width: 10px'><a type='button' target='_blank' href='Forms/ApplyForLeave.html' value='" + set.id + "' class='btn btn-block btn-dark reqActionBtn btn-sm'><i class='fa fa-edit'></i></a></td>";
                table += "</tr>";
            });
        } else {
            table = "<td value=''>No Data Found</td>";
        }
        $('#pendingLeavesTbl tbody').html(table);
        let rowCount = $('#pendingLeavesTbl tr').length - 1;
        $('.leavesCount').text(rowCount);
//        $('#pendingLeavesTbl').DataTable();
        if (typeof callBack !== 'undefined' && callBack != null && typeof callBack === "function") {
            callBack();
        }
    });
}