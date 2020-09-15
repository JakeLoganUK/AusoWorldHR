//Required Field
//Current Action = save/1 , update/2
function employeeRequiredFieldHandler(frm_data, action, required_class) {
    var response = true;
    if (frm_data.designation.length == 0) {
        toastr.error('Designation Required!');
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