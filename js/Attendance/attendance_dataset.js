function getAttendanceTableUI(callBack) {
    var table = "";
    var id = 1;
    methodAttendanceAJAX(null, 4, null, function (dataSet) {
        if (dataSet) {
            $.each(dataSet, function (index, set) {
                table += "<tr>";
                table += "<td>" + id++ + "</td>";
                table += "<td>" + set.name + "</td>";
                table += "<td>" + set.date + "</td>";
                table += "<td>" + set.time_table + "</td>";
                table += "<td>" + set.on_duty + "</td>";
                table += "<td>" + set.off_duty + "</td>";
                table += "<td>" + set.clock_in + "</td>";
                table += "<td>" + set.clock_out + "</td>";
                table += "<td>" + set.late + "</td>";
                table += "<td>" + set.early + "</td>";
                if (set.absent == 0) {
                    table += "<td><span class='label label-success'>Present</span></td>";
                } else {
                    table += "<td><span class='label label-danger'>Absent</span></td>";
                }
                table += "<td>" + set.ot_time + "</td>";
                table += "<td>" + set.work_time + "</td>";
                table += "<td style='width: 10px'><button type='button' value='" + set.id + "' class='btn btn-block btn-dark reqActionBtn btn-sm'><i class='fa fa-edit'></i></button></td>";
                table += "</tr>";
            });
        } else {
            table = "<td value=''>No Data Found</td>";
        }
        $('#attandanceFullList tbody').html(table);
//        $('#attandanceFullList').DataTable();
        $('#attandanceFullList').DataTable({
            dom: 'Bfrtip',
            buttons: [
                'copy', 'csv', 'excel', 'pdf'
            ]
        });
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
        } else if (type === 2) {//name 2
            attribute = 'name';
        } else if (type === 3) {
            attribute = 'date';
        } else if (type === 4) {
            attribute = 'absent';
        }
    } else {
        return false;
    }
    ajaxRequest('GET', base_path + "api/1.0.0/attendance/" + attribute + "/" + data, null, function (dataSet) {
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
function AttendanceRequiredFieldHandler(frm_data, action, required_class) {
    var response = true;
    if (frm_data.timetable.length == 0) {
        toastr.error('Timetable Required!');
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
function formAttendDataUpload() {
    var data = {
        file: $('#file-type')[0].files[0]
    };
    return data;
}
//Get Page DataSets
function formAttendData() {
    var data = {
//        ac_no: $('#ac_no-type').val(),
        name: $('#name').val(),
        date: $('#date').val(),
        timetable: $('#timetable').val(),
        on_duty: $('#on_duty').val(),
        clock_in: $('clock_in').val(),
        clock_out: $('#clock_out').val(),
        late: $('#late').val(),
        early: $('#early').val(),
        absent: $('#absent').val(),
        ot_time: $('#ot_time').val(),
        work_time: $('#work_time').val()
    };
    return data;
}

function resetAttendClientSideData() {
    $("#leave_type").val('');
    $("#no_of_days").val('');
    $('.exeFileLoad').removeClass('hidden');
    $('.sectionUpdateAttandance').addClass('hidden');
    //Buttons
    $("#saveBtn").val('');
    $("#updateBtn").val('');
    $("#removeBtn").val('');
    $("#updateBtn").addClass('hidden');
    $("#removeBtn").addClass('hidden');
    $('#saveBtn').removeClass('hidden');
}