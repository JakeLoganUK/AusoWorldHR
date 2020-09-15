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