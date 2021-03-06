function submitDataWithFile(url, frmDta, callBack, metod = false) {
    let formData = new FormData();
    // populate fields
    $.each(frmDta, function (k, val) {
        formData.append(k, val);
    });
    ulploadFile2(url, formData, function (result) {
        if (typeof callBack !== 'undefined' && callBack !== null && typeof callBack === "function") {
            callBack(result);
        }
    }, metod);
}

function ulploadFile2(URL, formData, callBack, metod = false) {
    if (!metod) {
        metod = 'POST';
    }
    /*
     let formData = new FormData();
     // populate fields
     let image1 = $('#image1')[0].files[0];// file
     formData.append('title', title);
     formData.append('image1', image1);
     return false;
     */
    // send form data
    $.ajax({
        type: metod,
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('othKey'),
            "Accept": "application/json"
        },
        xhr: function () {
            var xhr = new window.XMLHttpRequest();
            xhr.upload.addEventListener("progress", function (evt) {
                if (evt.lengthComputable) {
                    $('.progress').removeClass('d-none');
                    var percentComplete = evt.loaded / evt.total;
                    percentComplete = parseInt(percentComplete * 100);
                    let bar_width = percentComplete + '%';
                    $('.Uploadprogress').width(bar_width);
                    if (percentComplete === 100) {
                        $('.progress').addClass('d-none');
                    }
                }
            }, false);
            return xhr;
        },
        url: URL,
        data: formData,
        contentType: false,
        processData: false
    }).done(function (response) {
        if (typeof callBack !== 'undefined' && callBack != null && typeof callBack === "function") {
            callBack(response);
        }
    }).fail(function (jqXHR, exception) {
        var msg = '';
        if (jqXHR.status === 0) {
            msg = 'Not connect.\n Verify Network.';
        } else if (jqXHR.status == 401) {
            msg = 'You Dont Have Privilege To Performe This Action!';
        } else if (jqXHR.status == 422) {
            msg = 'Validation Error !';
        } else if (jqXHR.status == 404) {
            msg = 'Requested page not found. [404]';
        } else if (jqXHR.status == 500) {
            msg = 'Internal Server Error [500].';
        } else if (exception === 'parsererror') {
            msg = 'Requested JSON parse failed.';
        } else if (exception === 'timeout') {
            msg = 'Time out error.';
        } else if (exception === 'abort') {
            msg = 'Ajax request aborted.';
        } else {
            msg = 'Uncaught Error.\n' + jqXHR.responseText;
        }
        alert(msg);
        if (typeof callBack !== 'undefined' && callBack != null && typeof callBack === "function") {
            callBack(msg);
        }
    });
}