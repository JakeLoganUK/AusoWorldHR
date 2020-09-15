//Required Field
//Current Action = save/1 , update/2
function userRequiredFieldHandler(frm_data, action, required_class) {
    var response = true;
    if (frm_data.date_of_birth.length == 0) {
        toastr.error('Date Of Birth Required!');
        response = false;
    }
    if (frm_data.nic.length == 0) {
        toastr.error('NIC Required!');
        response = false;
    }
    if (action == 1) {
        if (frm_data.password.length == 0) {
            toastr.error('Password Required!');
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