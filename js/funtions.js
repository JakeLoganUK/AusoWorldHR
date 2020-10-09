var debug_on = 0; //Debug Me 0/1
var base_path = 'https://www.qa.ceytechsystemsolutions.com/userManagement/public/'; //Enter Base API URL
var base_url = 'file:///C:/xampp/htdocs/HRM/AusoWorldHR/'; //Please Enter Your Basic URL

function ajaxRequest(Method, url, data, callBack) {
    $.ajax({
        type: Method,
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('othKey'),
            "Accept": "application/json"
        },
        url: url,
        data: data,
        cache: false,
        success: function (result) {
            if (typeof callBack !== 'undefined' && callBack != null && typeof callBack === "function") {
                callBack(result);
            }
        }, error: function (jqXHR, exception) {
            var msg = '';
            if (jqXHR.status === 0) {
                msg = 'Not connect.\n Verify Network.';
            } else if (jqXHR.status == 401) {
                location.replace(base_url + 'index.html');
            } else {
                msg = 'Uncaught Error.\n' + jqXHR.responseText;
            }

            if (typeof callBack !== 'undefined' && callBack != null && typeof callBack === "function") {
                callBack(msg);
            }
        }
    });
}

function logOutUser() {
    localStorage.removeItem('othKey');
    location.replace(base_url + 'index.html');
    localStorage.clear();
}

//Manage Basic Buttons Env
function setupBtnEnv() {
    $('#saveBtn').addClass('hidden');
    $('#removeBtn').removeClass('hidden');
    $('#updateBtn').removeClass('hidden');
}

function show_result_alert(response, msg) {
    if (response.id === 1) {
        toastr.success('Success! | ' + msg + '');
    } else {
        //This must be improve with error msg
        toastr.error('Error! | Failed To Complete Task.');
    }
}
function show_message(type, msg) { //Type - Success = 1, Warn = 2 & Error = 3
    if (type === 1) {
        toastr.success(msg);
    } else if (type === 2) {
        toastr.warning(msg);
    } else {
        toastr.error(msg);
    }
}

//OpeN User Auth Setup
var logged_User = localStorage.getItem('copr_uname');
$('.corp_log_user').text(logged_User);
var userPriv = 0;
if (userPriv === 0) {
//Do nothing for now
} else {
    $('.nPaM').remove(); //Not privilaged Admin
}

//ClosE Auth Setup