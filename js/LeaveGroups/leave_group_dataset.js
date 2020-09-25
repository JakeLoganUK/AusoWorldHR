//Method API
function methodLeaveGroupSYS(data, method, id, callBack) {
    //Current Usage Explained - POST/1 , PUT/2 , DELETE/3 , GET/4
    let DATA_METHOD = '';
    let URL = '';

    if (method === 1) {
        DATA_METHOD = 'POST';
        URL = '/api/leave_configs';
    } else if (method === 2) {
        DATA_METHOD = 'PUT';
        URL = '/api/leave_configs/' + id;
    } else if (method === 3) {
        DATA_METHOD = 'DELETE';
        URL = '/api/leave_configs/' + id;
    } else if (method === 4) {
        DATA_METHOD = 'GET';
        URL = '/api/leave_configs/' + id;
    } else {
        return false;
    }
    ajaxRequest(DATA_METHOD, URL, data, function (dataSet) {
        if (typeof callBack !== 'undefined' && callBack != null && typeof callBack === "function") {
            callBack(dataSet);
        }
    });
}

function getCommitteeTableUI(callBack) {
    var table = "";
    var id = 1;
    ajaxRequest('GET', "/api/committees", null, function (dataSet) {
        if (dataSet) {
            $.each(dataSet, function (index, committee) {
                table += "<tr>";
                table += "<td>" + id++ + "</td>";
                table += "<td>" + committee.name + "</td>";
                table += "<td>" + committee.schedule_date + "</td>";
                table += '<td><a href="/committee_remarks/id/' + committee.id + '" type="button" target="_blank" class="btn btn-dark btn-xs"> Comment </a></td>';
                table += "<td><button id='" + committee.id + "' value='" + committee.id + "' type='button' class='btn btn-block btn-success btn-xs btnAction'>Select</button></td>";
                table += "</tr>";
            });
        } else {
            table = "<option value=''>No Data Found</option>";
        }
        $('#tblCommittees tbody').html(table);
        if (typeof callBack !== 'undefined' && callBack != null && typeof callBack === "function") {
            callBack();
        }
    });