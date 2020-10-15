function getTireTableUI(callBack) {
    var table = "";
    var id = 1;
    methodTireAJAX(null, 4, null, function (dataSet) {
        if (dataSet) {
            $.each(dataSet, function (index, set) {
                table += "<tr>";
                table += "<td>" + id++ + "</td>";
                table += "<td>" + set.name + "</td>";
                table += "<td style='width: 10px'><button type='button' value='" + set.id + "' class='btn btn-block btn-dark reqActionBtn btn-sm'><i class='fa fa-edit'></i></button></td>";
                table += "</tr>";
            });
        } else {
            table = "<td value=''>No Data Found</td>";
        }
        $('#tireList tbody').html(table);
        if (typeof callBack !== 'undefined' && callBack != null && typeof callBack === "function") {
            callBack();
        }
    });
}

function tireAttributeHandler(data, type, callBack) {
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
    ajaxRequest('GET', base_path + "api/1.0.0/tire/" + attribute + "/" + data, null, function (dataSet) {
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
function tireRequiredFieldHandler(frm_data, action, required_class) {
    var response = true;
    if (frm_data.tire.length == 0) {
        toastr.error('Tire Required!');
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
function formTireData() {
    var data = {
        tire: $('#tire').val()
    };
    return data;
}

function resettireClientSideData() {
    $("#tire").val('');
    //Buttons
    $("#saveBtn").val('');
    $("#updateBtn").val('');
    $("#removeBtn").val('');
    $("#updateBtn").addClass('hidden');
    $("#removeBtn").addClass('hidden');
    $('#saveBtn').removeClass('hidden');
}