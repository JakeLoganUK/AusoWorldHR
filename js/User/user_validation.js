//Required Field
//Current Action = save/1 , update/2
function userRequiredFieldHandler(frm_data, action, required_class) {
    var response = true;
    if (frm_data.initials.length == 0) {
        toastr.error('Initials Required!');
        response = false;
    }
    if (frm_data.date_of_birth.length == 0) {
        toastr.error('Date Of Birth Required!');
        response = false;
    }
    if (frm_data.nic.length == 0) {
        toastr.error('NIC Required!');
        response = false;
    }
    if (frm_data.nic) {
        checkIfNicUnique(frm_data.nic, function (detect) {
            if (detect.length != 0 && detect != null) {
                show_message(3, 'NOTE: This NIC Alrady Taken By Another User!!');
                response = false;
            }
        });
    }
    if (action == 1) {
        if (frm_data.password.length == 0) {
            toastr.error('Password Required!');
            response = false;
        }
        if (frm_data.password.length < 8) {
            toastr.error('Minimum 8 Characters Required For Password!');
            response = false;
        }
    }
    if (frm_data.user_name.length == 0) {
        toastr.error('Username Required!');
        response = false;
    }
    if (frm_data.first_name.length == 0) {
        toastr.error('Firstname Required!');
        response = false;
    }
    if (frm_data.title.length == 0) {
        toastr.error('Title Required!');
        response = false;
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

function checkIfNicUnique(nic, callBack) {
    ajaxRequest('GET', base_path + "api/1.0.0/user/nic/" + nic, null, function (dataSet) {
        if (typeof callBack !== 'undefined' && callBack != null && typeof callBack === "function") {
            callBack(dataSet);
        }
    });
}